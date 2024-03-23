const myPhotos = [
  {
    src: "/src/assets/about/galery/viewpoint.jpg",
    alt: "Viewpoint at Playa del Carmen, City of México",
  },
  {
    src: "/src/assets/about/galery/palmtrees.jpg",
    alt: "Palms trees looked from down at Playa del Carmen, City of Mexico",
  },
  {
    src: "/src/assets/about/galery/turtles.jpg",
    alt: "Sea turtles in a tank in XCARET theme park in Playa del Carmen, City of Mexico",
  },
];

export default function Photos() {
  return (
    <section className="pb-14 ">
      <div className="wrapper">
        <ul className="grid grid-cols-[1.3fr_2.3fr_1.3fr] gap-5">
          {myPhotos.map(({ src, alt }) => (
            <li>
              <img className="max-w-full h-auto block" src={src} alt={alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
