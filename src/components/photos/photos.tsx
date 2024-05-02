import useWindowDimensions from "../../hooks/use-window-dimensions";
import IMG_01_SM from "/src/assets/about/galery/left-green.png";
import IMG_01_MD from "/src/assets/about/galery/md/up.png";
import IMG_01_XL from "/src/assets/about/galery/left-green.png";

import IMG_02_SM from "/src/assets/about/galery/sm/middle.png";
import IMG_02_MD from "/src/assets/about/galery/md/middle.png";
import IMG_02_XL from "/src/assets/about/galery/middle-green.png";

import IMG_03_SM from "/src/assets/about/galery/right-green.png";
import IMG_03_MD from "/src/assets/about/galery/md/down.png";
import IMG_03_XL from "/src/assets/about/galery/right-green.png";
import useImagePreloader from "../../hooks/use-image-preloader";

import { v4 as uuid } from "uuid";

const preloadSrcList = [
  IMG_01_SM,
  IMG_01_MD,
  IMG_01_XL,
  IMG_02_SM,
  IMG_02_MD,
  IMG_02_XL,
  IMG_03_SM,
  IMG_03_MD,
  IMG_03_XL,
];

export default function Photos() {
  const { width } = useWindowDimensions();
  useImagePreloader(preloadSrcList);

  const myPhotos = [
    {
      src: {
        large: IMG_01_SM,
        md: IMG_01_MD,
        sm: IMG_01_XL,
      },
      alt: "beige background with phrase",
      id: uuid(),
    },
    {
      src: {
        large: IMG_02_XL,
        md: IMG_02_MD,
        sm: IMG_02_SM,
      },
      alt: "Beige to green gradient with silhouettes",
      id: uuid(),
    },
    {
      src: {
        large: IMG_03_XL,
        md: IMG_03_MD,
        sm: IMG_03_SM,
      },
      alt: "green background with phrase",
      id: uuid(),
    },
  ];

  return (
    <section className="pb-14">
      <div className="wrapper">
        <ul className="grid grid-cols-1 place-items-center  lg:grid-cols-[0.9fr_3fr_0.9fr] gap-1">
          {myPhotos.map(({ src, alt, id }) => (
            <li key={id}>
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
