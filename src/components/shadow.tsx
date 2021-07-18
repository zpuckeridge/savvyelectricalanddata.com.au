import * as React from "react";

import { Box, Image } from "@chakra-ui/react";

export const ImageDynamicShadow = ({ src }: { src: string }) => {
  return (
    <Box position="relative">
      <Image
        src={src}
        w={80}
        h={80}
        rounded="lg"
        objectFit="cover"
        position="absolute"
        inset={0}
        filter="auto"
        blur="16px"
        zIndex={0}
        transform="scale(1.1, 1.1)"
      />
      <Image
        zIndex={100}
        position="relative"
        src={src}
        w={80}
        h={80}
        rounded="lg"
        objectFit="cover"
      />
    </Box>
  );
};
