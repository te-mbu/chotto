import Image from "next/image";

function ChefCard(props) {
  return (
    <div className="w-full mt-32 flex flex-col gap-8 items-center m-auto">
      <div className="relative aspect-video w-full max-w-7xl">
        {/* Url */}
        <Image src={props.url} fill className="w-full"></Image>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-8 items-center md:w-1/2 md:justify-evenly">
          {/* City */}
          <p className="text-lg">{props.city}</p>
          {/* Title */}
          <p className="text-3xl">{props.title}</p>
          {/* Year */}
          <p className="text-lg">{props.year}</p>
        </div>
        <div className="md:w-1/2">
          {/* Description */}
          <p className="leading-loose whitespace-pre-line">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChefCard;
