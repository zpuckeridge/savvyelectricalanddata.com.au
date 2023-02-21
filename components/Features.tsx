import {
  FiBatteryCharging,
  FiLock,
  FiSliders,
  FiThermometer,
} from "react-icons/fi";

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We're here for your next project
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            At Savvy Electrical and Data, we take pride in offering a
            comprehensive range of features that ensure your electrical needs
            are met with precision and efficiency. Our certified electricians
            are equipped with the latest tools and technology to provide
            superior electrical services.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FiSliders className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Home Automation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We offer innovative home automation solutions that can make your
              life more comfortable, convenient, and energy-efficient. Our
              expert technicians can help you design and install a fully
              customized home automation system that meets your specific needs,
              from controlling your lighting and temperature to managing your
              security system and entertainment devices.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FiThermometer className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Air Conditioner Installation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We offer professional air conditioning installation services that
              are designed to keep your home or office comfortable all year
              round. Our team of skilled technicians is equipped with the
              expertise and knowledge needed to ensure a seamless installation
              process, with minimal disruption to your daily routine.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FiLock className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Security Cameras
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide top-notch security camera installation services that
              can help protect your property and give you peace of mind. Our
              experienced technicians can help you choose the right type of
              camera, design a customized system, and provide professional
              installation and setup to ensure reliable, high-quality security
              monitoring.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FiBatteryCharging className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Construction and Electrical Wiring
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide reliable construction and electrical wiring services
              for residential and commercial projects. Our experienced
              electricians work closely with contractors, architects, and
              project managers to ensure the electrical systems in your building
              are up to code, safe, and efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
