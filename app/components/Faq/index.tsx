"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "1. What is there a guarantee when purchasing the product?",
    subheading:
      "Yes, that's right, there is definitely a guarantee if there is a problem with the product.",
  },
  {
    heading: "2. How to create a website in iegcode?",
    subheading:
      "Chat first with the admin to create a website. We provide website creation services at competitive prices and with professional and of course experienced service. the conditions are as follows: 1. WEBAPPS based application? 2. Fees start from 1,500,000, can be more expensive depending on the difficulty of the application being made. 3. Application creation begins after payment of a down payment of 10% of the agreed fee. 4. Consultations can be done directly with admin chat via DM or Platform Contact. 5. Mutually agreed costs include application specifications or order queues.",
  },
  {
    heading: "3. Do you get notes when purchasing products?",
    subheading:
      "Of course, there is a digital transaction recording feature in the invoice history which can then be seen on your order ID dashboard.",
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Frequently Asked And Question
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        Below are answers to frequently asked and questions.
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="mt-32">
            <Image
              src={"/images/Faq/faq.svg"}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
