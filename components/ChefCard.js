import Image from "next/image";

function ChefCard() {
  return (
    <div className="w-full mt-32 flex flex-col gap-8 items-center m-auto">
      <Image src="/images/ramen.jpg" width={300} height={300} className="w-full"></Image>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-lg">Sapporo, Japon</p>
        <p className="text-3xl">Le commencement</p>
        <p className="text-lg">1927</p>
      </div>
      <div>
        <p>
          Daichi Sakamoto appris à cuisiner à l’âge de 5 ans. Il avait pour
          habitude d’aider sa mère à préparer des bentos pour son père, sa
          petite sœur et lui-même, et tous étaient inévitablement garnis de
          chashu. C’est dans le cadre de ses études à Hong Kong que la mère de
          Daichi appris à réaliser cette garniture traditionnelle. Le jeune chef
          Sakamoto avait toujours pour mission de mélanger la marinade, une
          recette qu’il perfectionna durant son adolescence. De nombreuses
          années plus tard, il fut l'apprenti de la célèbre Cheffe Kazue Inoue
          dans une ryokan luxueuse de la préfecture de Nagano. Il a alors étudié
          l'art de la cuisine kaiseki pendant sept ans et prit un plaisir
          particulier à apprendre les plats à base de soupe tels que le futamono
          et le tome-wan. Sa vocation commençait tout juste à frémir.
        </p>
      </div>
    </div>
  );
}

export default ChefCard;
