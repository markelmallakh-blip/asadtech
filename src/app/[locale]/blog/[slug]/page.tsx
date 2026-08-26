import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { en } from "@/content/en";
import { posts } from "@/content/pages/posts";
import { locales } from "@/lib/i18n";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import Figure from "@/components/ui/Figure";
import CtaBand from "@/components/sections/CtaBand";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = en.articles.items.filter((item) => !item.href.endsWith(slug)).slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------------- title block */}
      <section className="bg-navy pt-[85px]">
        <div className="shell py-16 lg:py-[90px]">
          <Reveal as="p" kind="fade" className="text-body-sm text-blue-70">
            {post.date}
          </Reveal>
          <SplitHeading
            as="h1"
            className="mt-4 max-w-[980px] text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.15] text-white"
          >
            {post.title}
          </SplitHeading>
          <Reveal as="p" className="mt-6 text-body text-text-light">
            By {post.author} — {post.role}
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- lead image */}
      <Reveal kind="clip" className="shell -mt-10 lg:-mt-[60px]">
        <ParallaxFigure
          src={post.image}
          alt={post.title}
          strength={14}
          sizes="(max-width: 1512px) 100vw, 1392px"
          className="aspect-[1392/620] w-full"
        />
      </Reveal>

      {/* ------------------------------------------------------------ body */}
      <article className="shell py-16 lg:py-[80px]">
        <div className="mx-auto max-w-[780px]">
          <Reveal
            as="p"
            className="text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.55] font-medium text-text-dark"
          >
            {post.excerpt}
          </Reveal>

          <RevealGroup stagger={0.06} className="mt-10 flex flex-col gap-8">
            {post.body.map((block, i) => (
              <Reveal key={i}>
                {block.heading && (
                  <h2 className="mb-3 text-h5 text-ink">{block.heading}</h2>
                )}
                <p className="text-body leading-[1.8] text-ink-soft">{block.text}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </article>

      {/* ------------------------------------------------------ more posts */}
      <section className="shell pb-20 lg:pb-[80px]">
        <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
          More articles
        </SplitHeading>

        <RevealGroup stagger={0.1} className="mt-10 grid gap-6 sm:grid-cols-3">
          {more.map((item) => (
            <Reveal key={item.href} kind="clip">
              <Link href={item.href} className="group block">
                <Figure
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="aspect-[440/300] w-full"
                />
                <p className="mt-4 text-body-xs text-ink-soft">{item.date}</p>
                <h3 className="mt-2 text-h6 leading-[1.3] text-ink transition-colors duration-300 group-hover:text-blue">
                  {item.title}
                </h3>
                <TextLink className="mt-4">Read more</TextLink>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <CtaBand />
    </>
  );
}
