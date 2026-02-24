import React from "react";
import styled from "styled-components";
import { Heart, Instagram, MessageCircle, Gift } from "lucide-react";
import { motion } from "framer-motion";

// ============================
// Styled Components
// ============================

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fff0f5, #ffffff);
  color: #5C4A4A;
  font-family: 'Inter', sans-serif;
`;

// Navbar Moderna com efeito de vidro
const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e91e63;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    text-decoration: none;
    color: #5C4A4A;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      color: #e91e63;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Esconde em telas pequenas para simplificar por enquanto */
  }
`;

// Seção Principal (Hero)
const Hero = styled.div`
  text-align: center;
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #e91e63;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 30px;
`;

// Galeria de Produtos
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

// Usando o motion.div no Card para animar
const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 15px;
  height: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05); /* Efeito de zoom na foto ao passar o mouse */
  }
`;

const ProductName = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.2rem;
`;

const ProductDesc = styled.p`
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 20px;
  flex-grow: 1; /* Faz o botão descer caso o texto seja curto */
`;

const Button = styled.a`
  text-decoration: none;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #25D366; /* Cor do WhatsApp */
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }
`;

// Rodapé
const Footer = styled.footer`
  background: #fff;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #ffe4ec;
  color: #777;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #e91e63;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

// ============================
// Data
// ============================

const products = [
  {
    name: "Caixas Personalizadas",
    desc: "Perfeitas para convites de padrinhos e lembranças de casamento.",
    img: "/images/produto1.jpg",
  },
  {
    name: "Velas Artesanais",
    desc: "Velas delicadas e elegantes com aromas inesquecíveis.",
    img: "/images/produto2.jpg",
  },
  {
    name: "Kits de Maternidade",
    desc: "Lembrancinhas criadas com carinho para a chegada do bebê.",
    img: "/images/produto3.jpg",
  },
];

// ============================
// Animações Configuradas (Framer Motion)
// ============================

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Faz os cards aparecerem um após o outro
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// ============================
// Component
// ============================

export default function App() {
  const numeroWhatsApp = "5562981270660"; // O número que vi na imagem anterior

  return (
    <PageWrapper>
      
      {/* Navbar Moderna */}
      <Navbar>
        <Logo>
          <Gift size={24} /> Mimos & Memórias
        </Logo>
        <NavLinks>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </NavLinks>
      </Navbar>

      {/* Seção Hero com animação */}
      <Hero id="inicio">
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lembranças que contam histórias
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Eternize seus momentos especiais com presentes 100% personalizados, feitos à mão com muito amor e atenção aos detalhes.
        </Subtitle>
      </Hero>

      {/* Grid de Produtos com animação de "cascata" (stagger) */}
      <Container id="produtos">
        <SectionTitle>Nossos Mimos</SectionTitle>
        <Grid
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => {
            // Cria uma mensagem automática para o WhatsApp já com o nome do produto
            const mensagem = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${product.name}`);
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

            return (
              <Card key={index} variants={itemVariants}>
                <ImageContainer>
                  <Image src={product.img} alt={product.name} />
                </ImageContainer>

                <ProductName>{product.name}</ProductName>
                <ProductDesc>{product.desc}</ProductDesc>

                <Button href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  Pedir Orçamento
                </Button>
              </Card>
            );
          })}
        </Grid>
      </Container>

      {/* Rodapé */}
      <Footer id="contato">
        <h3>Mimos & Memórias</h3>
        <p>Aparecida de Goiânia - Enviamos para todo o Brasil</p>
        <SocialLink href="https://instagram.com/memorias.mimos" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} /> @memorias.mimos
        </SocialLink>
      </Footer>

    </PageWrapper>
  );
}