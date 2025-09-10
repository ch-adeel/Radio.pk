import React from "react";

const HeroSection = () => {
  return (
    <section className="py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
          <div className="w-full sm:flex-1">
            <img
              src="http://pf.radio.gov.pk/20240401/2038106541.jpg"
              alt=""
              className="w-full h-44 object-cover rounded"
            />
          </div>

          <div className="flex flex-row sm:flex-1 space-x-2">
            <div className="flex-1">
              <img
                src="http://pf.radio.gov.pk/20240401/1297584765.jpg"
                alt=""
                className="w-full h-44 object-cover rounded"
              />
            </div>

            <div className="w-28">
              <img
                src="http://pf.radio.gov.pk/20241223/2117304967.png"
                alt=""
                className="w-full h-44 object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 py-2">
        <div className="lg:col-span-2 ">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="//newsimage.radio.gov.pk/20250910/16895579061757474300.jpg"
              alt="Kazakhstan's DPM arrives in Islamabad"
              className="w-full h-full object-center"
              referrerPolicy="no-referrer"
            />

            <div className="absolute bottom-0 left-0 w-full sm:w-2/3 bg-black bg-opacity-50 p-2 sm:p-4">
              <h3 className="text-sm sm:text-lg md:text-xl text-white font-bold leading-snug">
                Pakistan condemns Israeli aggression against Qatar
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-80">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="//newsimage.radio.gov.pk/20250910/8749529501757507414.jpg"
              alt="PM directs NDMA"
              className="w-full h-full object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug">
                Govt decides to enforce climate emergencies
              </h4>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="//newsimage.radio.gov.pk/20250910/8885369091757482931.jpg"
              alt="President confers Nishan-e-Imtiaz"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug">
                Pakistan urges UNSC to revitalize UN Peacekeeping
              </h4>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="//newsimage.radio.gov.pk/20250910/6654567091757494047.jpg"
              alt="Aurangzeb vows to maintain macroeconomic stability"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug">
                Aurangzeb vows to maintain macroeconomic stability
              </h4>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="//newsimage.radio.gov.pk/20250910/7244323261757483286.jpg"
              alt="Pak Navy Day"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug">
                Pakistan Navy's relief operation continues in flood-hit areas
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
