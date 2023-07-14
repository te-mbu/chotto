import MenuCard from "./MenuCard";

function MenuPage() {
  return (
    <div className="my-24 w-11/12 flex flex-col items-center m-auto">
      <h1 className="text-2xl mt-28 mb-12">Petites assiettes</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 max-w-7xl">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <MenuCard
            dish="GYOZA"
            description="Porc poêlé et dumplings au chou"
            price="6"
          />
          <MenuCard
            dish="SHISHITO"
            description="Poivron shishito revenu avec du sel"
            price="6"
          />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <MenuCard
            dish="BAO"
            description="Poitrine de porc braisée, concombre, sauce hoisin"
            price="7"
          />
          <MenuCard
            dish="TAKOYAKI
            "
            description="Poulpe, beni shoga, bonite et cébette"
            price="7"
          />
        </div>
      </div>
      <h1 className="text-2xl mt-28 mb-12">Ramen</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 max-w-7xl">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <MenuCard
            dish="SHIO"
            description="Bouillon salé, chashu, cébette, œuf, nori, nouilles droites"
            price="10"
          />
          <MenuCard
            dish="MISO"
            description="Bouillon miso, chashu, maïs, bambou, œuf, cébette, nori, nouilles ondulées"
            price="12"
          />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <MenuCard
            dish="SHOYU"
            description="Bouillon de soja, chashu, cébette, œuf, nori, nouilles droites"
            price="11"
          />
          <MenuCard
            dish="TONKOTSU"
            description="Bouillon de porc, chashu, bambou, cébette, œuf, nori, huile de sésame, nouilles droites"
            price="13"
          />
        </div>
      </div>
      <h1 className="text-2xl mt-28 mb-12">+ Accompagnements</h1>
      <div className="w-full flex flex-col gap-4 max-w-4xl lg:flex-row lg:gap-8 lg:max-w-7xl">
        <MenuCard
          dish="GARNITURES"
          description="Cébette, graines de sésame, huile pimentée, nori, beni shoga, pâte d'ail"
          price="0.50"
        />
        <MenuCard
          dish="PROTÉINES"
          description="Oeuf poché, oeuf mollet, chashu, poulet, tofu, naruto"
          price="2"
        />
      </div>
      <h1 className="text-2xl mt-28 mb-12">Boissons</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 max-w-7xl">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
        <MenuCard
          dish="SAKE"
          description="Junmai daiginjo-shu"
          price="10"
        />
         <MenuCard
          dish="BIÈRES"
          description="Komugi"
          price="5.50"
        />
         <MenuCard
          dish="UMESHU"
          description="Vin de prune"
          price="10"
        />
         <MenuCard
          dish="APEROL SPRITZ"
          description="Prosecco, aperol, tonic, yuzu"
          price="10"
        />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
        <MenuCard
          dish="GENMAICHA"
          description="Thé vert avec riz brun torréfié"
          price="3.50"
        />
         <MenuCard
          dish="HOJICHA"
          description="Thé vert torréfié"
          price="3.50"
        />
         <MenuCard
          dish="PU-ERH"
          description="Thé noir fermenté"
          price="3.50"
        />
         <MenuCard
          dish="EARL GREY"
          description="Thé noir à la bergamote"
          price="3.50"
        />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
