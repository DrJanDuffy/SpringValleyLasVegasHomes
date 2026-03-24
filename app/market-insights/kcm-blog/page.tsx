import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { KcmBlogEmbed } from "@/components/kcm/KcmBlogEmbed";
import { KcmFeedSection } from "@/components/kcm/KcmFeedSection";
import Link from "next/link";
import type { Metadata } from "next";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { kcmConfig } from "@/lib/integrations";
import { generateLocalBusinessSchema } from "@/lib/gbp-schema";
import { buildKcmFeedJsonLdGraph, getKcmFeedItems } from "@/lib/kcm-rss";

export const metadata: Metadata = {
  title: "Artículos de mercado (español) | KCM — Spring Valley Las Vegas",
  description:
    "Artículos de bienes raíces de Keeping Current Matters (Simplifying the Market) en español. Para comprar o vender en Spring Valley y el valle oeste, llame a Dr. Jan Duffy al (702) 664-8424.",
  alternates: {
    canonical: `${siteConfig.url}/market-insights/kcm-blog`,
  },
};

export const revalidate = 3600;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el contenido de esta página?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Incluye tarjetas generadas desde su feed RSS de Keeping Current Matters (resúmenes con enlace al artículo en KCM) y un visor incrustado del blog. Los artículos son educación general del mercado; no sustituyen asesoría local sobre su casa o vecindario en Las Vegas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo obtener ayuda local sobre Spring Valley o Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Sí. ${agentInfo.name}, ${agentInfo.title}, con ${agentInfo.brokerage}, ayuda a compradores y vendedores en Spring Valley y el valle oeste. Oficina: ${officeInfo.address.full}. Teléfono: ${agentInfo.phone}.`,
      },
    },
  ],
};

export default async function KcmBlogPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const items = await getKcmFeedItems(9);
  const pageUrl = `${siteConfig.url}/market-insights/kcm-blog`;
  const feedGraph = items.length > 0 ? buildKcmFeedJsonLdGraph(items, pageUrl) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {feedGraph ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(feedGraph) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-8">
            <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              {" / "}
              <Link href="/market-insights" className="hover:text-blue-600">
                Market Insights
              </Link>
              {" / "}
              <span className="text-slate-900">KCM (español)</span>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Artículos de mercado (español)
            </h1>
            <p className="text-lg text-slate-600">
              Contenido educativo de{" "}
              <span className="font-medium">Keeping Current Matters</span> — Simplifying the
              Market. Abajo: resúmenes desde su feed RSS y el visor completo del blog (fuente
              externa).
            </p>
            <p className="mt-4 text-slate-700">
              Para comprar o vender en{" "}
              <Link href="/neighborhoods/spring-valley" className="text-blue-600 hover:underline">
                Spring Valley
              </Link>{" "}
              o el oeste del valle,{" "}
              <a href={agentInfo.phoneTel} className="font-medium text-blue-600 hover:underline">
                llame a {agentInfo.name}
              </a>{" "}
              al {agentInfo.phone}. {officeInfo.name}, {officeInfo.address.full}.
            </p>
          </div>

          <KcmFeedSection items={items} variant="full" locale="es" />

          <div className="max-w-4xl mx-auto mb-6">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
              Visor completo del blog (KCM)
            </h2>
            <p className="text-center text-sm text-slate-600 mb-4">
              Desplácese dentro del marco para ver todos los artículos como en el sitio de KCM.
            </p>
          </div>

          <KcmBlogEmbed />

          <section
            className="max-w-3xl mx-auto mt-14 prose prose-slate"
            aria-labelledby="faq-kcm-heading"
          >
            <h2 id="faq-kcm-heading" className="text-xl font-bold text-slate-900">
              Preguntas frecuentes
            </h2>
            <h3 className="text-lg font-semibold text-slate-800 mt-6">
              ¿Qué es el contenido de esta página?
            </h3>
            <p>
              Tarjetas del feed RSS (resumen + enlace) y un visor incrustado del blog. Los temas son
              nacionales o generales; úselos como contexto, no como pronóstico del precio de su casa
              en Spring Valley.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-6">
              ¿Cómo uso el feed RSS en mi correo o CRM?
            </h3>
            <p>
              KCM proporciona un enlace RSS para plataformas como email marketing o automatización.
              La URL de su feed en español (para configuración en su CRM) es:{" "}
              <a
                href={kcmConfig.spanishRssFeedUrl}
                className="text-blue-600 break-all hover:underline"
                rel="noopener noreferrer"
              >
                {kcmConfig.spanishRssFeedUrl}
              </a>
              . Esta página también muestra esos artículos como tarjetas y el visor iframe.
            </p>
          </section>

          <div className="max-w-3xl mx-auto mt-10 text-center">
            <Link
              href="/market-insights"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              ← Volver a Market Insights
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
