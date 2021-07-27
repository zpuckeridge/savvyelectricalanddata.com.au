import * as React from "react";

import {
  Button,
  Flex,
  Heading,
  Container,
  Center,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import Navigation from "../components/navigation";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Action from "../components/action";
import Standout from "../components/standout";

import { StaticImage } from "gatsby-plugin-image";

export default function SplitScreen() {
  return (
    <>
      <Navigation />
      <Container maxW={"7xl"}>
        <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "#007cb0",
                    zIndex: -1,
                  }}
                >
                  Savvy Electrical
                </Text>
                <br />{" "}
                <Text color={"#007cb0"} as={"span"}>
                  and Data
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                We strive for complete customer satisfaction! We are here to
                help you out with renovations, new builds, small domestic jobs,
                split system airconditioners, security cameras, home automation
                and much more!
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"full"}
                  bg={"#007cb0"}
                  color={"white"}
                  _hover={{
                    bg: "blue.400",
                  }}
                >
                  Call us!
                </Button>
                <Button rounded={"full"}>Send an Email!</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Center>
              <StaticImage
                src="../../src/images/kitchen_electric.png"
                alt="Kitchen Electrical/Construction Job"
                placeholder="blurred"
                layout="fixed"
                height="400"
                quality={100}
                style={{ borderRadius: `10px` }}
              />
            </Center>
          </Flex>
        </Stack>
        <Standout />
        <Testimonials />
        <Action />
        <Footer />
      </Container>
    </>
  );
}
