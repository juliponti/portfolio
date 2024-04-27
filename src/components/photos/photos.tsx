import useWindowDimensions from "../../hooks/use-window-dimensions";
import IMG_LEFT_1_MD from "/src/assets/about/galery/md/up.png";
import IMG_LEFT_1_SM from "/src/assets/about/galery/left-green.png";
import IMG_LEFT_2_MD from "/src/assets/about/galery/md/middle.png";
import IMG_LEFT_2_SM from "/src/assets/about/galery/sm/middle.png";
import IMG_LEFT_3_MD from "/src/assets/about/galery/md/down.png";
import IMG_LEFT_3_SM from "/src/assets/about/galery/right-green.png";

const myPhotos = [
  {
    src: {
      large: "/src/assets/about/galery/left-green.png",
      md: IMG_LEFT_1_MD,
      sm: IMG_LEFT_1_SM,
    },
    alt: "beige background with phrase",
  },
  {
    src: {
      large: "/src/assets/about/galery/middle-green.png",
      md: IMG_LEFT_2_MD,
      sm: IMG_LEFT_2_SM,
    },
    alt: "Beige to blue gradient with silhouettes",
  },
  {
    src: {
      large: "/src/assets/about/galery/right-green.png",
      md: IMG_LEFT_3_MD,
      sm: IMG_LEFT_3_SM,
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
