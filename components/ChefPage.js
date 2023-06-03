import ChefCard from "./ChefCard";
import GallerySlider from "./GallerySlider";

function ChefPage() {
  return (
      <div className="w-11/12  mt-24 flex flex-col gap-8 items-center m-auto md:max-w-5xl">
        <h1 className="text-3xl">
          Formé à l’art classique de la cuisine kaiseki, le chef Sakamoto décida
          de plonger dans le monde du ramen avec son dernier projet en date, le
          Chotto Motto.
        </h1>
        <ChefCard />
        <ChefCard />
        <GallerySlider />
        <ChefCard />
        <ChefCard />
      </div>
  );
}

export default ChefPage;
