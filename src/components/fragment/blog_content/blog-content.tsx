import { VideoSource } from "@/components";
import { BlogList, BlogQuote, BlogSectionTitle, BlogText, BlogVideo } from ".";
import { BlogContent } from "@/utilities/blog_type";

export function BlogContent({ content, type }: BlogContent) {
  switch (type) {
    case "list":
      return <BlogList content={content as string[]} />;
    case "title":
      return <BlogSectionTitle content={content as string} />;
    case "qoute":
      return <BlogQuote content={content as string} />;
    case "video":
      return <BlogVideo content={content as VideoSource[]} />;
    default:
      return <BlogText content={content as string} />;
  }
}
