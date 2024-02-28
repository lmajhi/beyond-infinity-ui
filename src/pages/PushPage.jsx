import {
  Box,
  Container,
  Select,
  Stack,
  Text,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TopHeader from "../common/TopHeader";
import restClient from "../utils/restClient";
/**
 *
 * @returns
 * show a dropdown with options as Confluence, Jira
 *  if Conflunce show text input to enter " title"
 * if Jira show text input to enter "project name", "project id"
 */

const BASE_URL = "";

const PushPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [jiraString, setJiraString] = useState("");
  const [confluenceString, setConfluenceString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isApiSuccess, setIsApiSuccess] = useState(false);

  const isSubmitButtonDisable =
    jiraString.length > 0 || confluenceString.length > 0;
  const makeApiCall = async () => {
    console.log("make API call");
    setIsLoading(true);
    if (selectedOption === "jira") {
      try {
        const response = await restClient.get("/api/v1/jira/epic" + jiraString);
        setIsApiSuccess(true);
      } catch (error) {
        console.log("error", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } else if (selectedOption === "confluence") {
      try {
        console.log("confluenceString");
        const response = await restClient.get(
          "/api/v1/confluence/title/" + confluenceString
        );
        setIsApiSuccess(true);
      } catch (error) {
        console.log("error", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } else return;
  };
  return (
    <Box minW={"80%"} minH={"100vh"} bg={"#f9fafc"}>
      <TopHeader />
      <Container mt={50} minW={"80%"}>
        <Text fontSize="2xl" as="b">
          Push Data
        </Text>
        <Stack
          direction={"row"}
          align="center"
          alignItems={"center"}
          justifyContent={"center"}
          mt={10}
        >
          <Select
            placeholder="Select option"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="jira">JIRA</option>
            <option value="confluence">Confluence</option>
          </Select>
          {selectedOption === "jira" && (
            <Input
              type="text"
              placeholder="Enter jira project id"
              value={jiraString}
              onChange={(e) => setJiraString(e.target.value)}
            />
          )}
          {selectedOption === "confluence" && (
            <Input
              type="text"
              placeholder="Enter confluence page title"
              value={confluenceString}
              onChange={(e) => setConfluenceString(e.target.value)}
            />
          )}
          <Button
            backgroundColor={"#db0011"}
            isDisabled={!isSubmitButtonDisable}
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
        {isApiSuccess && (
          <Alert status="success" mt={10}>
            <AlertIcon />
            Data Uploaded to the server. Fire On !
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default PushPage;
