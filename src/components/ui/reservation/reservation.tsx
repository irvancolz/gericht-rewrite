"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import style from "./reservations.module.css";
import { SectionTitle } from "..";
import { Button, Signature } from "@/components";
import { Dropdown, OptionProps } from "@/components/fragment";
import DatePicker from "react-datepicker";
import { gsap } from "gsap";

const personsCount: OptionProps[] = [
  { label: "1 Person", value: "1", logo: "" },
  { label: "2 Person", value: "2", logo: "" },
  { label: "3 Person", value: "3", logo: "" },
  { label: "4 Person", value: "4", logo: "" },
];

export function Reservation() {
  const [startDate, setStartDate] = useState(new Date());

  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reservation_input", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".reservation_input",
          start: "top 80%",
        },
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: "all" });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.content_wrappper}>
        <SectionTitle title="Reservations" desc="Book A Table" />
        <div className={style.options}>
          <Dropdown
            values={personsCount}
            defaultsValue={{ label: "1 Person", value: "1" }}
            className="reservation_input"
          />
          <DatePicker
            onChange={(a) => setStartDate(a!!)}
            selected={startDate}
            shouldCloseOnSelect={false}
            className={`${style.datepicker} reservation_input`}
          />
          <DatePicker
            onChange={(a) => setStartDate(a!!)}
            selected={startDate}
            shouldCloseOnSelect={false}
            dateFormat={"HH:mm aa"}
            showTimeSelect
            showTimeSelectOnly
            icon={<span className={style.datepicker_select}>helo</span>}
            className={`${style.datepicker} reservation_input`}
          />
        </div>
        <Button className="reservation_input">Book Now</Button>
      </div>
      <Signature className={style.signature} />
    </div>
  );
}
