import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Link,
  Stack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import "./top-header.css";
import { getSalutation } from "../utils/time";
const TopHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      height={70}
      bg={"black"}
      alignItems={"center"}
      // justifyContent={"center"}
      justifyContent={"space-between"}
      display={"flex"}
      flexDirection={"row"}
      padding={10}
    >
      <Text
        className="gradient-text"
        color={"white"}
        fontSize="4xl"
        as="b"
        onClick={onOpen}
      >
        HSBC - Dupli
      </Text>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={"white"}>Hello, {getSalutation()}</Text>
        <Divider orientation="vertical" color={"white"} margin={5} />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Routes</DrawerHeader>
          <DrawerBody>
            <Stack direction={"column"}>
              <Link href="/">Search for Duplicates</Link>
              <Link href="/all">See All Applications</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default TopHeader;
