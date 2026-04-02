'use client'

import { Box, Flex, Text, Button, VStack, Image } from "@chakra-ui/react";

const bmwFont = `'bmwTypeNextWeb', Arial, Helvetica, Roboto, sans-serif`;

const titleColumnStyle = {
  fontFamily: bmwFont,
  fontSize: "25px",
  fontWeight: "300",
  lineHeight: "38px",
  color: "rgb(38, 38, 38)",
  textAlign: "center" as const,
  textRendering: "optimizeSpeed" as const,
  WebkitFontSmoothing: "antialiased" as const,
};

const bmwButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "52px",
  px: "22px", 
  borderRadius: "3px",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "18.75px", 
  color: "rgb(38, 38, 38)",
  bg: "transparent",
  border: "1px solid rgb(38, 38, 38)",
  cursor: "pointer",
  transition: "all 0.15s ease",
  fontFamily: bmwFont,
  WebkitFontSmoothing: "antialiased" as const,

  _hover: {
    border: "2px solid rgb(38, 38, 38)",
    bg: "transparent",
    color: "rgb(38, 38, 38)"
  }
};
const iconStyle = {
  boxSize: "80px",
  objectFit: "contain"
};

export const FindBMW = () => {
  return (
    <Box bg="white" py="80px" px={{ base: "20px", md: "80px" }}>
      
      <Text
        textAlign="center"
        fontSize={{ base: "28px", md: "45px" }}
        fontWeight="300"
        color="rgb(38, 38, 38)"
        lineHeight={{ base: "36px", md: "62px" }}
        mb="60px"
        fontFamily={bmwFont}
      >
        Encontre o seu BMW.
      </Text>

      <Flex
        justify="center"
        gap={{ base: "60px", md: "40px", lg: "280px" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
      >

        <VStack gap="32px" align="center" flex="1" maxW="300px">
          <Image src="/images/duplicateBmw.png" alt="" {...iconStyle} />
          <Text {...titleColumnStyle}>Encontre um 0 KM.</Text>
          <Button {...bmwButtonStyle} >
            Pesquisar
          </Button>
        </VStack>

        <VStack gap="32px" align="center" flex="1" maxW="300px">
          <Image src="/images/searchBmw.png" alt="" {...iconStyle} />
          <Text {...titleColumnStyle}>Encontre um seminovo.</Text>
          <Button {...bmwButtonStyle} >
            Pesquisar
          </Button>
        </VStack>

        <VStack gap="32px" align="center" flex="1" maxW="320px">
          <Image src="/images/moreBmw.png" alt="" {...iconStyle} />
          <Text {...titleColumnStyle}>Configure o seu.</Text>
          <Button {...bmwButtonStyle}>
            Configuração e Preço
          </Button>
        </VStack>

      </Flex>
    </Box>
  );
};