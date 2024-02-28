import { Box, Spinner, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100%"}
      height={"100vh"}
      //   backgroundColor={"red"}
    >
      <Spinner
        thickness="10px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        label="404 ! Page Not Found !"
        height={400}
        width={400}
      />

      <Text fontSize="6xl">404. Page not Found !</Text>
    </Box>
  );
}
