import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-32">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Savvy Electrical and Data
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We are a <span className="font-bold">Brisbane based</span> electrical
          and data installation service provider prioritize achieving complete
          customer satisfaction by offering various services such as
          renovations, new builds, security cameras, home automation, and more.
          Our team is readily available to assist you in any project.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="tel:0421197325"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <FaPhoneAlt className="mr-2 -ml-1 w-5 h-5" />
            Give us a call!
          </a>
          <a
            href="mailto:savvyelectricalanddata@outlook.com.au"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <FaEnvelope className="mr-2 -ml-1 w-5 h-5" />
            Or send an email!
          </a>
        </div>
        <div>
          <p className="text-4xl my-20 text-center mx-auto font-bold">
            +61 421 197 325
            <br />
            <span className="text-sm">
              savvyelectricalanddata@outlook.com.au
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
