import useWindowDimensions from "../../hooks/use-window-dimensions";

const myPhotos = [
  {
    src: {
      large: "/src/assets/about/galery/left-green.png",
      md: "/src/assets/about/galery/md/up.png",
      sm: "/src/assets/about/galery/left-green.png",
    },
    alt: "beige background with phrase",
  },
  {
    src: {
      large: "/src/assets/about/galery/middle-green.png",
      md: "/src/assets/about/galery/md/middle.png",
      sm: "/src/assets/about/galery/sm/middle.png",
    },
    alt: "Beige to blue gradient with silhouettes",
  },
  {
    src: {
      large: "/src/assets/about/galery/right-green.png",
      md: "/src/assets/about/galery/md/down.png",
      sm: "/src/assets/about/galery/right-green.png",
    },
    alt: "blue background with phrase",
  },
];

export default function Photos() {
  const { width } = useWindowDimensions();
  return (
    <section className="pb-14">
      <div className="wrapper">
        <ul className="grid grid-cols-1 place-items-center  lg:grid-cols-[0.9fr_3fr_0.9fr] gap-1">
          {myPhotos.map(({ src, alt }) => (
            <li>
              <img
                className="max-w-full h-auto block"
                src={width <= 423 ? src.sm : width < 1024 ? src.md : src.large}
                alt={alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
