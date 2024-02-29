import React, { useEffect, useState } from "react";
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
  Tag,
} from "@chakra-ui/react";

import TopHeader from "../common/TopHeader";
import { ALL_APPLICATION } from "../mocks/applications";
import SkeletonList from "./SkeletonList";

const arrayOfItem = ALL_APPLICATION;

const ListAllApplication = () => {
  const [applicationList, setApplicationList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setApplicationList(arrayOfItem);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Box minW={"80%"} bg={"#f9fafc"}>
      <TopHeader />
      <Container mt={50} minW={"80%"}>
        <Text fontSize="2xl" as="b">
          Application Catalog
        </Text>
        <Box mt={20} minWidth={"90%"} bg={"#f9fafc"}>
          {isLoading && <SkeletonList />}
          <List spacing={3}>
            {!isLoading &&
              applicationList?.map((item) => (
                <ListItem key={item.id}>
                  <Card>
                    <CardBody>
                      <Stack>
                        <Text fontSize="2xl" align={"left"}>
                          {item.appName}
                        </Text>
                        <Text
                          fontSize="md"
                          noOfLines={[3, 2, 2]}
                          align={"left"}
                        >
                          {" "}
                          Features: {item.description}
                        </Text>
                        <Text fontSize="md" align={"left"}>
                          EIM: {item.eim}
                        </Text>
                        <Text fontSize="sm" align={"left"}>
                          Confluence{" "}
                          <Link
                            color="teal.500"
                            href={item.confluence}
                            isExternal
                          >
                            {item.confluence}
                          </Link>
                        </Text>
                        <Text fontSize="sm" align={"left"} isExternal>
                          JIRA{" "}
                          <Link color="teal.500" href={item.jira}>
                            {item.jira}
                          </Link>
                        </Text>
                        <Text fontSize="sm" align={"left"} isExternal>
                          Git{" "}
                          <Link color="teal.500" href={item.jira}>
                            {item.jira}
                          </Link>
                        </Text>
                        {item.isDuplicate && (
                          <Tag size="sm" width={"80px"} colorScheme="red">
                            Duplicate
                          </Tag>
                        )}
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
