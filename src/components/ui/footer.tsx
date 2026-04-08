'use client';

import { Box, Flex, Text, Link, VStack, Image } from '@chakra-ui/react';

const bmwFont = `'bmwTypeNextWeb', Arial, Helvetica, Roboto, sans-serif`;

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <Link
    href={href}
    display="block"
    fontFamily={bmwFont}
    fontSize="16px"
    fontWeight="300"
    lineHeight="26px"
    height="26px"
    color="rgb(38, 38, 38)"
    cursor="pointer"
    mb="6px"
    textAlign="start"
    textDecoration="none"
    style={{ WebkitFontSmoothing: 'antialiased' }}
    _hover={{ textDecoration: 'underline' }}
  >
    {label}
  </Link>
);

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: FooterLinkProps[];
}) => (
  <VStack align="flex-start" gap="0" minW="260px">
    <Text
      fontFamily={bmwFont}
      fontSize="25px"
      fontWeight="300"
      lineHeight="38px"
      color="rgb(38, 38, 38)"
      mb="32px"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {title}
    </Text>

    <VStack align="flex-start" gap="0">
      {links.map((link) => (
        <FooterLink key={link.label} href={link.href} label={link.label} />
      ))}
    </VStack>
  </VStack>
);

interface SocialIconProps {
  href: string;
  icon: string;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    width="44px"
    height="44px"
    position="relative"
    cursor="pointer"
    transition="all 0.2s"
  >
    <Image
      src={icon}
      alt={label}
      width="32px"
      height="32px"
      objectFit="contain"
    />
  </Link>
);

export const Footer = () => {
  const assistanceLinks: FooterLinkProps[] = [
    { href: '#', label: 'BMW Service' },
    { href: '#', label: 'Programa de Rotulagem Veicular' },
    { href: '#', label: 'Comunicados de Campanha de Recall' },
    { href: '#', label: 'Ferramentas de Busca de Recall' },
    { href: '#', label: 'My BMW App' },
    { href: '#', label: 'BMW Serviços Financeiros' },
    { href: '#', label: 'BMW ConnectedDrive' },
    { href: '#', label: 'Guia do motorista BMW' },
    { href: '#', label: 'Atualizações Remotas de Software' },
  ];

  const communicationLinks: FooterLinkProps[] = [
    { href: '#', label: 'Fale com a BMW' },
    { href: '#', label: 'BMW Roadside Assistance' },
    { href: '#', label: 'Solicite uma proposta' },
    {
      href: '#',
      label: 'Encontre uma Concessionária Autorizada BMW',
    },
  ];

  const modelsLinks: FooterLinkProps[] = [
    { href: '#', label: 'X' },
    { href: '#', label: '5' },
    { href: '#', label: '4' },
    { href: '#', label: '3' },
    { href: '#', label: '2' },
    { href: '#', label: 'M' },
    { href: '#', label: 'BMW Concept Cars' },
    { href: '#', label: 'BMW Premium Selection (Seminovos)' },
  ];

  const buyLinks: FooterLinkProps[] = [
    { href: '#', label: 'Configure o seu' },
    { href: '#', label: 'Modelos e preços' },
    { href: '#', label: 'BMW Premium Selection (Seminovos)' },
    { href: '#', label: 'BMW ConnectedDrive Store' },
    { href: '#', label: 'BMW Acessórios Originais' },
    { href: '#', label: 'Consórcio BMW' },
    { href: '#', label: 'Financiamentos BMW' },
    { href: '#', label: 'BMW Driver Training' },
    { href: '#', label: 'Condições Especiais' },
    { href: '#', label: 'BMW Lifestyle' },
    { href: '#', label: 'BMW Teleservices' },
    { href: '#', label: 'Agende o seu Test Drive' },
  ];

  const electricLinks: FooterLinkProps[] = [
    { href: '#', label: 'BMW veículos elétricos' },
    { href: '#', label: 'BMW plug-in híbridos' },
    { href: '#', label: 'Carregamento doméstico' },
    { href: '#', label: 'Carregamento público' },
  ];

  const groupLinks: FooterLinkProps[] = [
    { href: '#', label: 'Relatório de transparência salarial' },
    { href: '#', label: 'Carreiras' },
    { href: '#', label: 'Visite a fábrica BMW ↗' },
  ];

  const socialLinks: SocialIconProps[] = [
    { href: 'https://facebook.com', icon: '/Images/face.png', label: 'Facebook' },
    { href: 'https://instagram.com', icon: '/Images/insta.png', label: 'Instagram' },
    { href: 'https://youtube.com', icon: '/Images/yt.png', label: 'YouTube' },
    { href: 'https://linkedin.com', icon: '/Images/in.png', label: 'LinkedIn' },
    { href: 'https://x.com', icon: '/Images/x.png', label: 'X' },
    { href: 'https://tiktok.com', icon: '/Images/tiktok.png', label: 'TikTok' },
    { href: 'https://whatsapp.com', icon: '/Images/wpp.png', label: 'WhatsApp' },
  ];

  return (
    <Box as="footer" bg="rgb(242, 242, 242)" fontFamily={bmwFont} mt="-75px">
      {/* ─── Faixa superior ─── */}
      <Flex
        align="center"
        justify="space-between"
        px={{ base: '20px', md: '48px', lg: '96px' }}
        py="16px"
        bg="white"
        gap="4"
      >
        <Image
          src="/Images/Logo_IBAMA_2025_Escuro.webp"
          alt="IBAMA Proconve Homologado"
          w="268px"
          h="80px"
          display="inline"
          verticalAlign="middle"
          style={{ lineHeight: 0 }}
        />

        <Image
          src="/Images/legal_text_image_site.webp"
          alt="Aviso legal"
          w="414px"
          h="123px"
          display="inline"
          verticalAlign="middle"
          style={{ lineHeight: 0 }}
        />
      </Flex>

      {/* ─── My BMW App ─── */}
      <Flex
        align="center"
        gap="3"
        px={{ base: '20px', md: '48px', lg: '96px' }}
        py="35px"
        borderBottom="1px solid rgba(0,0,0,0.1)"
        bg="rgb(242, 242, 242)"
      >
        <Image
          src="/myBMW.svg"
          alt="My BMW App"
          w="120px"
          h="34px"
          objectFit="contain"
          mr="45px"
        />

        <Text
          fontFamily={bmwFont}
          fontSize="16px"
          fontWeight="300"
          lineHeight="26px"
          color="rgb(38, 38, 38)"
          textAlign="center"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          My BMW App. Conecte-se ao aplicativo e simplifique sua direção diária.
          {'  '}
          <Link
          
            ml="30px"
            fontFamily={bmwFont}
            fontSize="16px"
            fontWeight="700"
            color="rgb(38, 38, 38)"
            textDecoration="none"
            style={{ WebkitFontSmoothing: 'antialiased' }}
            _hover={{ color: '#1c69d4', textDecoration: 'none' }}
          >
            Descubra o My BMW App &gt;
          </Link>
        </Text>
      </Flex>

      {/* ─── Conteúdo principal ─── */}
      <Box px={{ base: '20px', md: '48px', lg: '96px' }} py="48px">
        <Flex
          gap={{ base: '40px', md: '80px', lg: '120px' }}
          direction={{ base: 'column', md: 'row' }}
          justify="flex-start"
          align="flex-start"
          mb="48px"
        >
          <VStack align="flex-start" gap="80px" flex="1" minW="260px">
            <FooterSection
              title="Assistência e Serviços"
              links={assistanceLinks}
            />
            <FooterSection
              title="BMW Group no Brasil"
              links={groupLinks}
            />
          </VStack>

          <VStack align="flex-start" gap="80px" flex="1" minW="260px">
            <FooterSection
              title="Fale com a BMW"
              links={communicationLinks}
            />
            <FooterSection title="Compre seu BMW" links={buyLinks} />
          </VStack>

          <VStack align="flex-start" gap="80px" flex="1" minW="260px">
            <FooterSection
              title="Modelos e preços"
              links={modelsLinks}
            />
            <FooterSection
              title="BMW Elétricos"
              links={electricLinks}
            />
          </VStack>
        </Flex>

        <Flex justify="flex-end">
          <Flex gap="2px" align="center">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Flex>
        </Flex>
      </Box>

      {/* ─── Copyright ─── */}
      <Box
        borderTop="1px solid rgba(0,0,0,0.1)"
        px={{ base: '20px', md: '48px', lg: '96 px' }}
        py="20px"
      >
        <Flex
          justify="flex-start"
          align="center"
          flexWrap="wrap"
          rowGap="12px"
          columnGap="24px"
        >
          <Text
            fontFamily={bmwFont}
            fontSize="16px"
            fontWeight="300"
            lineHeight="26px"
            color="rgb(38, 38, 38)"
            style={{ WebkitFontSmoothing: 'antialiased' }}
          >
            Copyright © BMW AG 2026
          </Text>

          {[
            'Política de Cookies',
            'Política de Privacidade',
            'Disponibilidade de Produtos',
            'Recall',
            'Manual de Segurança',
            'Informações Legais',
          ].map((item) => (
            <Link
              key={item}
              href="#"
              fontFamily={bmwFont}
              fontSize="16px"
              fontWeight="300"
              lineHeight="26px"
              color="rgb(38, 38, 38)"
              textDecoration="none"
              style={{ WebkitFontSmoothing: 'antialiased' }}
              _hover={{ textDecoration: 'underline' }}
            >
              {item}
            </Link>
          ))}
        </Flex>
      </Box>
      {/* ─── Linha branca ─── */}
     <Box
      w="100%"
      h="32px"
      bg="white"
      display="block"
      fontFamily={bmwFont}
      fontSize="16px"
      fontWeight="300"
      lineHeight="26px"
      textAlign="start"
      style={{
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeSpeed',
        textSizeAdjust: '100%',
        boxSizing: 'border-box',
      }}
    />
    </Box>
  );
};