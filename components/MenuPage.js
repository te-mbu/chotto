import MenuCard from "./MenuCard";

function MenuPage() {
  return (
    <div className="my-24 w-11/12 flex flex-col items-center m-auto">
      <h1 className="text-2xl p-14">Entrées</h1>
      <div className="w-full flex flex-col gap-4">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <h1 className="text-2xl p-14">Ramen</h1>
      <div className="w-full flex flex-col gap-4">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <h1 className="text-2xl p-14">+ Suppléments</h1>
      <div className="w-full flex flex-col gap-4">
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <h1 className="text-2xl p-14">Boissons</h1>
      <div className="w-full flex flex-col gap-4">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
}

export default MenuPage;
