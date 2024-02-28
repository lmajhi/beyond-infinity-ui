import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  Container,
  Stack,
  Button,
  Text,
  Card,
} from "@chakra-ui/react";
import TopHeader from "../common/TopHeader";
import ResultList from "./ResultList";
import "./homepage.css";
import SkeletonList from "./SkeletonList";
//background-color: #af000d; onHOVER

const NoResultList = () => {
  return (
    <Card
      mt={20}
      minWidth={"90%"}
      bg={"#f9fafc"}
      h={20}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>No similar existing application found. </Text>
    </Card>
  );
};
const HomePage = () => {
  return (
    <Box minW={"80%"} bg={"#f9fafc"}>
      <TopHeader />

      <Container mt={50} minW={"80%"}>
        <Text fontSize="2xl" as="b">
          Search
        </Text>
        <Stack
          direction={"row"}
          align="center"
          alignItems={"center"}
          justifyContent={"center"}
          mt={10}
        >
          {/* <FormControl mt={10}> */}
          {/* <FormLabel>Search</FormLabel> */}
          <Input />
          {/* <FormHelperText>Search from existing application</FormHelperText> */}
          {/* </FormControl> */}
          <Button
            backgroundColor={"#db0011"}
            color={"white"}
            _hover={{
              bg: "#af000d",
            }}
          >
            Submit
          </Button>
        </Stack>
        {true && <ResultList />}
        {!true && <SkeletonList />}
        {!true && <NoResultList />}
      </Container>
    </Box>
  );
};

export default HomePage;
