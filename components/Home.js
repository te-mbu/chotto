import Image from "next/image";

function Home() {
  return (
    <div class="my-32  w-full">
      <div className=" flex flex-col items-center gap-5 w-11/12 md:max-w-3xl m-auto">
        <div className="flex flex-col items-center gap-4 w-full m-16">
          <h1 className="text-4xl md:text-5xl">123 rue Démo</h1>
          <h1 className="text-4xl md:text-5xl">Hong Kong</h1>
        </div>
        <div className="aspect-square w-full relative">

        <Image className="object-cover" src="/images/japanese-dish.jpeg" fill alt="Japanese Dish"></Image>
        </div>
        <div className="flex flex-col w-full gap-4 items-center m-16">
          <h2 className="text-4xl md:text-5xl">De midi à minuit</h2>
          <h2 className="text-4xl md:text-5xl">Tous les jours</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
