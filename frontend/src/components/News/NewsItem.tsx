const NewsItem = () => {
  return (
    <>
      <div className="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
        <div className="flex flex-col md:flex-row p-3  border-l-8 border-green-600">
          <div className="space-y-1 border-r-2 pr-3">
            <div className="text-sm leading-5 font-semibold">
              <span className="text-xs leading-4 font-normal text-gray-500">
                {" "}
                Release #
              </span>{" "}
              LTC08762304
            </div>
            <div className="text-sm leading-5 font-semibold">
              <span className="text-xs leading-4 font-normal text-gray-500 pr">
                {" "}
                BOL #
              </span>{" "}
              10937
            </div>
            <div className="text-sm leading-5 font-semibold">
              JUN 14. 9:30 PM
            </div>
          </div>
          <div className="flex-1 my-2 md:my-0">
            <div className="md:ml-3 space-y-1 border-r-2 pr-3">
              <div className="text-base leading-6 font-normal">
                KROGER MEMPHIS
              </div>
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  {" "}
                  Carrier
                </span>{" "}
                PAPER TRANSPORT INC.
              </div>
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  {" "}
                  Destination
                </span>{" "}
                WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218
              </div>
            </div>
          </div>
          <div className="border-r-2 pr-3">
            <div>
              <div className="md:ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                <div className="uppercase text-xs leading-4 font-medium">
                  Trailer
                </div>
                <div className="text-center text-sm leading-4 font-semibold text-gray-800">
                  89732
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="md:ml-3 my-2 md:my-5 bg-green-600 p-1 w-20">
              <div className="uppercase text-xs leading-4 font-semibold text-center text-green-100">
                Picked UP
              </div>
            </div>
          </div>
          <div>
            <button className="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
