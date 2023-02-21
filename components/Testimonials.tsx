import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Testimonials are a great way to showcase the quality of our services
            and the satisfaction of our customers. We take pride in sharing the
            positive experiences of our clients to demonstrate our commitment to
            providing exceptional service and building lasting relationships.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Fantastic work, great attitude
              </h3>
              <p className="my-4">
                "I had Jared come give me a quote and then install a full
                security system in my home. He has done a fantastic job and I
                had a few little teething issues but he quickly had them sorted
                for me, I recommend Savvy Electrical and Data.
              </p>
              <p className="my-4">
                Thank you so much for your hard work Jared!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <FiUser className="w-6 h-6" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Karlene Cleeland</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p className="my-4">
                "Had Jared here today to install some fans and perform a few
                other jobs as well. He was quick and efficient and would
                recommend Jared to everyone.
              </p>
              <p className="my-4">
                If you need a sparky, give Jared a call. No job is too big or
                small."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <FiUser className="w-6 h-6" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Narelle Brown</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Great service, price and reliability
              </h3>
              <p className="my-4">
                "Very happy with the service, price and reliability Jared
                offers. Happy to recommend and will use his services again!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <FiUser className="w-6 h-6" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Amanda Walters</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Prompt and professional
              </h3>
              <p className="my-4">
                "Savvy Electrical and Data were very prompt and professional. I
                had a power outage at the farm and they were there within Half
                an hour. Our incoming cables were shorting out and they were
                very quick to fix it!
              </p>
              <p className="my-4">I would highly recommend them!"</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <FiUser className="w-6 h-6" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Ray Crooks</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
