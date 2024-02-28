import React from "react";
import {
  Box,
  CardBody,
  List,
  ListItem,
  Card,
  Stack,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";

import TopHeader from "../common/TopHeader";
const arrayOfItem = [1, 2, 3, 4];
const ListAllApplication = () => {
  return (
    <Box minW={"80%"} bg={"#f9fafc"}>
      <TopHeader />
      <Container mt={50} minW={"80%"}>
        <Text fontSize="2xl" as="b">
          Application Catalog
        </Text>
        <Box mt={20} minWidth={"90%"} bg={"#f9fafc"}>
          <List spacing={3}>
            {arrayOfItem.map((item) => (
              <ListItem>
                <Card>
                  <CardBody>
                    <Stack>
                      <Text fontSize="2xl" align={"left"}>
                        {`appName`}
                      </Text>
                      <Text fontSize="md" noOfLines={[3, 2, 2]} align={"left"}>
                        {" "}
                        Features:{" "}
                        {`hfksjdhlfhakjsdhjkfhaksjdhjfkhaskdhfkhajksdhfkhaskdhflhaskdhfkjhsdhfshdkhfjhsdhfjkshdkhfjksdhkjfhkjshdkjhfkjs`}
                      </Text>
                      <Text fontSize="md" align={"left"}>
                        EIM: {`eim`}
                      </Text>
                      <Text fontSize="sm" align={"left"}>
                        Confluence{" "}
                        <Link color="teal.500" href={`confluence`} isExternal>
                          {`confluence`}
                        </Link>
                      </Text>
                      <Text fontSize="sm" align={"left"} isExternal>
                        JIRA{" "}
                        <Link color="teal.500" href={`jira`}>
                          {`jira`}
                        </Link>
                      </Text>
                      <Text fontSize="sm" align={"left"} isExternal>
                        Git{" "}
                        <Link color="teal.500" href={`git`}>
                          {`git`}
                        </Link>
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default ListAllApplication;
