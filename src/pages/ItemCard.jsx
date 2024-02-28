import { Box, Card, CardBody, Divider, Stack } from "@chakra-ui/react";
import React from "react";
import "./itemcard.css";
import ApplicationDetails from "./ApplicationDetails";
import StageProgress from "./StageProgress";

const ItemCard = ({ applicationIndex }) => {
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
        <Stack
          isInline={true}
          alignItems={"center"}
          justifyContent={"space-between"}
          h={150}
        >
          <ApplicationDetails />
          <Divider orientation="vertical" />
          <StageProgress />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
