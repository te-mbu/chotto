import Image from "next/image";

function LieuPage() {
  return (
    <div className="w-11/12 mt-32 mb-32 flex flex-col items-center m-auto gap-20">
      <div className="w-full aspect-video md:max-w-5xl md:max-h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.9638947358394!2d5.021301977635863!3d47.31504387116469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29dbc71146339%3A0x159a8ee8f745b781!2s6%20All.%20de%20l&#39;Yonne%2C%2021000%20Dijon!5e0!3m2!1sfr!2sfr!4v1684585585133!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%)" }}
          className="z-0 object-cover"
          allowFullScreen=""
          loading="lazy"
          fill
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-4xl md:text-5xl">123 Rue Démo</p>
        <p className="text-4xl md:text-5xl">Central, HK</p>
        <p className="text-4xl md:text-5xl">+ 555 1234 5678</p>
      </div>
      <div className="w-[100px] aspect-video relative">
        <Image src="/images/vague.png" fill className="object-cover"  ></Image>
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-4xl md:text-5xl">De Midi à 22h00</p>
        <p className="text-4xl md:text-5xl">Tous les jours</p>
      </div>
    </div>
  );
}

export default LieuPage;
