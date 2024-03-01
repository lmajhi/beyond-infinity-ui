import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";
import ItemCard from "./ItemCard";
import Typewriter from "../common/Typwriter";

const ResultList = ({ response }) => {
  console.log("resultLiust", response);
  return (
    <Box mt={20} minWidth={"90%"} bg={"#f9fafc"}>
      <Typewriter text={response.search_summary || ""} delay={20} />
      <ItemCard responseData={response} />
    </Box>
  );
};

export default ResultList;
