import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Links",
    link: ["Home", "Promo Live", "Features", "FAQ", "Contact"],
  },
];

const socialLinks: Social[] = [
  {
    imgsrc: "/images/Footer/insta.svg",
    href: "https://www.instagram.com/iegcode",
  },
  {
    imgsrc: "/images/Footer/youtube.svg",
    href: "https://www.youtube.com/@iegcode",
  },
];

const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-6">
            <img
              className="block h-12 w-21px mb-4 -ml-4"
              src={"/images/Logo/iegcode.png"}
              alt="Crypto-Logo"
            />
            <h3 className="text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16">
              {" "}
              Platform for home software and an e-commerce website <br /> for
              your business that caters to your needs 🛒.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-offwhite  text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/number.svg"}
                alt="number-icon"
                width={20}
                height={20}
              />
              (+62) 858-7607-6005
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
              />
              iegcodeid@gmail.com
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/address.svg"}
                alt="address-icon"
                width={20}
                height={20}
              />
              Sleman, Yogyakarta 55581
            </h4>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-offwhite">
          made with 💙
          <Link href="https://iegcode.my.id/" target="_blank">
            {" "}
            iegcode
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default footer;
