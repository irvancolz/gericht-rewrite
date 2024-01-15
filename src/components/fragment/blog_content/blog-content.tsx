import { VideoSource } from "@/components";
import {
  BlogFlex,
  BlogImage,
  BlogList,
  BlogQuote,
  BlogSectionTitle,
  BlogText,
  BlogVideo,
} from ".";
import { BlogContent } from "@/utilities/blog_type";

export function BlogContent({ content, type, props }: BlogContent) {
  switch (type) {
    case "list":
      return <BlogList content={content as unknown as string[]} />;
    case "title":
      return <BlogSectionTitle content={content as unknown as string} />;
    case "quote":
      return <BlogQuote content={content as unknown as string} />;
    case "video":
      return <BlogVideo content={content as unknown as VideoSource[]} />;
    case "flex":
      return <BlogFlex content={content as unknown as BlogContent[]} />;
    case "image":
      return <BlogImage content={content as unknown as string} props={props} />;
    default:
      return <BlogText content={content as unknown as string} />;
  }
}
