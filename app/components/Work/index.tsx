"use client";
import Image from "next/image";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Create Account",
    subheading:
      "Before checking your order, first create a new account provided and complete the specified form.",
    hiddenpara:
      "Next, if you already have an account, you can log in and continue ordering the order you want to check out.",
  },
  {
    imgSrc: "/images/Work/bag.png",
    heading: "Shopping",
    subheading:
      "The products we offer range from Website Creation services, Source Code, UI/UX services, logo design, Thrift, Social media injection and many others.",
    hiddenpara:
      "Apart from that, you can also ask to have a website created according to your wishes.",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Order Payment",
    subheading:
      "After placing an order, you can continue filling in the data on the specified form so that the data can be confirmed as correct. After filling in the data.",
    hiddenpara:
      "Next, you can proceed to the transaction manual which contains the steps for recording payments. then send screenshot proof after 'Pay for Order'.",
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            How it work
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            The following are the steps for the ordering process and ordering
            transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {workdata.map((items, i) => (
            <div className="card-b p-8" key={i}>
              <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <Image
                  src={"/images/Work/bg-arrow.svg"}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>
              <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                {items.heading}
              </h3>
              <p className="text-base font-normal text-bluish text-center mt-2">
                {items.subheading}
              </p>
              <span className="text-base font-normal m-0 text-bluish text-center hides">
                {items.hiddenpara}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
