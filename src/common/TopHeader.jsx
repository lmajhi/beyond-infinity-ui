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
} from "@chakra-ui/react";
import React from "react";
import "./top-header.css";
const TopHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      height={70}
      bg={"black"}
      alignItems={"center"}
      justifyContent={"center"}
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
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
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
