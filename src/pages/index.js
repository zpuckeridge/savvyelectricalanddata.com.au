import * as React from "react";

import {
  Button,
  Flex,
  Heading,
  Container,
  Center,
  Stack,
  Text,
} from "@chakra-ui/react";

import Navigation from "../components/navigation";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Action from "../components/action";
import Standout from "../components/standout";
import Seo from "../components/seo";
import Carousel from "../components/carousel";

export default function SplitScreen() {
  return (
    <>
      <Seo title="Home" />
      <Navigation />
      <Container maxW={"7xl"}>
        <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text as={"span"} position={"relative"}>
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
                  label={"Phone"}
                  href={"tel:0421197325"}
                >
                  Give us a call!
                </Button>
                <Button
                  rounded={"full"}
                  label={"Email"}
                  href={"mailto:savvyelectricalanddata@outlook.com.au"}
                >
                  Or send us an email!
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Center>
              <Carousel />
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
