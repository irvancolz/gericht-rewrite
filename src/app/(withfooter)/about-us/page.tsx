import { ChefWord, PhotoGalery, Testimony, RestoHistory } from "@/components";
import { HeroWithBreadcrumbs } from "@/components/ui/hero_with_breadcrumbs";
import React from "react";

const ABOUT_US_PATH = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about us",
    path: "/about-us",
  },
];

export default function Page() {
  return (
    <>
      <HeroWithBreadcrumbs
        breadcrumbs={{ paths: ABOUT_US_PATH }}
        pageName="Welcome to Gerícht"
      />
      <RestoHistory />
      <ChefWord />
      <Testimony />
      <PhotoGalery />
    </>
  );
}
