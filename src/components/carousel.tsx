import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";

const Carousel = () => {
  const slides = [
    {
      img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/158269127_320644746111040_2307131207664731197_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Qkhtglp8E0sAX_Xr_6C&_nc_ht=scontent-syd2-1.xx&oh=124b3ec35d00044260692c822ea8c32b&oe=61282529&h=650&w=940",
    },
    {
      img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/165122437_328094045366110_1001637784725708830_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=D8o9dL4KpJ0AX8Kwc3r&_nc_ht=scontent-syd2-1.xx&oh=2bde48ed6777c65f21c83d32a4b0de42&oe=6126A3C3&h=650&w=940",
    },
    {
      img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/161301916_326557832186398_1844365929702161978_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_3WmE3DzgHgAX-IAPuW&_nc_ht=scontent-syd2-1.xx&oh=03c71ee1e7c62a02821270f413429b89&oe=6126C466&h=650&w=940",
    },
    {
      img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/164408260_328094025366112_834331539424043950_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=aOhORN6u0wwAX_xqxYk&_nc_ht=scontent-syd2-1.xx&oh=889c9d1fdef1fd7b778b41ce8b765068&oe=61255DAF&h=650&w=940",
    },
    {
      img: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/100050432_182061299969386_1005326645696921600_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=3UsnBqfyEp4AX-IO4t5&_nc_ht=scontent-syd2-1.xx&oh=2f784bb4220d350b170c4c06c2c47b0a&oe=6127468A",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    <Flex
      w="full"
      overflow="hidden"
      style={{ borderRadius: `25px` }}
      boxShadow="2xl"
    >
      <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
        {slides.map((slide, sid) => (
          <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
              whiteSpace="nowrap"
            >
              {sid + 1} / {slidesCount}
            </Text>
            <Image src={slide.img} boxSize="full" backgroundSize="cover" />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Carousel;
