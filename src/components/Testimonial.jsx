import React from "react";
import customer1 from "../assets/SARAH-HEADSHOT-2.jpg";
import customer2 from "../assets/tan2.jpg";
import customer3 from "../assets/farhana.jpg";

const Testimonial = () => {
  return (
    <section className="my-8 text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-bold leading-none text-center">
          What Our Customers Are Saying About Us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-10 bg-white sm:px-8 md:px-12">
            <p className="relative px-6 py-1 font-medium text-lg italic text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-500 inline-block"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              This service made it so easy to pay my bills online. Highly secure
              and reliable!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-violet-500 text-white">
            <img
              src={customer1}
              alt="Customer 1"
              className="w-16 h-16 mb-2 -mt-12 rounded-full bg-center bg-cover"
            />
            <p className="text-xl font-semibold leading-tight">Sarah Ahmed</p>
            <p className="text-sm uppercase">Student</p>
          </div>
        </div>

        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-10 bg-white sm:px-8 md:px-12">
            <p className="relative px-6 py-1 text-lg font-medium  italic text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-500 inline-block"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Excellent platform for quick transactions. I paid my electricity
              bill in seconds.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-violet-500 text-white">
            <img
              src={customer2}
              alt="Customer 2"
              className="w-16 h-16 mb-2 -mt-12 rounded-full bg-center bg-cover"
            />
            <p className="text-xl font-semibold leading-tight">
              Tanvir Hossain
            </p>
            <p className="text-sm uppercase">Entrepreneur</p>
          </div>
        </div>

        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-10 bg-white sm:px-8 md:px-12">
            <p className="relative px-6 py-1 text-lg font-medium  italic text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-500 inline-block"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Super easy to use, and the payment process is smooth and fast.
              Loved it!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-violet-500 text-white">
            <img
              src={customer3}
              alt="Customer 3"
              className="w-16 h-16 mb-2 -mt-12 rounded-full bg-center bg-cover"
            />
            <p className="text-xl font-semibold leading-tight">Farhana Karim</p>
            <p className="text-sm uppercase">Freelancer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
