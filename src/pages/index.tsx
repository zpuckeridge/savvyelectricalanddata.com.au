import * as React from "react";

import {
  Button,
  Flex,
  Heading,
  Container,
  chakra,
  VisuallyHidden,
  useColorModeValue,
  Center,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaPhone, FaEnvelope } from "react-icons/fa";

import Navigation from "../components/navigation";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Action from "../components/action";
import Standout from "../components/standout";
import Seo from "../components/seo";
import Carousel from "../components/carousel";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      cursor={"pointer"}
      as={"a"}
      padding="10px"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

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
                <SocialButton label={"Phone"} href={"tel:0421197325"}>
                  <FaPhone /> <Text marginLeft="10px">Give us a call!</Text>
                </SocialButton>
                <SocialButton
                  label={"Email"}
                  href={"mailto:savvyelectricalanddata@outlook.com.au"}
                >
                  <FaEnvelope />{" "}
                  <Text marginLeft="10px">Or send us an email!</Text>
                </SocialButton>
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
