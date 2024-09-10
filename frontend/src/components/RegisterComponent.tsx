import { register, selectUserStatus } from "@/features/auth/authSlice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterComponent = () => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(selectUserStatus)
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  

  const handleLogin = async ()=>{
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    // dispatch(register({name, email, password}));
    dispatch(register({name, email, password}))
    
    if(status=="fullfilled") navigate("/login");
  }

  return (
    <div>
      <div className="relative grid bg-black">
        <div className="flex flex-col-reverse sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
          <div className="sm:w-1/2 xl:w-3/5 bg-transparent h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative">
            <img className="h-96" src="login.svg" />
          </div>

          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className="shadow-inner shadow-yellow-600 bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <div
                      className="flex flex-col space-y-4 mt-10"
                      onSubmit={() => {}}
                    >
                      <label className="font-bold text-lg text-white">
                        Name
                      </label>
                      <input
                        ref={nameRef}
                        type="name"
                        placeholder="Name"
                        className="border rounded-3xl focus:outline-none flex align-middle justify-center  py-2 px-3 mt-4 bg-black border-yellow-600 placeholder-white text-white"
                      />
                      <label className="font-bold text-lg text-white">
                        Email
                      </label>
                      <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        className="border rounded-3xl focus:outline-none flex align-middle justify-center  py-2 px-3 mt-4 bg-black border-yellow-600 placeholder-white text-white"
                      />
                      <label className="font-bold text-lg text-white">
                        Password
                      </label>
                      <input
                        ref={passwordRef}
                        type="password"
                        placeholder="********"
                        className="border rounded-3xl flex focus:outline-none align-middle justify-center py-2 px-3 bg-black border-yellow-600 placeholder-white text-white"
                      />
                      <button
                        onClick={handleLogin}
                        className="border border-yellow-600 hover:bg-yellow-600  bg-black text-white rounded-3xl py-2 font-semibold"
                      >
                        Register
                      </button>

                      <Link to="/login" className="text-yellow-600 text-sm text-center underline hover:cursor-pointer">
                        Login
                      </Link>
                    </div>
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

export default RegisterComponent;
