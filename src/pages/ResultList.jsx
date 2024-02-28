import {
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Card,
} from "@chakra-ui/react";
import React from "react";
import ItemCard from "./ItemCard";
const arrayOfItem = [1, 2, 3, 4];
const ResultList = () => {
  return (
    <Box mt={20} minWidth={"90%"} bg={"#f9fafc"}>
      <List spacing={3}>
        {arrayOfItem.map((item) => (
          <ListItem>
            <ItemCard applicationIndex={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ResultList;
