// components/ui/header.tsx
'use client'

import { Flex, HStack, Link, Box } from "@chakra-ui/react";
import { FiUser, FiShoppingCart, FiMapPin, FiChevronDown } from "react-icons/fi";
import NextImage from "next/image";

const navLinkStyles = {
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "white",
  cursor: "pointer",
  transition: "all 0.2s",
  _hover: {
    textDecoration: "none",
    borderBottom: "2px solid white",
  },
}

export const Header = () => {
  return (

    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      zIndex="6050"
      bg="transparent"
      height="84px"
      transition="background 0.05s ease-in-out"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        mx="76.5px"
        px="12px"
        maxW="1752px"
        height="100%"
        color="white"
      >
        <HStack gap="8">
          <Box
            position="relative"
            width="52px"
            height="52px"
            paddingRight="60px"
            cursor="pointer"
            transition="transform 0.25s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <NextImage src="/white_logo.svg" alt="BMW Logo" fill />
          </Box>
          
          <HStack gap="6" display={{ base: "none", lg: "flex" }}>
            <Link href="#" {...navLinkStyles}>
              Modelos & Configure o seu
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Elétricos <FiChevronDown size={28} />
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Compre Online <FiChevronDown size={28} />
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Descubra a BMW <FiChevronDown size={28} />
            </Link>
            <Link href="#" display="flex" alignItems="center" gap="1" {...navLinkStyles}>
              Recall <FiChevronDown size={28} />
            </Link>
            <Link href="#" {...navLinkStyles}>
              Agende o seu Test Drive
            </Link>
          </HStack>
        </HStack>

        <HStack gap="5" color="white">
          <FiUser size="20" cursor="pointer" />
          <FiShoppingCart size="20" cursor="pointer" />
          <FiMapPin size="20" cursor="pointer" />
        </HStack>
      </Flex>

      <Box height="1px" bg="whiteAlpha.900" mx={{ base: "20px", md: "80px" }} />
    </Box>
  );
};