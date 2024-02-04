import React from "react";
import style from "./resto-history.module.css";
import { Images, SectionTitle, Spoon } from "@/components";

export function RestoHistory() {
  return (
    <section className="container">
      <SectionTitle
        title="Our History"
        desc="serving customers for over a decade"
      />
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Images
            className={style.left_img}
            alt="img"
            src={"/assets/png/resto_history_1.png"}
          />
        </div>
        <div className={style.right}>
          <Images
            className={style.right_img}
            alt="img"
            src={"/assets/png/resto_history_2.png"}
          />
          <h3 className={style.title}>over the years</h3>
          <div className={style.counter}>
            <div>
              <Counter count={"30+"} desc={"Breakfast Options"} />
              <span className={style.separator}></span>
            </div>
            <div>
              <Counter count={"50+"} desc={"Dinner Options"} />
              <span className={style.separator}></span>
            </div>
            <Counter count={"8"} desc={"New Locations"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ count, desc }: { count: string; desc: string }) {
  return (
    <div>
      <h4 className={style.title}>{count}</h4>
      <Spoon className={style.spoon} />
      <p className={style.counter_desc}>{desc}</p>
    </div>
  );
}
