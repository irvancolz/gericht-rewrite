import { Video, VideoSource } from "@/components";
import { BlogList, BlogQuote, BlogSectionTitle, BlogText, BlogVideo } from ".";

export type BlogContentType = "list" | "text" | "title" | "qoute" | "video";

export type BlogContentProps = {
  type: BlogContentType;
  content: string | string[] | VideoSource[];
};

export function BlogContent({ content, type }: BlogContentProps) {
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
