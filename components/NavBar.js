import Link from "next/link";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function NavBar() {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-8xl m-auto z-50">
      <div
        style={{ "z-index": "9999" }}
        className="fixed top-0 bg-white left-0 h-24 w-full flex flex-row justify-between items-center md:left-auto md:m-auto p-8 md:max-w-8xl"
      >
        {/* LEFT - MENU */}
        <div className="hidden md:block md:w-1/3">
          <ul className="md:flex md:flex-row md:gap-3 md:w">
            <li>
              <Link
                onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
                className="hover:underline hover:underline-offset-4"
                href="/"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
                className="hover:underline hover:underline-offset-4"
                href="/menu"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
                className="hover:underline hover:underline-offset-4"
                href="/chef"
              >
                Chef
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
                className="hover:underline hover:underline-offset-4"
                href="/reservations"
              >
                Réservations
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
                className="hover:underline hover:underline-offset-4"
                href="/lieu"
              >
                Lieu
              </Link>
            </li>
          </ul>
        </div>
        {/* MIDDLE - RESTAURENT NAME */}
        <Link href="/" className="text-2xl md:w-1/3">
          Chotto
        </Link>
        {/* RIGHT - BARS */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            width={25}
            height={25}
            onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
          />
        </div>
        {/* RIGHT - SOCIALS */}
        <div className="hidden md:block">
          <Image
            src="/icons/instagram-icon.svg"
            width={25}
            height={25}
            alt=""
          ></Image>
        </div>
      </div>
      {/* TOGGLED MENU */}
      <div
        className={
          isToggleMenuOpen
            ? "fixed z-50 bg-white overflow-hidden top-24 left-0 h-[calc(100vh-192px)] w-full flex flex-col justify-center items-center md:hidden"
            : "hidden"
        }
      >
        <ul className="flex flex-col gap-5 items-center justify-center">
          <li>
            <Link
              onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
              className="text-3xl tracking-wider hover:underline hover:underline-offset-4"
              href="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
              className="text-3xl tracking-wider hover:underline hover:underline-offset-4"
              href="/menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
              className="text-3xl tracking-wider hover:underline hover:underline-offset-4"
              href="/chef"
            >
              Chef
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
              className="text-3xl tracking-wider hover:underline hover:underline-offset-4"
              href="/reservations"
            >
              Réservations
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsToggleMenuOpen(!isToggleMenuOpen)}
              className="text-3xl tracking-wider hover:underline hover:underline-offset-4"
              href="/lieu"
            >
              Lieu
            </Link>
          </li>
        </ul>
      </div>
      {/* BOTTOM SOCIALS */}
      <div
        className={
          isToggleMenuOpen
            ? "fixed z-50 overflow-hidden bg-white bottom-0 left-0 h-24 w-full flex justify-center items-center md:hidden"
            : "hidden"
        }
      >
        <Image
          src="/icons/instagram-icon.svg"
          width={25}
          height={25}
          alt=""
        ></Image>
      </div>
    </div>
  );
}

export default NavBar;
