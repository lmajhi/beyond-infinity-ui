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
const axiosConfig = {
  headers: {
    Authorization:
      "Basic YmV5b25kaW5maW5pdHkxOTkwQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjBsTjEwY1ptbnJtZ3NSVHJxNFI4TjNtcGpBblJUOFNOREQ1MURoX0d3U2c2dEtrd00zMGFmSmJkN0FLTnpoOWxaYTJXMEFfbWVYVmlDalFGRHVMTHJ5V3JuZlZtdjM4SjNqcUhBcS11aEw2LWsxUTBNQVV3Qy1YUktPVjFQTEFpZEw0bGpQQXZCYmU5Z3VjQ3hpakM2aFFzcTB0Q3pfTllSNXZZaTFBdXBxa3M9RjZBQjEzMUE=",
  },
};
/**
 *
 * @returns
 * show a dropdown with options as Confluence, Jira
 *  if Conflunce show text input to enter " title"
 * if Jira show text input to enter "project name", "project id"
 * if Github, show gitURL and project1
 */

const BASE_URL = "";

const PushPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [jiraString, setJiraString] = useState("");
  const [confluenceString, setConfluenceString] = useState("");
  const [githubObject, setGithubObject] = useState({
    url: "",
    projectId: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isApiSuccess, setIsApiSuccess] = useState(false);
  const [isApiFailure, setIsApiFailure] = useState(false);

  const isSubmitButtonDisable =
    jiraString.length > 0 ||
    confluenceString.length > 0 ||
    (githubObject.projectId && githubObject.url);
  const resetAlerts = () => {
    setIsApiSuccess(false);
    setIsApiFailure(false);
  };
  const makeApiCall = async () => {
    console.log("make API call");
    setIsLoading(true);
    if (selectedOption === "jira") {
      try {
        const response = await restClient.post(
          "/api/v1/jira/epic/" + jiraString,
          {},
          axiosConfig
        );
        setIsLoading(false);
        setIsApiSuccess(true);
      } catch (error) {
        console.log("error", error);
        setIsApiFailure(true);
        setIsLoading(false);
      }
    } else if (selectedOption === "confluence") {
      try {
        console.log("confluenceString");
        const response = await restClient.post(
          "/api/v1/confluence/title/" + confluenceString,
          {},
          axiosConfig
        );
        setIsLoading(false);
        setIsApiSuccess(true);
      } catch (error) {
        console.log("error", error);
        setIsApiFailure(true);

        setIsLoading(false);
      }
    } else if (selectedOption === "github") {
      try {
        const response = await restClient.post(
          `/api/v1/git/${githubObject.projectId}`,

          githubObject.url,
          axiosConfig
        );
        setIsLoading(false);
        setIsApiSuccess(true);
      } catch (error) {
        console.log(error);
        setIsApiFailure(true);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);

      return;
    }

    setTimeout(() => {
      resetAlerts();
    }, 3000);
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
            <option value="github">GitHub</option>
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
          {selectedOption === "github" && (
            <>
              <Input
                type="text"
                placeholder="Enter github URL"
                value={githubObject.url}
                onChange={(e) =>
                  setGithubObject({ ...githubObject, url: e.target.value })
                }
              />
              <Input
                type="text"
                placeholder="Enter github ID"
                value={githubObject.projectId}
                onChange={(e) =>
                  setGithubObject({
                    ...githubObject,
                    projectId: e.target.value,
                  })
                }
              />
            </>
          )}
        </Stack>
        <Button
          backgroundColor={"#db0011"}
          isDisabled={!isSubmitButtonDisable}
          isLoading={isLoading}
          color={"white"}
          _hover={{
            bg: "#af000d",
          }}
          mt={5}
          onClick={() => makeApiCall()}
        >
          Submit
        </Button>
        {isApiSuccess && (
          <Alert status="success" mt={10}>
            <AlertIcon />
            Data Uploaded to the server.
          </Alert>
        )}
        {isApiFailure && (
          <Alert status="error" mt={10}>
            <AlertIcon />
            There was an error processing your request.
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default PushPage;
