import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Heart,
  Leaf,
  LockKeyhole,
  Moon,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  Sun,
  Timer,
  X,
} from "lucide-react";
import mother from "@/assets/mother-baby.png.asset.json";
import { PurchaseButton } from "@/components/purchase-button";
import { offer, formatBRL } from "@/lib/offer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo Cicatriz Invisível + Sono de Mãe | R$ 29,90" },
      {
        name: "description",
        content:
          "Um cuidado mais simples para o seu pós-cesárea: alimentação, movimento e sono em um protocolo por R$ 29,90, com garantia de 20 dias.",
      },
      { property: "og:title", content: "Protocolo Cicatriz Invisível + Sono de Mãe" },
      {
        property: "og:description",
        content:
          "Seu cuidado também importa. Conheça o protocolo de alimentação, movimento e descanso por R$ 29,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pains = [
  "Olhando a cicatriz no espelho e se sentindo mal",
  "Vendo o preço absurdo das pomadas “milagrosas”",
  "Pochete que não diminui mesmo emagrecendo",
  "Exausta porque o bebê não dorme e você também não",
  "Achando que precisa enfrentar tudo isso sozinha",
];
const modules = [
  {
    icon: Leaf,
    number: "01",
    title: "Cuidado de dentro para fora",
    description:
      "Uma receita simples para apoiar uma alimentação equilibrada e uma rotina de autocuidado. Sem depender de produtos caros.",
    tag: "ALIMENTAÇÃO",
  },
  {
    icon: Sprout,
    number: "02",
    title: "Movimento no seu ritmo",
    description:
      "Exercícios rápidos para fazer em casa, respeitando o seu pós-cesárea e a liberação do profissional que acompanha você.",
    tag: "RECUPERAÇÃO",
  },
  {
    icon: Moon,
    number: "03",
    title: "Sono de bebê. Descanso de mãe.",
    description:
      "Técnicas de rotina e sono seguro para acolher o bebê e abrir espaço para você finalmente descansar.",
    tag: "DESCANSO",
  },
];
const results = [
  "Apoiar os cuidados com a aparência da cicatriz",
  "Entender melhor o inchaço e a recuperação",
  "Mais confiança para se olhar no espelho",
  "Retomar o movimento com orientação",
  "Buscar noites um pouco mais tranquilas",
  "Participar do seu cuidado, sem se cobrar perfeição",
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? "text-primary-foreground" : ""}`}>
      <span className="brand-symbol">
        <Heart strokeWidth={1.5} />
      </span>
      <span>
        Cicatriz Invisível<span className="brand-subtitle">+ SONO DE MÃE</span>
      </span>
    </div>
  );
}

function Index() {
  return (
    <main>
      <div className="scarcity">
        <span className="scarcity-dot" />
        Oferta por tempo limitado <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline"> Um novo começo por R$ 29,90</span>
        <ArrowUpRight className="size-3.5" />
      </div>
      <section className="hero">
        <div className="page-width relative z-10">
          <header className="hero-header">
            <Brand />
            <span className="header-note">
              <Heart className="size-3.5" /> Seu cuidado também importa.
            </span>
          </header>
          <div className="hero-content">
            <div className="eyebrow">
              <span className="small-line" /> PARA O SEU RECOMEÇO PÓS-CESÁREA
            </div>
            <h1>
              Pare de gastar
              <br className="hidden md:block" /> fortunas em <span>pomada cara</span> para cicatriz
              de cesárea.
            </h1>
            <div
              className="mockup-scene"
              aria-label="Ilustração da área de membros do Protocolo Cicatriz Invisível"
            >
              <div className="mockup-label label-top">
                <ShieldCheck />
                <span>
                  Um cuidado completo<strong>Sem complicar sua rotina</strong>
                </span>
              </div>
              <div className="phone">
                <div className="phone-island" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <span>9:41</span>
                    <span>● ▰</span>
                  </div>
                  <div className="phone-brand">
                    <Heart className="size-4" /> CICATRIZ INVISÍVEL
                  </div>
                  <p className="phone-welcome">Um dia de cada vez.</p>
                  <h3>
                    Seu cuidado
                    <br />
                    começa aqui.
                  </h3>
                  <div className="phone-cover">
                    <img src={mother.url} alt="" loading="lazy" />
                    <span>
                      PROGRAMA COMPLETO
                      <br />
                      <strong>Cicatriz Invisível</strong>
                      <small>+ Sono de Mãe</small>
                    </span>
                  </div>
                  <div className="phone-heading">
                    Seu protocolo <span>3 módulos</span>
                  </div>
                  {modules.map(({ icon: Icon, number, title }) => (
                    <div className="phone-module" key={number}>
                      <span className="phone-module-icon">
                        <Icon />
                      </span>
                      <div>
                        <small>MÓDULO {number}</small>
                        <strong>{title}</strong>
                      </div>
                      <Play className="size-3" />
                    </div>
                  ))}
                  <div className="phone-bottom">
                    <Heart />
                    <span>Meu protocolo</span>
                    <Sun />
                    <span>Meu cuidado</span>
                  </div>
                </div>
              </div>
              <div className="mockup-label label-bottom">
                <Check />
                <span>
                  Alimentação + movimento<strong>+ noites mais tranquilas</strong>
                </span>
              </div>
            </div>
            <p className="hero-description">
              Uma receita simples + exercícios no seu ritmo + técnicas de sono. Um caminho de
              cuidado para você e seu bebê, por apenas <strong>R$ 29,90.</strong>
            </p>
            <PurchaseButton>Quero o Protocolo por R$ 29,90</PurchaseButton>
            <div className="trust-line">
              <ShieldCheck /> Acesso imediato <span>•</span> Garantia de 20 dias
            </div>
            <p className="hero-footnote">Menos gastos. Mais cuidado com você.</p>
          </div>
        </div>
      </section>

      <section className="vsl-section section-space" aria-labelledby="vsl-title">
        <div className="page-width vsl-width">
          <h2 id="vsl-title">Assista antes de decidir</h2>
          <div
            className="vsl-placeholder"
            role="region"
            aria-label="Espaço reservado para a mini VSL"
          >
            <span className="vsl-play" aria-hidden="true">
              <Play />
            </span>
            <strong>Mini VSL</strong>
            <span>Vídeo de apresentação em breve</span>
          </div>
        </div>
      </section>
      <section className="audience-section section-space">
        <div className="page-width audience-width">
          <h2>Esse protocolo é para você se…</h2>
          <div className="pain-list">
            <span className="list-overline">SE VOCÊ SE RECONHECE AQUI…</span>
            {pains.map((pain) => (
              <div key={pain}>
                <span className="pain-icon">
                  <X />
                </span>
                <p>{pain}</p>
              </div>
            ))}
            <p className="pain-closing">
              Você não falhou.
              <br />
              <strong>Seu cuidado merece um caminho mais simples.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="pain-section section-space">
        <div className="page-width pain-grid">
          <div>
            <div className="eyebrow">VAMOS FALAR SOBRE ISSO?</div>
            <h2>
              A pochete
              <br />
              <span className="text-primary">vai ficar?</span>
            </h2>
            <p className="lead">
              Você não precisa aceitar o desconforto.
              <br />
              Mas também não precisa de mais uma promessa milagrosa.
            </p>
            <div className="pain-body">
              <p>
                A maioria das mulheres acha que é “só tempo” ou “só emagrecer”.{" "}
                <strong>Mas a barriga depois da cesárea não é só gordura.</strong>
              </p>
              <p>
                Inchaço, mudanças na pele e recuperação dos tecidos podem influenciar a aparência da
                região. E cada corpo tem seu próprio ritmo.
              </p>
              <p>
                Pomada cara, sozinha, não resolve todas essas mudanças. Não é à toa que você olha no
                espelho e pensa:
              </p>
              <blockquote>“Por que essa pochete não some?”</blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section section-space">
        <div className="page-width">
          <div className="section-heading">
            <div className="eyebrow">MENOS COMPLICAÇÃO. MAIS CUIDADO.</div>
            <h2>
              O que realmente
              <br className="sm:hidden" /> faz diferença:
            </h2>
            <p>
              O que você coloca no corpo. Como você se movimenta.
              <br className="hidden sm:block" /> E o descanso que você também merece.
            </p>
          </div>
          <div className="product-copy">
            <div className="eyebrow">UM PROTOCOLO. TRÊS FORMAS DE CUIDAR.</div>
            <h2>
              Seu recomeço.
              <br />
              <span className="text-primary">Na palma da mão.</span>
            </h2>
            <p>
              Tudo organizado em um só lugar,
              <br className="hidden md:block" /> para você fazer no seu tempo.
            </p>
            <div className="product-perks">
              <span>
                <Smartphone /> 100% digital
              </span>
              <span>
                <Timer /> No seu ritmo
              </span>
              <span>
                <LockKeyhole /> Acesso imediato
              </span>
            </div>
            <div className="product-signature">
              Cicatriz Invisível <span>+ Sono de Mãe</span>
              <ArrowDown />
            </div>
          </div>
          <div className="photo-caption">
            <Heart className="size-4" />
            <span>
              Você cuida de uma vida.
              <br />
              <strong>Agora, é hora de cuidar de você.</strong>
            </span>
          </div>
          <div className="module-grid">
            {modules.map(({ icon: Icon, number, title, description, tag }) => (
              <article className="module-card" key={number}>
                <div className="module-top">
                  <Icon />
                  <span>{number}</span>
                </div>
                <span className="module-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="module-bottom">
                  Simples. Prático. No seu tempo.
                  <Check />
                </span>
              </article>
            ))}
          </div>
          <div className="solution-access">
            <Smartphone />
            <span>Tudo em uma plataforma simples e direta.</span>
            <span className="solution-divider" />
            <Check />
            <strong>Acesso imediato após a compra.</strong>
          </div>
          <p className="health-note">
            Conteúdo educativo. Receitas não tratam inflamação nem substituem pomadas prescritas.
            Inicie exercícios apenas com liberação profissional. Dor, calor, vermelhidão ou secreção
            no corte precisam de avaliação. Para o bebê: dormir de barriga para cima, em superfície
            firme e sem objetos soltos.
          </p>
        </div>
      </section>

      <section className="transformation-section section-space">
        <div className="page-width transformation-grid">
          <div>
            <div className="eyebrow">UM PASSO DE CADA VEZ</div>
            <h2>
              Mais do que uma cicatriz.
              <br />
              <span className="text-primary">
                É sobre se sentir
                <br />
                você de novo.
              </span>
            </h2>
            <p>
              O resultado que você pode buscar,
              <br />
              respeitando o seu corpo e a sua história.
            </p>
          </div>
          <div className="result-list">
            {results.map((result) => (
              <div key={result}>
                <span>
                  <Check />
                </span>
                {result}
              </div>
            ))}
            <small>
              Resultados variam. Não há garantia de redução da cicatriz, do inchaço ou da barriga.
            </small>
          </div>
        </div>
      </section>

      <section className="price-section section-space" id="oferta">
        <div className="page-width price-layout">
          <div className="price-intro">
            <div className="eyebrow">UM PEQUENO VALOR. UM NOVO COMEÇO.</div>
            <h2>
              Você não precisa
              <br />
              gastar uma fortuna
              <br />
              <span className="text-primary">para se priorizar.</span>
            </h2>
            <p>
              Alimentação, movimento e descanso.
              <br />
              Seu protocolo completo em um só lugar.
            </p>
            <div className="price-inclusions">
              {[
                "Protocolo Cicatriz Invisível",
                "Técnicas Sono de Mãe",
                "Acesso digital imediato",
                "Garantia de 20 dias",
              ].map((item) => (
                <span key={item}>
                  <Check />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="offer-box">
            <span className="offer-badge">
              <Sparkles /> OFERTA ESPECIAL
            </span>
            <p className="price-label">Tudo isso por apenas</p>
            <del>{formatBRL(offer.originalPrice)}</del>
            <div className="price">
              <span>R$</span>29<span className="price-cents">,90</span>
            </div>
            <span className="payment-note">Pagamento único. Sem mensalidade.</span>
            <div className="offer-rule" />
            <p className="price-description">
              Menos do que muitas pomadas.
              <br />
              <strong>Muito mais espaço para cuidar de você.</strong>
            </p>
            <PurchaseButton>Quero meu acesso agora</PurchaseButton>
            <div className="trust-line">
              <LockKeyhole /> Compra segura <span>•</span> Acesso imediato
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee-section">
        <div className="page-width">
          <div className="guarantee-box">
            <div className="guarantee-seal">
              <ShieldCheck />
              <strong>{offer.guaranteeDays}</strong>
              <span>DIAS DE GARANTIA</span>
            </div>
            <div>
              <div className="eyebrow">SEU CUIDADO, SEM RISCO.</div>
              <h2>
                Ou faz sentido para você.
                <br />
                Ou seu dinheiro de volta.
              </h2>
              <p>
                Você tem <strong>20 dias para conhecer o protocolo.</strong> Se não ficar satisfeita
                com o conteúdo e a sua rotina de cuidado, devolvemos 100% do seu dinheiro. Sem
                perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-section section-space">
        <div className="page-width">
          <Heart className="final-heart" strokeWidth={1.3} />
          <div className="eyebrow">AGORA, ESCOLHA VOCÊ.</div>
          <h2>
            Você já cuida de tanta coisa.
            <br />
            <span className="text-primary">Não deixe você para depois.</span>
          </h2>
          <p>
            Você pode continuar torcendo para a pochete sumir sozinha
            <br className="hidden md:block" /> e gastando caro em pomadas…
            <br />
            <strong>
              Ou dar o primeiro passo para um cuidado simples,
              <br className="hidden md:block" /> acessível e que respeita o seu momento.
            </strong>
          </p>
          <PurchaseButton>Sim, eu quero o Protocolo por R$ 29,90</PurchaseButton>
          <div className="trust-line">
            <ShieldCheck /> Acesso imediato <span>•</span> Garantia de 20 dias
          </div>
        </div>
      </section>
      <footer>
        <div className="page-width footer-content">
          <Brand />
          <p>© {new Date().getFullYear()} Cicatriz Invisível. Todos os direitos reservados.</p>
          <span>
            Feito para cuidar de quem cuida.
            <Heart />
          </span>
        </div>
      </footer>
    </main>
  );
}
