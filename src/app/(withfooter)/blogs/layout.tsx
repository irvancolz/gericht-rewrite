import { BreadcrumbsProps } from "@/components";
import { HeroWithBreadcrumbs } from "@/components/ui/hero_with_breadcrumbs";
import React, { ReactNode } from "react";

const BLOG_BREADCRUMBS_CONTENT = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/blogs",
    label: "Our Blogs - With Sidebar",
  },
];

const breadcrumbs: BreadcrumbsProps = {
  paths: BLOG_BREADCRUMBS_CONTENT,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroWithBreadcrumbs breadcrumbs={breadcrumbs} pageName="our blogs" />
      {children}
    </>
  );
}
