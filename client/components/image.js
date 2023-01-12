import { urlFor } from "../sanity";

const Image = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "w-1/2 overflow-hidden max-h-96 pt-1" : "w-1/2 max-h-28 object-fill border-spacing-10 border-x-2 border-y-4 border-inherit"}>
      <img src={urlFor(image).auto("format")} />
    </div>
  );
};

export default Image;
