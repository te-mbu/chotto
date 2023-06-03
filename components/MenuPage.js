import MenuCard from "./MenuCard";

function MenuPage() {
  return (
    <div className="my-24 w-11/12 flex flex-col items-center m-auto">
      <h1 className="text-2xl mt-28 mb-12">Entrées</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 max-w-7xl">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <h1 className="text-2xl mt-28 mb-12">Ramen</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 max-w-7xl">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <h1 className="text-2xl mt-28 mb-12">+ Suppléments</h1>
      <div className="w-full flex flex-col gap-4 max-w-4xl lg:flex-row lg:gap-8 lg:max-w-7xl">
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <h1 className="text-2xl mt-28 mb-12">Boissons</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 max-w-7xl">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
