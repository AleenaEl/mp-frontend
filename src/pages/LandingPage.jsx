import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import React from 'react'

function LandingPage() {
  const navigateUrl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100 ">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: "40px" }}>
            Welcom to <span className="text-warning">Media player</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae iste
            nesciunt rem dolor. Omnis odio ex inventore sapiente, nam placeat
            eaque quas iure totam commodi harum dolores minima facere
            laboriosam!
          </p>
          <button
            onClick={() => navigateUrl("./home")}
            className="btn btn-info mt-4"
          >
            Get started
          </button>
        </Col>
        <Col lg={5}>
          <img
            src="https://pics.craiyon.com/2023-10-30/6a070207f4f74853a426b1639794f0ce.webp"
            alt=""
            height={400}
            width={500}
          />
        </Col>
        <Col></Col>
      </Row>
      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: "22rem" }} className="p-4 bg-info">
            <Card.Img
              variant="top"
              src="https://cdn.dribbble.com/users/1841951/screenshots/4897456/vr2__1_.gif"
              height={300}
              width={300}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }} className="p-4 bg-info">
            <Card.Img
              variant="top"
              src="https://cdn.dribbble.com/users/1841951/screenshots/4897456/vr2__1_.gif"
              height={300}
              width={300}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }} className="p-4 bg-info">
            <Card.Img
              variant="top"
              src="https://cdn.dribbble.com/users/1841951/screenshots/4897456/vr2__1_.gif"
              height={300}
              width={300}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded border-light p-5 mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className="text-warning">Simple,Powerful & Fast</h4>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Play Everything</span>:
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quae
            necessitatibus iste, soluta quam, quisquam error vitae placeat illo
            non eligendi? Rerum saepe error sequi cum quam iste qui sed.
          </h6>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Categorize Videos</span>:
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quae
            necessitatibus iste, soluta quam, quisquam error vitae placeat illo
            non eligendi? Rerum saepe error sequi cum quam iste qui sed.
          </h6>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">managing Videos</span>:
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quae
            necessitatibus iste, soluta quam, quisquam error vitae placeat illo
            non eligendi? Rerum saepe error sequi cum quam iste qui sed.
          </h6>
        </div>

        <div className="video col-lg-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-BmhAO9XZKs?si=PoVOk8ry3A0DDjpF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
