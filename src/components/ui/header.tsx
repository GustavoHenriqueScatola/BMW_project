'use client'

import { Flex, HStack, Link, Box, Text } from "@chakra-ui/react";
import { FiUser, FiShoppingCart, FiMapPin, FiChevronDown } from "react-icons/fi";
import NextImage from "next/image";
import { useState, useRef, useEffect } from "react";

type DropdownColumn = { title: string; links: string[] };
type NavItem = { label: string; hasDropdown: boolean; columns?: DropdownColumn[] };

const getNavLinkStyles = () => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  fontFamily: "'bmwTypeNextWeb', Arial, Helvetica, Roboto, sans-serif",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  _focus: { boxShadow: "none", outline: "none" },
  _focusVisible: { boxShadow: "none", outline: "none" },
  _active: { boxShadow: "none", outline: "none" },
});

const getExternalLink = (label: string) => {
  const links: Record<string, string> = {
    "Veículos elétricos": "https://www.bmw.com.br/pt/electric-cars.html",
    "Veículos elétricos usados BMW": "https://www.bmw.com.br/pt/electric-cars/used-electric-cars.html",
    "Vantagens dos veículos elétricos BMW": "https://www.bmw.com.br/pt/electric-cars/electric-cars-benefits.html",
    "Custos": "https://www.bmw.com.br/pt/electric-cars/electric-car-costs.html",
    "Plug-in Híbrido": "https://www.bmw.com.br/pt/electric-cars/plug-in-hybrid.html",
    "Tempos e Pontos de Recarga": "https://www.bmw.com.br/pt/electric-cars/tempo-de-carregamento-bmw-eletricos.html",
    "Carregamento doméstico": "https://www.bmw.com.br/pt/electric-cars/home-charging.html",
    "Carregamento público": "https://www.bmw.com.br/pt/electric-cars/public-charging.html",
    "Tecnologia da bateria e propulsão": "https://www.bmw.com.br/pt/electric-cars/battery-technology.html",
    "Autonomia": "https://www.bmw.com.br/pt/electric-cars/electric-car-range.html",
    // Novos links do Compre Online
    "Condições Especiais": "https://www.bmw.com.br/pt/topics/fascination-bmw/condicoes-especiais.html",
    "BMW Vendas Corporativas e Especiais": "https://www.bmw.com.br/pt/more-bmw/vendas-corporativas.html",
    "BMW Premium Selection (Seminovos)": "https://www.bmw.com.br/pt/topics/fascination-bmw/premium-selection/benefits.html",
    "BMW individual": "https://www.bmw.com.br/pt/more-bmw/bmw-individual.html",
    "BMW ConnectedDrive Store": "https://www.bmw.com.br/pt/shop/ls/cp/connected-drive",
  };
  return links[label] || "#";
};

const navItems: NavItem[] = [
  { label: "Modelos & Configure o seu", hasDropdown: false },
  {
    label: "Elétricos",
    hasDropdown: true,
    columns: [
      { title: "Veículos elétricos", links: ["Veículos elétricos", "Veículos elétricos usados BMW", "Vantagens dos veículos elétricos BMW", "Custos", "Plug-in Híbrido", "Tempos e Pontos de Recarga"] },
      { title: "Carregamento", links: ["Carregamento doméstico", "Carregamento público", "Tecnologia da bateria e propulsão", "Autonomia"] },
    ],
  },
  {
    label: "Compre Online",
    hasDropdown: true,
    columns: [
      { 
        title: "COMPRE ONLINE", 
        links: [
          "Condições Especiais", 
          "BMW Vendas Corporativas e Especiais", 
          "BMW Premium Selection (Seminovos)", 
          "BMW individual", 
          "BMW ConnectedDrive Store"
        ] 
      },
    ],
  },
  {
    label: "Descubra a BMW",
    hasDropdown: true,
    columns: [
      { title: "Sobre a BMW", links: ["História da BMW", "Inovação e tecnologia", "Sustentabilidade", "BMW Group"] },
      { title: "Experiências", links: ["BMW Driving Experience", "Eventos", "BMW M Experience"] },
    ],
  },
  {
    label: "Recall",
    hasDropdown: true,
    columns: [
      { title: "Recall", links: ["Verificar recall", "Agendar revisão", "Central de atendimento"] },
    ],
  },
  { label: "Agende o seu Test Drive", hasDropdown: false },
];

const DropdownPanel = ({ columns, isOpen }: { columns: DropdownColumn[], isOpen: boolean }) => {
  const bmwFont = `'bmwTypeNextWeb', Arial, Helvetica, Roboto, sans-serif`;
  return (
    <Box
      position="absolute"
      top="84px"
      left="0"
      width="100%"
      bg="white"
      zIndex="6040"
      overflow="hidden"
      maxH={isOpen ? "500px" : "0px"}
    >
      <Flex px={{ base: "20px", md: "80px", lg: "140px" }} py="48px" gap="80px">
        {columns.map((col) => (
          <Box key={col.title} minW="220px">
            <Text fontFamily={bmwFont} fontSize="25px" fontWeight="300" color="rgb(38, 38, 38)" mb="32px">{col.title}</Text>
            <Flex flexDirection="column" gap="12px">
              {col.links.map((link) => (
                <Link
                  key={link}
                  href={getExternalLink(link)}
                  target={getExternalLink(link).startsWith('http') ? '_blank' : '_self'}
                  fontFamily={bmwFont}
                  fontSize="16px"
                  fontWeight="300"
                  color="rgb(38, 38, 38)"
                  _focus={{ boxShadow: "none", outline: "none" }}
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

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box ref={headerRef} position="absolute" top="0" left="0" width="100%" zIndex="6050" bg={openMenu ? "white" : "transparent"} height="84px">
      <Flex as="nav" align="center" justify="space-between" mx="76.5px" px="12px" maxW="1752px" height="100%" position="relative">
        <HStack gap="8" height="100%">
          <Box position="relative" width="52px" height="52px" paddingRight="60px" cursor="pointer">
            <NextImage src={openMenu ? "/bmw_icon_gray.svg" : "/white_logo.svg"} alt="BMW Logo" fill />
          </Box>

          <HStack gap="6" display={{ base: "none", lg: "flex" }} height="100%">
            {navItems.map((item) => {
              const isActive = openMenu === item.label;
              const headerIsOpen = !!openMenu;

              return (
                <Link
                  key={item.label}
                  href="#"
                  height="100%"
                  position="relative"
                  {...getNavLinkStyles()}
                  color={isActive ? "rgb(28, 105, 212)" : headerIsOpen ? "rgb(102, 102, 102)" : "white"}
                  _hover={{ 
                    textDecoration: "none", 
                    color: headerIsOpen ? "rgb(28, 105, 212)" : "white", 
                    _after: { opacity: 1 } 
                  }}
                  onClick={(e) => { e.preventDefault(); setOpenMenu(isActive ? null : item.label); }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    height: "4px",
                    bg: "rgb(28, 105, 212)",
                    zIndex: 10,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <Flex align="center" height="100%">
                    {item.label}
                    {item.hasDropdown && (
                      <Box as="span" ml="1" transform={isActive ? "rotate(180deg)" : "rotate(0deg)"} transition="transform 0.2s">
                        <FiChevronDown size={28} />
                      </Box>
                    )}
                  </Flex>
                </Link>
              );
            })}
          </HStack>
        </HStack>

        <HStack gap="5" color={openMenu ? "rgb(102, 102, 102)" : "white"}>
          <Box as="button" _focus={{ outline: "none" }}><FiUser size="20" cursor="pointer" /></Box>
          <Box as="button" _focus={{ outline: "none" }}><FiShoppingCart size="20" cursor="pointer" /></Box>
          <Box as="button" _focus={{ outline: "none" }}><FiMapPin size="20" cursor="pointer" /></Box>
        </HStack>

        <Box 
          position="absolute"
          bottom="0"
          left="12px"
          right="12px"
          height="1px"
          bg={openMenu ? "rgba(38, 38, 38, 0.2)" : "rgba(255, 255, 255, 0.4)"}
          zIndex={1}
        />
      </Flex>

      {navItems.find(i => i.label === openMenu)?.columns && (
        <DropdownPanel columns={navItems.find(i => i.label === openMenu)!.columns!} isOpen={!!openMenu} />
      )}
    </Box>
  );
};