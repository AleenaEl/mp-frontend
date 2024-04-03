/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Button,  Col, Modal, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addCategoryAPI, deleteCategoryAPI, getAVideosAPI, getAllCategoryAPI, updateCategoryAPI } from "../../services/allAPI";
// import React from 'react'
import VideoCard from "./VideoCard";

// eslint-disable-next-line react/prop-types
function Category({ dropVideoResponse }) {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryname, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryname) {
      const result = await addCategoryAPI({ categoryname, allVideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("please fill the category field");
    }
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropVideoResponse]);
  const getCategories = async () => {
    const { data } = await getAllCategoryAPI();
    setAllCategories(data);
    console.log(allCategories);
  };
  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };
  const dragOver = (e) => {
    console.log("Video Card dragged over the Category");
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("VideoId");
    console.log("video Id " + videoId, "dropped inside category:" + categoryId);
    const { data } = await getAVideosAPI(videoId);
    console.log(data);
    const selectedCategory = allCategories.find(
      (item) => item.id === categoryId
    );
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory);
    getCategories();
  };
  const videoDragStarted = (e, videoId, categoryId) => {
    let datashare = { videoId, categoryId };
    e.dataTransfer.setData("data", JSON.stringify(datashare));
  };

  console.log(allCategories);
  return (
    <>
      <div className="d-grid">
        <button className="btn btn-info" onClick={handleShow}>
          Add Category
        </button>
      </div>
      {allCategories?.length > 0 ? (
        allCategories.map((Category) => (
          // eslint-disable-next-line react/jsx-key
          <div className="border border-2 rounded p-3 my-3">
            <div
              className="d-flex justify-content-between align-items-center"
              droppable="true"
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => videoDrop(e, Category?.id)}
            >
              <h6>{Category?.categoryname}</h6>
              <button
                className="btn "
                onClick={() => removeCategory(Category?.id)}
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            <Row>
              {Category?.allVideos?.length > 0
                ? Category?.allVideos.map((card) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col
                      sm={12}
                      className="mb-3"
                      draggable
                      onDragStart={(e) =>
                        videoDragStarted(e, card.id, Category.id)
                      }
                    >
                      <VideoCard video={card} insideCategory={true} />
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger fw-bolder">No Category yet</p>
      )}

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingName" label="Category Name">
              <Form.Control
                type="text"
                placeholder="Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category