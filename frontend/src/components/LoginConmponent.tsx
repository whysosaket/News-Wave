const LoginComponent = () => {
  return (
    <div>
      <div className="relative grid bg-black">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
          <div className="sm:w-1/2 xl:w-3/5 bg-transparent h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative">
            <img className="h-96" src="login.svg" />
          </div>

          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <form
                      className="flex flex-col space-y-8 mt-10"
                      onSubmit={() => {}}
                    >
                      <label className="font-bold text-lg text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white text-white"
                      />
                      <label className="font-bold text-lg text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="****"
                        className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white text-white"
                      />
                      <button
                        type="submit"
                        className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
