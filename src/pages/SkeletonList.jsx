import React from "react";

import {
  Box,
  ListItem,
  Card,
  CardBody,
  List,
  SkeletonText,
} from "@chakra-ui/react";
const arrayOfItem = [1, 2, 3];

const SkeletonList = () => {
  return (
    <Box mt={20} minWidth={"90%"} bg={"#f9fafc"}>
      <List spacing={3}>
        {arrayOfItem.map((item) => (
          <ListItem>
            <Card>
              <CardBody>
                <SkeletonText
                  mt="4"
                  noOfLines={7}
                  spacing="4"
                  skeletonHeight="2"
                />
              </CardBody>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default SkeletonList;
