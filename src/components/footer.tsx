import * as React from "react";

import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";
import { ReactNode } from "react";
import { StaticImage } from "gatsby-plugin-image";

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
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
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

export default function SmallWithLogoLeft() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <StaticImage
          quality={100}
          src="../../src/images/logo.webp"
          alt="Zacchary Puckeridge"
          placeholder="blurred"
          width={175}
        />
        <Text>© 2021 Savvy Electrical and Data | All Rights Reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/savvyelectricalanddata/"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"Email"}
            href={"mailto:savvyelectricalanddata@outlook.com.au"}
          >
            <FaEnvelope />
          </SocialButton>
          <SocialButton label={"Phone"} href={"tel:0421197325"}>
            <FaPhone />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
