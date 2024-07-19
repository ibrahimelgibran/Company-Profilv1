import Image from "next/image";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Secure storage",
    subheading: "We lake data security and privacy very seriously.",
  },
  {
    imgSrc: "/images/Features/mudah.svg",
    heading: "Easy to use",
    subheading: "Easy to use and responsive features.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Real-time price data",
    subheading: "Updates 24/7 using price data from product promotions.",
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative"
      id="features-section"
    >
      <div className="radial-bg hidden lg:block"></div>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        {/* Column-1 */}
        <div>
          <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">
            FEATURES
          </h3>
          <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
            Why Should IEGCODE
          </h2>
          <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
            The Iegcode platform has several new additional features such as AI
            chat, free game play and Alisan fee donations. <br /> Additionally,
            it also provides necessary services such as customer history, custom
            profiles, and more importantly, data security.
          </p>
        </div>
        {/* Column-2 */}
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
            {featuresdata.map((items, i) => (
              <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={24}
                    height={30}
                  />
                </div>
                <h5 className="text-offwhite text-lg font-medium mb-4">
                  {items.heading}
                </h5>
                <p className="text-lightblue text-sm font-normal">
                  {items.subheading}
                </p>
              </div>
            ))}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
