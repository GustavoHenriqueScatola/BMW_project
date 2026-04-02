'use client'

import { Box, Flex, Heading, Text, Button, Image, Stack, HStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box position="relative" h="840px" w="100%" overflow="hidden" bg="black">
      <Image
        src="/Images/bmw-m135_azul.jpg"
        alt="BMW M135 xDrive"
        objectFit="cover"
        w="100%"
        h="100%"
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="10"
        background="radial-gradient(circle at 0% 0%, rgba(0,0,0,0.9) 0%, transparent 50%), 
                    linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, transparent 100%),
                    linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%)"
        pointerEvents="none"
      />

      <Flex
        marginTop="70px"
        position="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        align="center"
        px="96px"
        zIndex="20"
      >
        <Stack gap="0" color="white" maxW="800px">
          <Text 
            fontSize="16px" 
            letterSpacing="9.6px" 
            fontWeight="300"
            textTransform="uppercase"
            mb="8px"
          >
            Novo Série
          </Text>
          
          <Heading
            as="h1"
            paddingLeft="17px"
            fontSize="252px"
            lineHeight="224px"
            height="224px"
            fontWeight="300" 
            letterSpacing="-19.6px"
            ml="-15px"
            display="block"
            fontFamily="'bmwTypeNextWeb', Arial, Helvetica, sans-serif"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            1
          </Heading>

          <HStack gap="3" mt="4" mb="10" align="center">
            <Image 
              src="/Images/bmw_m.png"
              alt="BMW M Logo"
              h="25px" 
              w="auto"
              objectFit="contain"
            />
            <Text
              fontSize="25px"
              fontWeight="300"
              lineHeight="38px"
              letterSpacing="normal"
              display="inline"
              verticalAlign="bottom"
            >
              BMW M135 xDRIVE 
            </Text>
          </HStack>

          <Button
            bg="#1c69d4"
            color="white"
            borderRadius="3px"
            height="52px"
            minHeight="52px"
            width="264px"
            fontSize="16px"
            fontWeight="500"
            lineHeight="26px"
            pt="4px"
            pb="4px"
            pl="4px"
            pr="4px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            border="none"
            boxShadow="none"
            _hover={{ bg: "#1652a5" }}
          >
            Descubra
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};