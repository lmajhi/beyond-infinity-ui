import { Box, Card, CardBody, Divider, Stack } from "@chakra-ui/react";
import React from "react";
import "./itemcard.css";
import ApplicationDetails from "./ApplicationDetails";
import StageProgress from "./StageProgress";

const ItemCard = ({ responseData }) => {
  return (
    <Card
      maxH={"max-content"}
      boxShadow="lg"
      flexWrap={"wrap"}
      flexGrow={1}
      padding={5}
      className="item-card"
    >
      <CardBody>
        {/* <ApplicationDetails />
          <Divider orientation="vertical" /> */}
        <StageProgress stages={responseData} />
      </CardBody>
    </Card>
  );
};

export default ItemCard;
