/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import {AddVideosHistoryAPI, deleteVideoAPI} from '../../services/allAPI'

// import React from 'react'

function VideoCard({ video, setDeleteVideoResponse,insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // eslint-disable-next-line no-unused-vars
    const { caption, link } = video;
    let today = new Date();

    console.log(
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(today)
    );
    let timestamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    let videoHistory = { caption, link, timestamp };

    //make api call
    await AddVideosHistoryAPI(videoHistory);
  };


  const removeVideo = async (id) => {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }


  const dragStarted=(e, id) => {
    console.log('Drag Started ...Video Id ' + id);
    e.dataTransfer.setData('VideoId ',id)
  }
  return (
    <>
      <Card draggable onDragStart={e=>dragStarted(e,video?.id)}  style={{ width: "18rem" }} className="border border-2">
        <Card.Img
          variant="top"
          onClick={handleShow}
          src={video?.url}
          height={300}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5>{video?.caption}</h5>

            {insideCategory?null:
            
            <button className="btn" onClick={()=>removeVideo(video?.id)}>
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
            }
          </Card.Title>
        </Card.Body>
      </Card>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="480"
            src={`${video?.link}?autoplay=1`}
            title="JOKER - Teaser Trailer - Now Playing In Theaters"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
