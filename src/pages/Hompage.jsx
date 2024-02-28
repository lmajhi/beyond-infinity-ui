import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Stack,
  Button,
  Text,
  Card,
  Divider,
  SkeletonText,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import TopHeader from "../common/TopHeader";
import ResultList from "./ResultList";
import "./homepage.css";
//background-color: #af000d; onHOVER
const arrayOfItem = [1, 2, 3];
const SkeletonList = () => {
  return (
    <List spacing={3} mt={10}>
      {arrayOfItem.map((item) => (
        <ListItem>
          {/* <Card> */}
          <Stack
            isInline={true}
            alignItems={"center"}
            justifyContent={"space-between"}
            h={150}
            // bg={"green"}
          >
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
            <Skeleton
              startColor="pink.500"
              endColor="orange.500"
              height="20px"
            />
            {/* <Text>Hello 2</Text> */}
            <Divider orientation="vertical" />
            {/* <Text>Hello</Text> */}
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Stack>
          {/* </Card> */}
        </ListItem>
      ))}
    </List>
  );
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
  return (
    <Box minW={"80%"} bg={"#f9fafc"}>
      <TopHeader />

      <Container mt={50} minW={"80%"}>
        <Stack direction={"row"} align="center">
          <FormControl>
            <FormLabel>Search</FormLabel>
            <Input />
            <FormHelperText>Search from existing application</FormHelperText>
          </FormControl>
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
        {!true && <ResultList />}
        {true && <SkeletonList />}
        {!true && <NoResultList />}
      </Container>
    </Box>
  );
};

export default HomePage;
