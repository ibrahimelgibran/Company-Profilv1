import Image from "next/image";

const Trade = () => {
  return (
    <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
      <div className="radial-bgone hidden lg:block"></div>

      <div className="grid lg:grid-cols-2 gap-x-5">
        {/* Colummn-1 */}
        <div>
          <Image
            src={"/images/Logo/demo.svg"}
            alt="macBook-image"
            width={787}
            height={512}
          />
        </div>

        {/* Column-2 */}

        <div>
          <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">
            Software House & <br />
            E-Commerce IEGCODE
          </h3>
          <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
            This is IEGCODE? Software house and E-Commerce platform that
            provides the services you need 🛒.
          </p>

          <div className="justify-center mb-20">
            <a href="https://iegcode.com">
              <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton">
                Click Here →
              </button>
            </a>
          </div>

          <div className="flex justify-between">
            <Image
              src={"/images/Trade/mac.svg"}
              alt="macOS-image"
              width={61}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={"/images/Trade/appstore.svg"}
              alt="appstore-image"
              width={80}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={"/images/Trade/windows.svg"}
              alt="windows-image"
              width={80}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={"/images/Trade/android.svg"}
              alt="android-image"
              width={71}
              height={105}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
