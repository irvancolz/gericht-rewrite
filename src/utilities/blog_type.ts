import { VideoSource } from "@/components";

export type Blog = {
  id: number;
  author: string;
  created_at: string;
  title: string;
  spoiler: string;
  img: string;
};

type BlogContentType = "list" | "text" | "title" | "qoute" | "video";

export type BlogContent = {
  type: BlogContentType;
  content: string | string[] | VideoSource[];
};

export type BlogDetail = Blog & { content: BlogContent[]; category_id: number };

export type Comment = {
  id: number;
  author: number;
  comment: string;
  created_at: string;
};

export type CommentInput = Pick<Comment, "author" | "comment"> & {
  parent_id?: number;
  blog_id: number;
};

export type Tag = {
  id: number;
  created_at: string;
  name: string;
};
