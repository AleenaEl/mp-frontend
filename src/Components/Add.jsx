import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideosAPI } from "../../services/allAPI";

// import React from 'react'

// eslint-disable-next-line react/prop-types
function Add({setUploadVideoResponse}) {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);




  const [uploadVideo, setUploadVideo] = useState({
      id:'',caption:'',url:'',link:''
    })

  console.log(uploadVideo);
  

  //to extract the youtube limk
  const getYoutubeEmbedLink = (e) => {
    const { value } = e.target
    if (value.includes('v=')) {
      let vID = value.split('v=')[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({
        ...uploadVideo,
        link: `https://www.youtube.com/embed/${vID}`,
      });
    }
    else {
      setUploadVideo({...uploadVideo,link:''})
    }
  }

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo
    if (!id||!caption||!url||!link) {
      alert('Please fill the missing field')
    }
    else {
      //store uploaded video to json server
      const result = await uploadVideosAPI(uploadVideo)
      console.log(result);
      if (result.status>=200&& result.status<300) {
        // success
        handleClose()
        // empty fileds
        setUploadVideo({
          id: '',
          caption: '',
          url: '',
          link:''
        })
        //after getting succefulresponse
        setUploadVideoResponse(result.data
        )
      }
      else {
        alert(result.message)
      }

    }
  }

  
  return (
    <>
      <div className="d-flex align-item-center">
        <h5>Upload-Videos</h5>
        <button className="btn" onClick={handleShow}>
          <i className="fa-solid fa-upload fa-bounce"></i>
        </button>
        {/* modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FloatingLabel
                controlId="floatingInputId"
                label="video Id"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Video Id"
                  onChange={(e) =>
                    setUploadVideo({ ...uploadVideo, id: e.target.value })
                  }
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingName" label="Video Name">
                <Form.Control
                  type="text"
                  placeholder="Video Name"
                  onChange={(e) =>
                    setUploadVideo({ ...uploadVideo,caption: e.target.value })
                  }
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputImage"
                label="Image URL"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Image URL"
                  className="mt-3"
                  onChange={(e) =>
                    setUploadVideo({ ...uploadVideo, url: e.target.value })
                  }
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingVideo" label="Video URL">
                <Form.Control
                  type="text"
                  placeholder="Video URL"
                  className="mt-3"
                  onChange={getYoutubeEmbedLink
                  }
                />
              </FloatingLabel>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAdd}>Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Add;
