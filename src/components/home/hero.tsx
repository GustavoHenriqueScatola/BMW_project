// components/home/hero.tsx
'use client'

import { Box, Flex, Heading, Text, Button, Image, Stack, HStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box position="relative" h="100vh" w="100%" overflow="hidden" bg="black">
      {/* Background Image - Seu arquivo original */}
      <Image
        src="/bmw-m135_azul.jpg"
        alt="BMW M135 xDrive"
        objectFit="cover"
        w="100%"
        h="100%"
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="60%" 
        h="100%"
        bgGradient="to-r"
        gradientFrom="rgba(0,0,0,0.95)"
        gradientTo="transparent"
      />

      <Flex
        position="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        align="center"
        px={{ base: "40px", md: "100px", lg: "140px" }}
      >
        <Stack gap="0" color="white" maxW="800px">
          <Text 
            fontSize="xs" 
            letterSpacing="0.5em" 
            fontWeight="300"
            textTransform="uppercase"
          >
            Novo Série
          </Text>
          
          {/* Número 1 Gigante */}
          <Heading
            as="h1"
            fontSize={{ base: "150px", md: "280px" }} 
            lineHeight="0.9"
            fontWeight="200" 
            letterSpacing="-0.07em"
            ml="-15px" 
          >
            1
          </Heading>

          {/* Área do Nome do Modelo e LOGO M */}
          <HStack gap="6" mt="6" mb="12" align="center">
            
          
            <Image 
              src="bmw_m.png"
              alt="BMW M Logo"
              h="24px" 
              w="auto"
              objectFit="contain"
            />
            
            <Text 
              fontSize="2xl" 
              fontWeight="300" 
              letterSpacing="1px"
              mt="1" 
            >
              BMW M135 xDrive
            </Text>
          </HStack>

          {/* Botão Descubra */}
          <Button
            bg="#1c69d4"
            color="white"
            borderRadius="3"
            height="50px"
            px="50px"
            fontSize="sm"
            fontWeight="600"
            _hover={{ bg: "#1652a5" }}
         
          >
            Descubra
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};