import * as React from "react";
import { useState } from "react";
import Image from "next/image";

var classNames = require("classnames");

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section>
      <div className="background" />

      <nav className={"navbar"}>
        <form action="\">
          <button>
            <img
              className="navbar-logo"
              src="../images/logo_mini.png"
              alt="logo_mini"
            />
          </button>
        </form>
        <button
          className={classNames(
            "z-[3] grid place-items-center w-[20px] h-[20px] bg-[url('../public/images/menu.svg')] bg-no-repeat bg-center transition delay-150 duration-300 ease-in-out hover:animate-pulse",
            { "bg-[url('../public/images/close.svg')] transition": isNavOpen }
          )}
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </nav>

      <nav
        className={classNames(
          "fixed z-[2] top-0 left-0 flex flex-col justify-center items-center gap-10 w-full h-full bg-black opacity-0 invisible transition",
          { "!visible opacity-90": isNavOpen }
        )}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-[50px]"
          style={{ animationDelay: "0.1s" }}
          href="/catalog.html"
        >
          Каталог
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-[50px]"
          style={{ animationDelay: "0.2s" }}
          href="#Как_это_работает?"
        >
          Как это работает ?
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-[50px]"
          style={{ animationDelay: "0.3s" }}
          href="#A_what_with_delivery_?"
        >
          А что с доставкой ?
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-[50px]"
          style={{ animationDelay: "0.4s" }}
          href="#About_us"
        >
          О нас
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-[50px]"
          style={{ animationDelay: "0.5s" }}
          href="#Связаться"
        >
          Связаться
        </a>
      </nav>
    </section>
  );
}
