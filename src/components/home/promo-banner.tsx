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
      h={{ base: "400px", md: "570.609px" }} 
      overflow="hidden"
      bg="black"
    >

      <NextImage
        src={image}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        priority
      />

      {/* Gradiente BMW Signature */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-r, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 30%, transparent 70%)"
        zIndex="1"
      />

      {/* Conteúdo Centralizado Verticalmente */}
      <Flex
        position="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        align="center"
        px={{ base: "30px", md: "100px", lg: "150px" }} 
        zIndex="2"
      >
        <Box color="white" maxW="550px">
          <Text
            as="h2"
            fontSize={{ base: "26px", md: "38px" }}
            fontWeight="300"
            lineHeight="1.1"
            mb="6"
            {...bmwTechnicalStyles}
          >
            {title}
          </Text>

          {(description || subdescription) && (
            <Box mb="10">
              {description && (
                <Text
                  fontSize="16px"
                  fontWeight="300"
                  lineHeight="26px"
                  {...bmwTechnicalStyles}
                >
                  {description}
                </Text>
              )}
              {subdescription && (
                <Text
                  fontSize="16px"
                  fontWeight="300"
                  lineHeight="26px"
                  color="rgba(255,255,255,0.7)"
                  {...bmwTechnicalStyles}
                >
                  {subdescription}
                </Text>
              )}
            </Box>
          )}

          <Button
            variant="outline"
            borderColor="white"
            color="white"
            borderRadius="0"
            height="48px"
            px="12"
            fontSize="15px"
            fontWeight="400"
            fontFamily={bmwFont}
            _hover={{ bg: "white", color: "black" }}
            transition="all 0.3s ease"
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
    <Flex flexDirection="column" gap="24px" bg="white">
      {/* Banner 1 - 320i */}
      <Banner
        image="/bmw_320i.jpg"
        alt="BMW 320i M Sport"
        title="BMW 320i M Sport."
        description="Taxa 0% + IPVA 2026 pago."
        subdescription="Entrada de 60% + Saldo em 24 meses.*"
        buttonText="Saiba mais"
      />
      
      {/* Banner 2 - M235 */}
      <Banner
        image="/m235.jpg"
        alt="BMW M235 xDrive"
        title="BMW M235 xDrive"
        description="Taxa 0% a.m. com saldo em 24 meses + Supervalorização do seu seminovo."
        subdescription="Consulte condições."
        buttonText="Descubra"
      />

      {/* Banner 3 - iX3 */}
      <Banner
        image="/ix3.jpg"
        alt="BMW iX3"
        title="BMW iX3"
        description="Acompanhe a chegada da Nova Era no Brasil."
        buttonText="Saiba mais"
      />
    </Flex>
  );
};