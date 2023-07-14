function MenuCard(props) {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[70%] flex flex-col gap-1 pl-5">
        {/* FoodType */}
        <p className="text-lg font-semibold">{props.dish}</p>
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
