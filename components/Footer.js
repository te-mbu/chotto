import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    
    <div className="w-11/12 flex flex-col items-center m-auto gap-8 p-5">
        <div className="w-full">
            <ul className="flex flex-row justify-evenly items-center">
                <li>
                    <Link className="hover:underline" href="/menu">Menu</Link>
                </li>
                <span className="">.</span>
                <li>
                    <Link className="hover:underline" href="/chef">Chef</Link>
                </li>
                <span>.</span>
                <li>
                    <Link className="hover:underline" href="/reservations">Réservations</Link>
                </li>
                <span>.</span>
                <li>
                    <Link className="hover:underline" href="/lieu">Adresse</Link>
                </li>
            </ul>
        </div>
        <div>
            <p>+ 555 1234 5678</p>
        </div>
        <div className="flex flex-row gap-2 w-full justify-center">
            <p>Conçu avec</p><Image src="/icons/heart-icon.svg" width={15} height={15} alt="Heart icon"></Image><p>par <span className="underline">Térence</span></p>
        </div>
    </div>
  );
}

export default Footer;