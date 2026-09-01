import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Blog() {
  if (blogPosts.length === 0) return null;

  return (
    <section id="blog" className="content-section section-anchor">
      <SectionHeading>BLOG POSTS</SectionHeading>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.title}>
            <time>{post.date}</time>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.href}>
              Read More <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
