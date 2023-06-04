import ChefCard from "./ChefCard";
import GallerySlider from "./GallerySlider";
import { chefData } from "./data/ChefData";

function ChefPage() {
  const chefCard = chefData.map((data, i) => {
    return (
      <ChefCard
        key={i}
        url={data.url}
        city={data.city}
        title={data.title}
        year={data.year}
        description={data.description}
      />
    );
  });

  return (
    <div className="w-11/12  my-24 flex flex-col gap-8 items-center m-auto md:max-w-5xl">
      <h1 className="text-3xl leading-relaxed mt-24 md:max-w-3xl">
        Formé à l’art classique de la cuisine kaiseki, le chef Sakamoto décida
        de plonger dans le monde du ramen avec son dernier projet en date, le
        Chotto Motto.
      </h1>
      {chefCard}
      <GallerySlider />
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-8 items-center md:w-1/2 md:justify-evenly">
            {/* City */}
            <p className="text-lg">Hong Kong</p>
            {/* Title */}
            <p className="text-3xl">Un nouveau défi</p>
            {/* Year */}
            <p className="text-lg">2016</p>
          </div>
          <div className="md:w-1/2">
            {/* Description */}
            <p className="leading-loose whitespace-pre-line">
              Chef Sakamoto supplia la cheffe Fukui de partager ses techniques.
              Elle accepta de le prendre sous son aile à condition qu’il exporte
              l’art du ramen à l’étranger. Il confia cette proposition à sa
              famille et sa mère le poussa immédiatement à se rendre à Hong
              Kong.
              <br />
              <br />
              La semaine qui suivit, le chef Sakamoto se rendit à « Pearl City »
              et découvrit qu’il s’y sentait plus chez lui que partout ailleurs.
              Il sut alors qu’il pouvait marier les saveurs de l’umami et les
              parfums fumés de la cuisine cantonaise avec la richesse et les
              nuances du ramen. Il rentra à Tokyo pour se former auprès de la
              cheffe Fukui et, avec sa bénédiction, revint à Hong Kong sept ans
              plus tard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefPage;
