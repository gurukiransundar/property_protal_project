import React from "react";
import { useParams } from "react-router-dom";
import { usePropertyData } from "../List/usePropertyData";
import Card from "../../component/card/card";
import Container from "../../component/Container";
import { Link } from 'react-router-dom';

function PropertyApartment() {
  const { filters } = useParams();
  const data = usePropertyData("apartment");

  return (
    <>
      <Container>
        <div className="listPage ">
          {/* <Link to="/new-post" className="newPostButton">
            <button>New Post</button>
          </Link> */}
          <div className="listContainer">
            <div className="wrapper">
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PropertyApartment;
