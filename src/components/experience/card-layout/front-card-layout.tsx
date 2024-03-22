interface FrontCardLayoutProps {
  imgHref: string;
  img: JSX.Element;
  children: JSX.Element;
  title: string;
  tooltip?: string;
}

export default function FrontCardLayout({
  imgHref,
  img,
  children,
  title,
  tooltip = title,
}: FrontCardLayoutProps) {
  return (
    <>
      <div className="bg-gray-100 w-ful p-5 flex justify-center items-center h-[168px]">
        <a className="sepia transition-all hover:sepia-0" href={imgHref}>
          {img}
        </a>
      </div>
      <h4
        className="tracking-wider text-center pt-5 pb-3 capitalize text-2xl"
        title={tooltip}
      >
        {title}
      </h4>
      {children}
    </>
  );
}
