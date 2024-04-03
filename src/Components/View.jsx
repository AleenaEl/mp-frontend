// import React from 'react'

import { useEffect, useState } from "react";
import VideoCard from "../Components/VideoCard";
import { Col, Row } from "react-bootstrap";
import { getAllCategoryAPI, getAlluplaodedVideosAPI, updateCategoryAPI } from "../../services/allAPI";
// eslint-disable-next-line react/prop-types
function View({ uploadVideoResponse, setDropVideoResponse }) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false);

  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoResponse(false);
  }, [uploadVideoResponse, deleteVideoResponse]);

  const getAllUploadedVideos = async () => {
    const result = await getAlluplaodedVideosAPI();
    if (result.status === 200) {
      console.log(result);
      setAllVideos(result.data);
    } else {
      console.log("API Failed");
      setAllVideos([]);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDropped = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"));
    console.log(videoId, categoryId);

    const { data } = await getAllCategoryAPI();
    const selectedCategory = data.find((item) => item.id == categoryId);
    let result = selectedCategory.allVideos.filter(
      (video) => video.id !== videoId
    );
    console.log(result);
    let { id, categoryname } = selectedCategory;
    let newCategory = { id, categoryname, allVideos: result };
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId, newCategory);
    setDropVideoResponse(res)
  };
  return (
    <>
      <Row
        droppable="true"
        onDragOver={(e) => dragOver(e)}
        onDrop={(e) => videoDropped(e)}
      >
        {allVideos?.length > 0 ? (
          allVideos.map((videos) => (
            // eslint-disable-next-line react/jsx-key
            <Col sm={12} md={4} lg={3} className="mx-3 ">
              <VideoCard
                video={videos}
                setDeleteVideoResponse={setDeleteVideoResponse}
              />
            </Col>
          ))
        ) : (
          <p className="text-danger fw-bolder">Nothing To show</p>
        )}
      </Row>
    </>
  );
}

export default View;
