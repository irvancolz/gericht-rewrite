import React from "react";
import style from "./reservations.module.css";
import { SectionTitle } from "..";
import { Button, Signature } from "@/components";
import { Dropdown, OptionProps } from "@/components/fragment";

const personsCount: OptionProps[] = [
  { label: "1 Person", value: "1", logo: "" },
  { label: "2 Person", value: "2", logo: "" },
  { label: "3 Person", value: "3", logo: "" },
  { label: "4 Person", value: "4", logo: "" },
];

export function Reservation() {
  return (
    <div className={style.container}>
      <div className={style.content_wrappper}>
        <SectionTitle title="Reservations" desc="Book A Table" />
        <div className={style.options}>
          <Dropdown
            values={personsCount}
            defaultsValue={{ label: "1 Person", value: "1" }}
          />
          <Dropdown
            values={personsCount}
            defaultsValue={{ label: "1 Person", value: "1" }}
          />
          <Dropdown
            values={personsCount}
            defaultsValue={{ label: "1 Person", value: "1" }}
          />
        </div>
        <Button>Book Now</Button>
      </div>
      <Signature className={style.signature} />
    </div>
  );
}
