import Image from "next/image";

interface table {
  index: number;
  name: string;
  price: number;
  change: number;
  cap: number;
  action: string;
  imgSrc: string;
}

const tableData: table[] = [
  {
    index: 1,
    name: "Website Creation(Jasa Category)",
    imgSrc: "/images/Table/web.png",
    price: 1500000,
    change: -25,
    cap: 1125000,
    action: "Order now",
  },
  {
    index: 2,
    name: "Source Code(Project Category)",
    imgSrc: "/images/Table/code.png",
    price: 499000,
    change: -20,
    cap: 399200,
    action: "Order now",
  },
  {
    index: 3,
    name: "Social Media Injection(PPOB&SMM Category)",
    imgSrc: "/images/Table/sosialmedia.png",
    price: 150000,
    change: -10,
    cap: 135000,
    action: "Sold Out",
  },
  {
    index: 4,
    name: "Logo design(Graphic design)",
    imgSrc: "/images/Table/logo.png",
    price: 99000,
    change: -5,
    cap: 94050,
    action: "Order now",
  },
];

const Table = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-40 px-6" id="exchange-section">
        <div className="table-b bg-navyblue p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">Promo Category Package</h3>
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="px-4 py-4 font-normal">#</th>
                <th className="px-4 py-4 text-start font-normal">
                  NAME PRODUCT
                </th>
                <th className="px-4 py-4 font-normal">ORIGINAL PRICE</th>
                <th className="px-4 py-4 font-normal">PROMO</th>
                <th className="px-4 py-4 font-normal">CURRENT PRICE</th>
                <th className="px-4 py-4 font-normal">STOK</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((items, i) => (
                <tr key={i} className="border-b border-b-darkblue">
                  <td className="px-4 py-6 text-center text-white">
                    {items.index}
                  </td>
                  <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 ">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      height={50}
                      width={50}
                    />
                    {items.name}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    IDR {items.price.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-6 text-center ${
                      items.change < 0 ? "text-red" : "text-green"
                    } `}
                  >
                    {items.change}%
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    IDR {items.cap.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-6 text-center ${
                      items.action === "Order now" ? "text-green" : "text-red"
                    }`}
                  >
                    {items.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Image
        src={"/images/Table/Untitled.svg"}
        alt="ellipse"
        width={2460}
        height={102}
        className="md:mb-40 md:-mt-6"
      />
    </>
  );
};

export default Table;
