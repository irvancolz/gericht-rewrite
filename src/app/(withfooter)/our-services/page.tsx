import {
  BreadcrumbsProps,
  Button,
  MenuGroup,
  Reservation,
  SectionTitle,
  Text,
} from "@/components";
import { HeroWithBreadcrumbs } from "@/components/ui/hero_with_breadcrumbs";
import style from "./page.module.css";
import React from "react";

const OUR_SERVICE_PATH = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "our services",
    path: "/our-services",
  },
];

const breadcrumbs: BreadcrumbsProps = {
  paths: OUR_SERVICE_PATH,
};

export default function Page() {
  return (
    <>
      <HeroWithBreadcrumbs breadcrumbs={breadcrumbs} pageName="what we offer" />
      <div className={style.serving_quality}>
        <SectionTitle
          title="Serving Quality"
          desc="We at Gericth are serving our customers for over a decade."
        />
        <Text align="center" className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </Text>
        <div className={style.actions}>
          <Button>Read More</Button>
          <Button variant="outlined">Contact Us</Button>
        </div>
      </div>
      <MenuGroup />
      <Reservation />
    </>
  );
}
