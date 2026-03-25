'use client'

import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";

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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "52px",
  borderRadius: "3px",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "18.75px", 
  color: "rgb(38, 38, 38)",
  boxShadow: "inset 0px 0px 0px 1px rgb(38, 38, 38)", 
  bg: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "0.2s",
  fontFamily: bmwFont,
  WebkitFontSmoothing: "antialiased" as const,
  _hover: {
    bg: "rgb(38, 38, 38)",
    color: "white",
    boxShadow: "none"
  }
};

// Ícones SVG
const IconZeroKm = () => (
  <svg width="64" height="64" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="44" height="24" rx="3" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="17" cy="44" r="5" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="43" cy="44" r="5" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <path d="M22 44h16" stroke="rgb(38, 38, 38)" strokeWidth="1.8"/>
    <path d="M8 30h44" stroke="rgb(38, 38, 38)" strokeWidth="1.8"/>
    <path d="M16 20l4-8h20l4 8" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
  </svg>
);

const IconSeminovo = () => (
  <svg width="64" height="64" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="22" width="40" height="22" rx="3" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="16" cy="44" r="5" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="40" cy="44" r="5" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <path d="M21 44h15" stroke="rgb(38, 38, 38)" strokeWidth="1.8"/>
    <path d="M8 32h40" stroke="rgb(38, 38, 38)" strokeWidth="1.8"/>
    <path d="M14 22l4-8h16l4 8" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="50" cy="18" r="4" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <path d="M44 30c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
  </svg>
);

const IconConfigure = () => (
  <svg width="64" height="64" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="22" width="40" height="22" rx="3" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="16" cy="44" r="5" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <circle cx="40" cy="44" r="5" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <path d="M21 44h15" stroke="rgb(38, 38, 38)" strokeWidth="1.8"/>
    <path d="M8 32h40" stroke="rgb(38, 38, 38)" strokeWidth="1.8"/>
    <path d="M14 22l4-8h16l4 8" stroke="rgb(38, 38, 38)" strokeWidth="1.8" fill="none"/>
    <path d="M50 12v8M46 16h8" stroke="rgb(38, 38, 38)" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const FindBMW = () => {
  return (
    <Box bg="white" py="80px" px={{ base: "20px", md: "80px" }}>
      {/* Título Principal */}
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

      {/* Grid de 3 colunas com gap entre elas */}
      <Flex
        justify="center"
        gap={{ base: "60px", md: "40px", lg: "80px" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
      >
        {/* Coluna 1 - 0KM */}
        <VStack gap="32px" align="center" flex="1" maxW="300px">
          <IconZeroKm />
          <Text {...titleColumnStyle}>Encontre um 0 KM.</Text>
          <Button {...bmwButtonStyle} width="200px">
            Pesquisar
          </Button>
        </VStack>

        {/* Coluna 2 - Seminovo */}
        <VStack gap="32px" align="center" flex="1" maxW="300px">
          <IconSeminovo />
          <Text {...titleColumnStyle}>Encontre um seminovo.</Text>
          <Button {...bmwButtonStyle} width="200px">
            Pesquisar
          </Button>
        </VStack>

        {/* Coluna 3 - Configure */}
        <VStack gap="32px" align="center" flex="1" maxW="320px">
          <IconConfigure />
          <Text {...titleColumnStyle}>Configure o seu.</Text>
          <Button {...bmwButtonStyle} width="240px">
            Configuração e Preço
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};