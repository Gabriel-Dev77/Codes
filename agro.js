import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Truck, Award, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";
import plantadeira from "@/assets/plantadeira.jpg";
import pulverizador from "@/assets/pulverizador.jpg";
import distribuidor from "@/assets/distribuidor.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-agro-earth/90 via-agro-earth/70 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full font-heading font-semibold text-sm mb-6 animate-fade-in">
              Concessionária Autorizada STARA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6 animate-slide-up">
              Máquinas que fazem o{" "}
              <span className="text-primary">agronegócio</span>{" "}
              crescer
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Plantadeiras, pulverizadores e implementos agrícolas de alta performance. 
              Tecnologia STARA para aumentar sua produtividade no campo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/maquinas">
                  Ver Máquinas <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contato">
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Por que escolher a{" "}
              <span className="text-gradient-orange">Agrobras</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Há mais de 15 anos levando qualidade e inovação ao produtor rural do Mato Grosso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Autorizada STARA",
                description: "Representante oficial com garantia de fábrica e peças originais.",
              },
              {
                icon: Wrench,
                title: "Assistência Técnica",
                description: "Equipe especializada para manutenção preventiva e corretiva.",
              },
              {
                icon: Truck,
                title: "Entrega Rápida",
                description: "Logística ágil para atender sua fazenda em todo o MT.",
              },
              {
                icon: Users,
                title: "Atendimento Próximo",
                description: "Relacionamento duradouro com foco nas suas necessidades.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover-lift group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Nossos{" "}
                <span className="text-gradient-green">Produtos</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Linha completa de máquinas e implementos agrícolas STARA para todas as etapas da sua produção.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link to="/maquinas">
                Ver Catálogo Completo <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: plantadeira,
                title: "Plantadeiras",
                description: "Precisão no plantio para máxima produtividade. Modelos de 6 a 45 linhas.",
                link: "/maquinas#plantadeiras",
              },
              {
                image: pulverizador,
                title: "Pulverizadores",
                description: "Tecnologia de ponta para aplicação uniforme e economia de insumos.",
                link: "/maquinas#pulverizadores",
              },
              {
                image: distribuidor,
                title: "Distribuidores",
                description: "Distribuidores de fertilizantes e calcário com alta precisão.",
                link: "/maquinas#distribuidores",
              },
            ].map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group relative rounded-2xl overflow-hidden shadow-card hover-lift"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-agro-earth via-agro-earth/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-heading font-semibold group-hover:gap-3 transition-all">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground mb-6">
              Pronto para aumentar sua produtividade?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Entre em contato com nossa equipe e descubra a máquina ideal para sua propriedade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/5566999999999" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contato">
                  Agendar Visita
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nossas{" "}
              <span className="text-gradient-orange">Unidades</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Estamos presentes em pontos estratégicos do Mato Grosso para melhor atendê-lo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                city: "Confresa",
                type: "Matriz",
                address: "Av. Brasil, 1500 - Centro",
                phone: "(66) 3411-1234",
              },
              {
                city: "Espigão do Leste",
                type: "Filial",
                address: "Rod. MT-322, Km 15",
                phone: "(66) 3422-5678",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-card border-l-4 border-primary"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-heading font-semibold text-sm mb-4">
                  {location.type}
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                  {location.city} - MT
                </h3>
                <p className="text-muted-foreground mb-2">{location.address}</p>
                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  className="text-primary font-heading font-semibold hover:underline"
                >
                  {location.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
