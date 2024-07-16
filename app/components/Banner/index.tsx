"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="ELU66v5k-RI"
        onClose={() => setOpen(false)}
      />

      <div className="-mt-20 mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
            <div className="arrowTwo"></div>
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                Company Profile <br /> IEGCODE
              </h1>
              <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center">
                Platform e-commerce website for your business who provides{" "}
                <br /> services your need. there are some type very
                <br /> product e-commerce 🛒.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <a href="https://iegcode.my.id/register">
                  <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6">
                    Sign Up →
                  </button>
                </a>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-transparent flex justify-center items-center text-white"
                >
                  <Image
                    src={"/images/Banner/playbutton.svg"}
                    alt="button-image"
                    className="mr-3"
                    width={47}
                    height={47}
                  />
                  Ordering Tutorial
                </button>
              </div>
            </div>

            <div className="col-span-5 lg:-m-48">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <Image
                src="/images/Banner/bg4.png"
                alt="nothing"
                width={1013}
                height={760}
              />
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
