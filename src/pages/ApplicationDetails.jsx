import React from "react";
import { Box, Stack, Text, Link, Tag } from "@chakra-ui/react";

const ApplicationDetails = ({
  appName = "appName",
  appDescription = "app Description",
  eim = "1234",
  confluence = "http://localjhpssadasdfsafasasdasdasdas",

  jira = "http://jira.comasdasdasdasasdsadasdasdasdasdasasdasdasdasdasdasd",
  isDuplicate = false,
}) => {
  return (
    <Box maxWidth={"50%"} flexWrap={"wrap"} flexGrow={1}>
      <Stack>
        <Text fontSize="2xl" align={"left"}>
          (2xl) {appName}
        </Text>
        <Text
          fontSize="md"
          noOfLines={[3, 2, 2]}
          align={"left"}
        >{`hfksjdhlfhakjsdhjkfhaksjdhjfkhaskdhfkhajksdhfkhaskdhflhaskdhfkjhsdhfshdkhfjhsdhfjkshdkhfjksdhkjfhkjshdkjhfkjs`}</Text>
        <Text fontSize="md" align={"left"}>
          EIM: {eim}
        </Text>
        <Text fontSize="sm" align={"left"}>
          Confluence{" "}
          <Link color="teal.500" href={confluence} isExternal>
            {confluence}
          </Link>
          {/* <a href={confluence}>{confluence}</a> */}
        </Text>
        <Text fontSize="sm" align={"left"} isExternal>
          JIRA{" "}
          <Link color="teal.500" href={jira}>
            {jira}
          </Link>
        </Text>
        {isDuplicate && <Tag>Duplicate</Tag>}
      </Stack>
    </Box>
  );
};

export default ApplicationDetails;
