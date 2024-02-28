import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import { getColor } from "../utils/colors";
const StageProgress = () => {
  const stages = [
    {
      id: "requirement",
      label: "Requirement",
      percentage: 20,
    },
    {
      id: "design",
      label: "Design",
      percentage: 30,
    },
    {
      id: "code_build",
      label: "Code Build",
      percentage: 60,
    },
    {
      id: "infra_build",
      label: "Infra Build",
      percentage: 80,
    },
    {
      id: "code_test",
      label: "Code Test",
      percentage: 70,
    },
  ];
  const AnimatedCicularProgress = ({ percentage }) => {
    return (
      <CircularProgress
        size="70px"
        value={percentage}
        color={getColor(percentage)}
      >
        <CircularProgressLabel>{percentage}</CircularProgressLabel>
      </CircularProgress>
    );
  };
  return (
    <Stack direction={"row"} spacing={8} flexWrap={"wrap"} flexShrink={"2"}>
      {stages.map((stage) => {
        return (
          <Stack direction={"column"}>
            <AnimatedCicularProgress percentage={stage.percentage} />
            <Text fontSize="sm">{stage.label}</Text>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default StageProgress;
