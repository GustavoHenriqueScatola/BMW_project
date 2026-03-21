// components/ui/header.tsx
'use client'

import { Flex, HStack, Link, Box } from "@chakra-ui/react";
import { FiUser, FiShoppingCart, FiMapPin, FiChevronDown } from "react-icons/fi";
import NextImage from "next/image";

const navLinkStyles = {
  fontSize: "13px",
  fontWeight: "400",
  pb: "2",
  transition: "all 0.2s",
  _hover: { 
    textDecoration: "none", 
    borderBottom: "2px solid white" 
  },
}

export const Header = () => {
  return (

    <Box 
      position="absolute" 
      top="0" 
      left="0" 
      width="100%" 
      zIndex="100" 
      bg="transparent"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={{ base: "20px", md: "80px" }}
        py="20px"
        color="white"
      >
        <HStack gap="8">
          <Box position='relative' width='50px' height='50px'>
            <NextImage src="/white_logo.svg" alt="BMW Logo" fill />
          </Box>
          
          <HStack gap="6" display={{ base: "none", lg: "flex" }}>
            <Link href="#" {...navLinkStyles}>
              Modelos & Configure o seu
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Elétricos <FiChevronDown size={13} />
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Compre Online <FiChevronDown size={13} />
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Descubra a BMW <FiChevronDown size={13} />
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Recall <FiChevronDown size={13} />
            </Link>
            <Link href="#" {...navLinkStyles}>
              Agende o seu Test Drive
            </Link>
          </HStack>
        </HStack>

        <HStack gap="5">
          <FiUser size="20" cursor="pointer" />
          <FiShoppingCart size="20" cursor="pointer" />
          <FiMapPin size="20" cursor="pointer" />
        </HStack>
      </Flex>

      <Box height="1px" bg="whiteAlpha.200" mx={{ base: "20px", md: "80px" }} />
    </Box>
  );
};