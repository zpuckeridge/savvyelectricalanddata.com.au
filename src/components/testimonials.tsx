import * as React from "react";

import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Narelle Brown",
    content:
      "Had Jared here today to install some fans and a few other jobs as well. He was quick and efficient and would recommend Jared to everyone. You need a sparky give jared a call. No job is to big or small.",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Ray Crooks",
    content:
      "Savvy electrical and data were very prompt and professional. I had a power outage at the farm and they were there within Half an hour. Our incoming cables were shorting out and they were very quick to fix it! I would highly recommend them!",
    avatar: "../images/ray_crooks.png",
  },
  {
    name: "Amanda Walters",
    content:
      "Very happy with the service, price and reliability Jared offers. Happy to recommend and will use his services again!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Karlene Cleeland",
    content:
      "I had Jared come give me a quote and then install a full security system in my home, he has done a fantastic job and I had a few little teething issues but he quickly had them sorted for me, I recommend @savvy electrical & data. Thank you so much for your hard work Jared!",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

interface TestimonialCardProps {
  name: string;
  content: string;
  avatar: string;
}

function TestmonialCard(props: TestimonialCardProps) {
  const { name, content, avatar } = props;
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={"bold"} fontSize={14}>
          {name}
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />{" "}
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      marginBottom="4rem"
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.p
          mt={2}
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="8"
          fontWeight="extrabold"
          letterSpacing="tight"
          color={useColorModeValue("gray.900")}
        >
          You are in good company!
        </chakra.p>
        <chakra.p
          mt={4}
          maxW="2xl"
          fontSize="xl"
          mx={{ lg: "auto" }}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Check out what our clients have had to say about us!
        </chakra.p>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestmonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
