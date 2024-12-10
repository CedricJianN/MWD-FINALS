import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function CourseCard({ coursesData }) {
  const { _id, imgLink, name, description, price } = coursesData;

  const handleEnrollClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/courses/";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <Card className="course-card p-2 mx-2 my-2 shadow">
      <Card.Img
        variant="top"
        src={imgLink || "https://scalegrid.io/wp-content/uploads/blog-inline-img_advantages-of-DBMS-in-data-management_03-1024x585.png"}
        className="center-crop"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="cc-title">{name}</Card.Title>
        <Card.Text className="txt flex-grow-1">{description}</Card.Text>
        <Card.Subtitle className="txt fw-bold">Price</Card.Subtitle>
        <Card.Text className="txt">{price}</Card.Text>
        <Card.Footer>
          <Button
            variant="primary"
            className="w-100 rounded-pill"
            onClick={handleEnrollClick}
          >
            Enroll
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
