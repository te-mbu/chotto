function MenuCard(props) {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[70%] flex flex-col gap-1 pl-5">
        {/* FoodType */}
        <h2 className="text-xl font-bold">{props.dish}</h2>
        {/* Description */}
        <p>{props.description}</p>
      </div>
      <div className="w-[30%] flex justify-end items-center">
        {/* Price */}
        <p className="pr-5 font-semibold">{props.price} $</p>
      </div>
    </div>
  );
}

export default MenuCard;
