import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";

export default function Action() {
  return (
    <Box>
      <Box
        maxW="7xl"
        w={{ md: "3xl", lg: "4xl" }}
        mx="auto"
        py={{ base: 12, lg: 16 }}
        px={{ base: 4, lg: 8 }}
        display={{ lg: "flex" }}
        alignItems={{ lg: "center" }}
        justifyContent={{ lg: "space-between" }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "gray.100")}
        >
          <chakra.span display="block">Have a question?</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("brand.600", "gray.500")}
          >
            Give us a call today!
          </chakra.span>
        </chakra.h2>
        <Heading>0421 197 325</Heading>
      </Box>
    </Box>
  );
}
