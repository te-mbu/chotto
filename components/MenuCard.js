function MenuCard() {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[70%] flex flex-col gap-1 pl-5">
        {/* FoodType */}
        <h2>Ramen</h2>
        {/* Description */}
        <p>Ajoutez une description ici</p>
      </div>
      <div className="w-[30%] flex justify-end items-center">
        {/* Price */}
        <p className="pr-5">90 $</p>
      </div>
    </div>
  );
}

export default MenuCard;
