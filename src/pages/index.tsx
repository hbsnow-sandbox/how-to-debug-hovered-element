import React, { useState } from "react";

import { NextPage } from "next";
import { classnames, TArg } from "tailwindcss-classnames";

import styles from "./index.module.css";

const Page: NextPage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <main
      className={classnames(
        "container",
        "grid",
        "grid-flow-row",
        "auto-rows-max",
        "gap-12",
        "divide-y",
        "divide-gray-300",
        "mx-auto"
      )}
    >
      <section className={classnames("pt-12")}>
        <h2 className={classnames("text-2xl", "font-bold", "mb-6")}>問題1</h2>

        <p className={classnames("mb-6")}>
          以下の青い四角をホバーして出現するTooltipのCSSを調べてみましょう。
        </p>

        <div
          className={`${classnames(
            "relative",
            "grid",
            "place-content-center",
            "w-24",
            "h-24",
            "bg-blue-600",
            "text-white",
            "cursor-pointer"
          )} ${styles.question1}`}
        >
          <div>青い四角</div>
        </div>
      </section>

      <section className={classnames("pt-12")}>
        <h2 className={classnames("text-2xl", "font-bold", "mb-6")}>問題2</h2>

        <p className={classnames("mb-6")}>
          以下の緑の四角をホバーして出現するTooltipのCSSを調べてみましょう。
        </p>

        <div
          className={classnames(
            "relative",
            "grid",
            "place-content-center",
            "w-24",
            "h-24",
            "bg-green-600",
            "text-white",
            "cursor-pointer"
          )}
          onMouseEnter={() => {
            setIsShow(true);
          }}
          onMouseLeave={() => {
            setIsShow(false);
          }}
        >
          {isShow && <span className={styles.question2}>Tooltip</span>}
          <div>青い四角</div>
        </div>
      </section>
    </main>
  );
};

export default Page;
