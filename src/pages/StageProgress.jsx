import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Divider,
} from "@chakra-ui/react";
import { getColor } from "../utils/colors";
import { ALL_APPLICATION } from "../mocks/applications";
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
// const stageTemp = [
//   {
//     id: "requirement",
//     label: "Requirement",
//     percentage: 20,
//     eim: "FDA",
//     appName: "Food delivery app",
//     url: "something",
//   },
//   {
//     id: "design",
//     label: "Design",
//     percentage: 30,
//   },
//   {
//     id: "code_build",
//     label: "Code Build",
//     percentage: 60,
//   },
// {
//   id: "infra_build",
//   label: "Infra Build",
//   percentage: 80,
// },
// {
//   id: "code_test",
//   label: "Code Test",
//   percentage: 70,
// },
// ];

const getAppName = (eim) => {
  console.log("getApp -->", eim);
  const app = ALL_APPLICATION.find((item) => item.eim === eim) || {};

  return app.appName || "";
};
const StageProgress = ({ stages } = sampleResponse) => {
  console.log("stageProgress-->", stages);
  const AnimatedCicularProgress = ({ percentage }) => {
    return (
      <CircularProgress
        size="70px"
        value={percentage}
        color={getColor(percentage)}
      >
        <CircularProgressLabel>{percentage}%</CircularProgressLabel>
      </CircularProgress>
    );
  };
  return (
    <>
      <Text fontSize="xxl">Prospective Matches</Text>
      <Stack direction={"row"} spacing={180} mt={5}>
        <Stack direction={"column"}>
          {stages.conf_match && (
            <AnimatedCicularProgress
              percentage={stages?.conf_match["Matching score"] || 2}
            />
          )}
          <Text fontSize="md" as="b">
            Confluence
          </Text>
          {stages.conf_match && (
            <>
              <Text fontSize="sm">EIM : {stages?.conf_match["ID"] || ""}</Text>
              <Text fontSize="sm">{getAppName(stages?.conf_match["ID"])}</Text>
            </>
          )}
          {/* {/* <Text fontSize="sm">{`stage.appName`}</Text> */}
          {/* <Text fontSize="sm">{getAppName(stages?.conf_match["ID"])}</Text> */}
        </Stack>
        <Divider orientation="vertical" />
        <Stack direction={"column"}>
          {stages.jira_match && (
            <AnimatedCicularProgress
              percentage={stages?.jira_match["Matching score"] || 4}
            />
          )}
          <Text fontSize="md" as="b">
            JIRA
          </Text>
          {stages.jira_match && (
            <>
              <Text fontSize="sm">EIM : {stages?.jira_match["ID"] || ""}</Text>
              <Text fontSize="sm">{getAppName(stages?.jira_match["ID"])}</Text>
            </>
          )}
          {/* <Text fontSize="sm">{`stage.appName`}</Text>
          <Text fontSize="sm">{`stage.url`}</Text> */}
        </Stack>
        <Divider orientation="vertical" />
        <Stack direction={"column"}>
          {stages.git_match && (
            <AnimatedCicularProgress
              percentage={stages?.git_match["Matching score"] || 6}
            />
          )}
          <Text fontSize="md" as="b">
            GitHub
          </Text>
          {stages.git_match && (
            <>
              <Text fontSize="sm">EIM : {stages?.git_match["ID"] || ""}</Text>
              <Text fontSize="sm">{getAppName(stages?.git_match["ID"])}</Text>
            </>
          )}
          {/* <Text fontSize="sm">{`stage.appName`}</Text>
          <Text fontSize="sm">{`stage.url`}</Text> */}
        </Stack>
      </Stack>
    </>
  );
};

export default StageProgress;
