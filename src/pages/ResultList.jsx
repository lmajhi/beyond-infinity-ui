import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";
import ItemCard from "./ItemCard";

const ResultList = ({ response }) => {
  console.log("resultLiust", response);
  return (
    <Box mt={20} minWidth={"90%"} bg={"#f9fafc"}>
      <ItemCard responseData={response} />
    </Box>
  );
};

export default ResultList;
