import Link from "next/link";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function NavBar() {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    setSelectedPage("accueil");
  }, []);

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
                onClick={() => {
                  setIsToggleMenuOpen(!isToggleMenuOpen);
                  setSelectedPage("accueil");
                }}
                className={`${
                  selectedPage === "accueil"
                    ? "underline underline-offset-4"
                    : ""
                }`}
                href="/"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsToggleMenuOpen(!isToggleMenuOpen);
                  setSelectedPage("menu");
                }}
                className={`${
                  selectedPage === "menu" ? "underline underline-offset-4" : ""
                }`}
                href="/menu"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsToggleMenuOpen(!isToggleMenuOpen);
                  setSelectedPage("chef");
                }}
                className={`${
                  selectedPage === "chef" ? "underline underline-offset-4" : ""
                }`}
                href="/chef"
              >
                Chef
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsToggleMenuOpen(!isToggleMenuOpen);
                  setSelectedPage("reservations");
                }}
                className={`${
                  selectedPage === "reservations"
                    ? "underline underline-offset-4"
                    : ""
                }`}
                href="/reservations"
              >
                Réservations
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsToggleMenuOpen(!isToggleMenuOpen);
                  setSelectedPage("lieu");
                }}
                className={`${
                  selectedPage === "lieu" ? "underline underline-offset-4" : ""
                }`}
                href="/lieu"
              >
                Lieu
              </Link>
            </li>
          </ul>
        </div>
        {/* MIDDLE - RESTAURENT NAME */}
        <Link href="/" className="text-2xl md:w-1/3" onClick={() => setIsToggleMenuOpen(false)}>
          Chotto
        </Link>
        {/* RIGHT - BARS */}
        <div className="md:hidden cursor-pointer">
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
              onClick={() => {
                setIsToggleMenuOpen(!isToggleMenuOpen);
                setSelectedPage("accueil");
              }}
              className={`text-3xl tracking-wider ${
                selectedPage === "accueil" ? "underline underline-offset-4" : ""
              }`}
              href="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsToggleMenuOpen(!isToggleMenuOpen);
                setSelectedPage("menu");
              }}
              className={`text-3xl tracking-wider ${
                selectedPage === "menu" ? "underline underline-offset-4" : ""
              }`}
              href="/menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsToggleMenuOpen(!isToggleMenuOpen);
                setSelectedPage("chef");
              }}
              className={`text-3xl tracking-wider ${
                selectedPage === "chef" ? "underline underline-offset-4" : ""
              }`}
              href="/chef"
            >
              Chef
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsToggleMenuOpen(!isToggleMenuOpen);
                setSelectedPage("reservations");
              }}
              className={`text-3xl tracking-wider ${
                selectedPage === "reservations" ? "underline underline-offset-4" : ""
              }`}
              href="/reservations"
            >
              Réservations
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsToggleMenuOpen(!isToggleMenuOpen);
                setSelectedPage("lieu");
              }}
              className={`text-3xl tracking-wider ${
                selectedPage === "lieu" ? "underline underline-offset-4" : ""
              }`}
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
