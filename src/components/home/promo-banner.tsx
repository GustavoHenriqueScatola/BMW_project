'use client'

import { Box, Flex, Text, Button } from "@chakra-ui/react";
import NextImage from "next/image";

interface BannerProps {
  image: string;
  alt: string;
  title: string;
  description?: string;
  subdescription?: string;
  buttonText: string;
}

const bmwFont = `'bmwTypeNextWeb', Arial, Helvetica, Roboto, sans-serif`;

const bmwTechnicalStyles = {
  fontFamily: bmwFont,
  textRendering: "optimizeSpeed" as const,
  WebkitFontSmoothing: "antialiased" as const,
  wordBreak: "normal" as const,
  hyphens: "manual" as const,
};

const Banner = ({ image, alt, title, description, subdescription, buttonText }: BannerProps) => {
  return (
    <Box
      position="relative"
      w="100vw"
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
      h={{ base: "450px", md: "639.75px" }}
      overflow="hidden"
      bg="black"
    >
      <NextImage
        src={image}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center center" }}
        sizes="100vw"
        priority
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
        background="radial-gradient(circle at 0% 0%, rgba(0,0,0,0.9) 0%, transparent 50%), linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%)"
        pointerEvents="none"
      />

      <Flex
        position="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        align="center"
        justify="flex-start"
        px={{ base: "20px", md: "48px", lg: "96px" }}
        zIndex="2"
      >
        <Box color="white" maxW="696px" textAlign="left">
          <Text
            as="h2"
            fontSize={{ base: "32px", md: "45px" }}
            fontWeight="300"
            lineHeight={{ base: "1.1", md: "62px" }}
            mb="4"
            {...bmwTechnicalStyles}
          >
            {title}
          </Text>

          {(description || subdescription) && (
            <Box mb="10">
              {description && (
                <Text
                  fontSize="19px"
                  fontWeight="300"
                  lineHeight="30px"
                  color="rgb(255, 255, 255)"
                  {...bmwTechnicalStyles}
                >
                  {description}
                </Text>
              )}
              {subdescription && (
                <Text
                  fontSize="19px"
                  fontWeight="300"
                  lineHeight="30px"
                  color="rgba(255,255,255,0.8)"
                  {...bmwTechnicalStyles}
                >
                  {subdescription}
                </Text>
              )}
            </Box>
          )}

          <Button
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            bg="transparent"
            color="white"
            boxShadow="inset 0px 0px 0px 2px rgb(255, 255, 255)"
            border="none"
            borderRadius="3px"
            height="52px"
            minHeight="52px"
            width={{ base: "100%", md: "408px" }}
            px="4"
            fontSize="16px"
            fontWeight="500"
            lineHeight="26px"
            cursor="pointer"
            _hover={{ border: "2px solid rgb(38, 38, 38)",
                  bg: "transparent",
                  color: "rgb(38, 38, 38)"}}
            {...bmwTechnicalStyles}
          >
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export const PromoBanners = () => {
  return (
    <Flex flexDirection="column" gap="48px" bg="white" pb="48px">
      <Banner
        image="/images/bmw_320i.jpg"
        alt="BMW 320i M Sport"
        title="BMW 320i M Sport."
        description="Taxa 0% + IPVA 2026 pago."
        subdescription="Entrada de 60% + Saldo em 24 meses.*"
        buttonText="Saiba mais"
      />
      <Banner
        image="/images/X5_bmw.jpg"
        alt="BMW X5 xDrive50e M Sport"
        title="BMW X5 xDrive50e M Sport."
        description="Taxa de 0% a.m. e saldo em 12 meses com 60% de entrada + Plano de manutenção incluso e valorização do seu seminovo.*"
        subdescription="Consulte condições."
        buttonText="Saiba mais"
      />
      <Banner
        image="/images/ix3.jpg"
        alt="BMW iX3"
        title="BMW iX3"
        description="Acompanhe a chegada da Nova Era no Brasil."
        buttonText="Saiba mais"
      />
    </Flex>
  );
};