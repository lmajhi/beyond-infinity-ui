import React, { useState } from "react";
import {
  Box,
  Input,
  Container,
  Stack,
  Button,
  Text,
  Card,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import TopHeader from "../common/TopHeader";
import ResultList from "./ResultList";
import "./homepage.css";
import SkeletonList from "./SkeletonList";
import { Search2Icon } from "@chakra-ui/icons";
import restClient from "../utils/restClient";
const sampleResponse = {
  conf_match: {
    ID: "TYTR",
    "Matching score": 35,
  },
  git_match: {
    ID: "TYTR",
    "Matching score": 35,
  },
  jira_match: {
    ID: "FDA",
    "Matching score": 32,
  },
  search_summary:
    "A greeting or salutation to initiate a conversation or interaction with someone.",
};
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
  const [requestString, setRequestSting] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(sampleResponse);
  const makeApiCall = async () => {
    setIsLoading(true);
    try {
      const response = await restClient.post("/api/v1/search", {
        body: requestString,
      });
      setApiResponse(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <Box minW={"80%"} bg={"#f9fafc"} minH={"100vh"}>
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
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Enter project name or feature"
              value={requestString}
              onChange={(e) => setRequestSting(e.target.value)}
            />
          </InputGroup>
          <Button
            backgroundColor={"#db0011"}
            isDisabled={requestString.length < 1}
            isLoading={isLoading}
            color={"white"}
            _hover={{
              bg: "#af000d",
            }}
            onClick={() => makeApiCall()}
          >
            Submit
          </Button>
        </Stack>
        {!isLoading && Object.keys(apiResponse).length > 0 && (
          <ResultList response={apiResponse} />
        )}
        {isLoading && <SkeletonList />}
        {!true && <NoResultList />}
      </Container>
    </Box>
  );
};

export default HomePage;
