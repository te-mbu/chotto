import Image from "next/image";

function Home() {
  return (
    <div class="mt-24 w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center p-20">
          <h1 className="text-3xl">123 rue Démo</h1>
          <h1 className="text-3xl">Hong Kong</h1>
        </div>
        <Image className="" src="/images/japanese-dish.jpeg" width={325} height={325} alt="Japanese Dish"></Image>
        <div className="flex flex-col items-center p-20">
          <h2 className="text-3xl">De midi à minuit</h2>
          <h2 className="text-3xl">Tous les jours</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
