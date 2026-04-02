'use client'

import { Flex, HStack, Link, Box, Text } from "@chakra-ui/react";
import { FiUser, FiShoppingCart, FiMapPin, FiChevronDown } from "react-icons/fi";
import NextImage from "next/image";
import { useState, useRef, useEffect } from "react";

// ── Estilos originais preservados ──────────────────────────────────────────────

const getNavLinkStyles = (isOpen: boolean) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  color: isOpen ? "rgb(99, 99, 99)" : "white",
  cursor: "pointer",
  _hover: {
    textDecoration: "none",
    borderBottom: `2px solid ${isOpen ? "rgb(38, 38, 38)" : "white"}`,
  },
})

// ── Dados do dropdown ──────────────────────────────────────────────────────────

type DropdownColumn = {
  title: string;
  links: string[];
};

type NavItem = {
  label: string;
  hasDropdown: boolean;
  columns?: DropdownColumn[];
};

const navItems: NavItem[] = [
  { label: "Modelos & Configure o seu", hasDropdown: false },
  {
    label: "Elétricos",
    hasDropdown: true,
    columns: [
      {
        title: "Veículos elétricos",
        links: [
          "Veículos elétricos",
          "Veículos elétricos usados BMW",
          "Vantagens dos veículos elétricos BMW",
          "Custos",
          "Plug-in Híbrido",
          "Tempos e Pontos de Recarga",
        ],
      },
      {
        title: "Carregamento",
        links: [
          "Carregamento doméstico",
          "Carregamento público",
          "Tecnologia da bateria e propulsão",
          "Autonomia",
        ],
      },
    ],
  },
  {
    label: "Compre Online",
    hasDropdown: true,
    columns: [
      {
        title: "Financiamento",
        links: ["BMW Financial Services", "Simulador de financiamento", "Leasing"],
      },
      {
        title: "Serviços",
        links: ["Seguro BMW", "Garantia estendida", "Assistência 24h"],
      },
    ],
  },
  {
    label: "Descubra a BMW",
    hasDropdown: true,
    columns: [
      {
        title: "Sobre a BMW",
        links: ["História da BMW", "Inovação e tecnologia", "Sustentabilidade", "BMW Group"],
      },
      {
        title: "Experiências",
        links: ["BMW Driving Experience", "Eventos", "BMW M Experience"],
      },
    ],
  },
  {
    label: "Recall",
    hasDropdown: true,
    columns: [
      {
        title: "Recall",
        links: ["Verificar recall", "Agendar revisão", "Central de atendimento"],
      },
    ],
  },
  { label: "Agende o seu Test Drive", hasDropdown: false },
];

// ── Painel dropdown ────────────────────────────────────────────────────────────

interface DropdownPanelProps {
  columns: DropdownColumn[];
  isOpen: boolean;
}

const bmwFont = `'bmwTypeNextWeb', Arial, Helvetica, Roboto, sans-serif`;

const dropdownTitleStyles = {
  fontFamily: bmwFont,
  fontSize: "25px",
  fontWeight: "300",
  lineHeight: "38px",
  color: "rgb(38, 38, 38)",
  mb: "32px",
  mt: "0px",
  textRendering: "optimizeSpeed" as const,
  style: {
    WebkitFontSmoothing: "antialiased",
    wordBreak: "normal" as const,
    hyphens: "manual" as const,
  },
};

const dropdownLinkStyles = {
  fontFamily: bmwFont,
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "26px",
  color: "rgb(38, 38, 38)",
  cursor: "pointer",
  textRendering: "optimizeSpeed" as const,
  style: {
    WebkitFontSmoothing: "antialiased",
    wordBreak: "normal" as const,
    hyphens: "manual" as const,
  },
};

const DropdownPanel = ({ columns, isOpen }: DropdownPanelProps) => {
  return (
    <Box
      position="absolute"
      top="84px"
      left="0"
      width="100%"
      bg="white"
      zIndex="6040"
      overflow="hidden"
      maxH={isOpen ? "400px" : "0px"}
      opacity={isOpen ? 1 : 0}
      transition="max-height 0.3s ease, opacity 0.2s ease"
      boxShadow={isOpen ? "0 8px 24px rgba(0,0,0,0.12)" : "none"}
    >
      <Flex px={{ base: "20px", md: "80px", lg: "140px" }} py="48px" gap="80px">
        {columns.map((col) => (
          <Box key={col.title} minW="220px">
            <Text {...dropdownTitleStyles}>
              {col.title}
            </Text>
            <Flex flexDirection="column" gap="12px">
              {col.links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  {...dropdownLinkStyles}
                  _hover={{ textDecoration: "none", color: "rgb(28, 105, 212)" }}
                >
                  {link}
                </Link>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

// ── Header ─────────────────────────────────────────────────────────────────────

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeItem = navItems.find((item) => item.label === openMenu);

  return (
    <Box
      ref={headerRef}
      position="absolute"
      top="0"
      left="0"
      width="100%"
      zIndex="6050"
      bg={openMenu ? "white" : "transparent"}
      height="84px"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        mx="76.5px"
        px="12px"
        maxW="1752px"
        height="100%"
        color={openMenu ? "rgb(38, 38, 38)" : "white"}
      >
        <HStack gap="8">
          <Box
            position="relative"
            width="52px"
            height="52px"
            paddingRight="60px"
            cursor="pointer"
          >
            <NextImage src={openMenu ? "/bmw_icon_gray.svg" : "/white_logo.svg"} alt="BMW Logo" fill />
          </Box>

          <HStack gap="6" display={{ base: "none", lg: "flex" }}>
            {navItems.map((item) => {
              const isActive = openMenu === item.label;

              if (!item.hasDropdown) {
                return (
                  <Link key={item.label} href="#" {...getNavLinkStyles(!!openMenu)}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  href="#"
                  display="flex"
                  alignItems="center"
                  gap="1"
                  {...getNavLinkStyles(!!openMenu)}
                  color={isActive ? "rgb(28, 105, 212)" : undefined}
                  borderBottom={isActive ? "4px solid rgb(28, 105, 212)" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu(isActive ? null : item.label);
                  }}
                >
                  {item.label}
                  <Box
                    as="span"
                    display="inline-flex"
                    transform={isActive ? "rotate(180deg)" : "rotate(0deg)"}
                  >
                    <FiChevronDown size={28} />
                  </Box>
                </Link>
              );
            })}
          </HStack>
        </HStack>

        <HStack gap="5" color={openMenu ? "rgb(38, 38, 38)" : "white"}>
          <FiUser size="20" cursor="pointer" />
          <FiShoppingCart size="20" cursor="pointer" />
          <FiMapPin size="20" cursor="pointer" />
        </HStack>
      </Flex>

      <Box height="1px" bg={openMenu ? "gray.200" : "whiteAlpha.900"} mx={{ base: "20px", md: "80px" }} />

      {activeItem?.columns && (
        <DropdownPanel columns={activeItem.columns} isOpen={!!openMenu} />
      )}
    </Box>
  );
};