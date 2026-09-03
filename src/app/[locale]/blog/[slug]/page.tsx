import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPage, posts } from "@/content/pages/posts";
import { locales } from "@/lib/i18n";
import Banner, { BackLink } from "@/components/layout/Banner";
import Button from "@/components/ui/Button";
import ShareButtons from "@/components/ui/ShareButtons";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import PostCard from "@/components/sections/PostCard";
import CtaBand from "@/components/sections/CtaBand";

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

/** Article page (Figma 121:4285). */
export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const byline = `By ${post.author} - ${post.role}`;
  const more = posts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      {/* -------------------------------------------------------- banner */}
      <Banner variant="gradient" className="lg:pb-[140px]">
        <div className="shell flex justify-center pt-[150px] pb-16 lg:pt-[160px] lg:pb-[100px]">
          <div className="flex w-full max-w-[892px] flex-col gap-2">
            <BackLink href={`/${locale}/blog`}>{blogPage.back}</BackLink>
            <SplitHeading as="h1" className="text-h4 lg:text-h3">
              {post.title}
            </SplitHeading>
            <Reveal kind="fade" className="flex flex-wrap items-center gap-2 text-body-xs">
              <span>{post.date}</span>
              <span aria-hidden className="size-1.5 rounded-full bg-white" />
              <span>{byline}</span>
            </Reveal>
          </div>
        </div>
      </Banner>

      {/* ---------------------------------------------------------- body */}
      <article className="bg-white pb-20 lg:pb-[80px]">
        <div className="shell flex flex-col items-center gap-6">
          {/* Rides up over the banner by the design's 140px */}
          <Reveal kind="clip" className="w-full max-w-[950px] lg:-mt-[140px]">
            <ParallaxFigure
              src={post.image}
              alt={post.title}
              strength={12}
              sizes="(max-width: 1024px) 100vw, 950px"
              className="aspect-[950/446] w-full"
            />
          </Reveal>

          <RevealGroup stagger={0.06} className="flex w-full max-w-[735px] flex-col gap-6">
            {post.body.map((block) => (
              <Reveal key={block.heading} className="flex flex-col gap-2">
                <h2 className="text-h6 font-semibold text-text-dark capitalize">{block.heading}</h2>
                <p className="text-body text-text-muted">{block.text}</p>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal kind="line" className="h-px w-full max-w-[757px] bg-grey-3" />
          <Reveal kind="fade" className="flex w-full max-w-[735px] justify-end">
            <ShareButtons title={post.title} />
          </Reveal>
        </div>
      </article>

      {/* ------------------------------------------------------ read also */}
      <section className="bg-blue-10 py-20 lg:py-[90px]">
        <div className="shell flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
              {blogPage.readAlso}
            </SplitHeading>
            <Reveal kind="fade">
              <Button href={`/${locale}/blog`} variant="primary" size="md">
                {blogPage.allCta}
              </Button>
            </Reveal>
          </div>

          <RevealGroup stagger={0.1} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((item, index) => (
              <Reveal key={item.slug} kind="clip">
                <PostCard
                  post={{
                    href: `/${locale}/blog/${item.slug}`,
                    image: item.image,
                    title: item.title,
                    date: item.date,
                    author: `By ${item.author} - ${item.role}`,
                  }}
                  tall={index % 2 === 1}
                  cta={blogPage.readMore}
                />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
