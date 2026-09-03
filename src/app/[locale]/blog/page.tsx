import type { Metadata } from "next";
import { blogPage, posts } from "@/content/pages/posts";
import Banner, { BannerChip } from "@/components/layout/Banner";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import PostCard from "@/components/sections/PostCard";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on cold chain logistics, transport refrigeration and lifting equipment from Asad Advanced Technologies.",
};

/** Blog index (Figma 121:3869). */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Banner variant="gradient">
        <div className="shell flex flex-col items-center gap-8 pt-[150px] pb-16 text-center lg:pt-[160px] lg:pb-[100px]">
          <BannerChip>{blogPage.chip}</BannerChip>
          <SplitHeading as="h1" className="max-w-[734px] text-h4 lg:text-h2">
            {blogPage.heading}
          </SplitHeading>
        </div>
      </Banner>

      <section className="bg-white py-20 lg:py-[80px]">
        <RevealGroup
          stagger={0.08}
          className="shell grid gap-x-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20"
        >
          {posts.map((post, index) => (
            <Reveal key={post.slug} kind="clip">
              <PostCard
                post={{
                  href: `/${locale}/blog/${post.slug}`,
                  image: post.image,
                  title: post.title,
                  date: post.date,
                  author: `By ${post.author} - ${post.role}`,
                }}
                tall={index % 2 === 1}
                cta={blogPage.readMore}
              />
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <CtaBand />
    </>
  );
}
