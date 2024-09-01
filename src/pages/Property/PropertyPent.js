import React from "react";
import { useParams } from "react-router-dom";
import { usePropertyData } from "../List/usePropertyData";
import Card from "../../component/card/card";
import Container from "../../component/Container";

function PropertyPent() {
  const { filters } = useParams();
  const data = usePropertyData("pent");

  return (
    <>
      <Container>
        <div className="listPage ">
          <div className="listContainer">
            <div className="wrapper">
              {/* Render your UI with fetched data */}
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

export default PropertyPent;
