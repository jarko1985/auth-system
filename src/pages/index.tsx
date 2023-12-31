import { NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { SiUdemy } from "react-icons/si";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Home() {
  const text1: string =
    "This is a full build that covers the full authentification process from login, Register, sending emails (for activating acount,reset password and password change notice), forgot password, reset password,advanced form validation,protected routes, session manipulation...";
  const text2: string =
    "In this build we used React js, Next js, Mongodb, Mongoose, Typecript, Next auth,React-hook-form, Zod,Axios, Nodemailer, Smtp service, Gmail stmp, Axios, React-toastify, Zxcvbn, Handlebars, BcryptJs...";
  const { data: session } = useSession();
  return (
    <>
      <div className="home bg-black text-white min-h-screen flex items-center justify-center">
        <div className="mx-auto">
          <div className="border border-white relative flex flex-col w-full rounded-lg">
            <div className="flex flex-wrap justify-center items-center flex-col">
              <div className="w-full text-right">
                <div className="py-6 px-3 text-center">
                  <button
                    onClick={() => signOut()}
                    className="bg-blue-500 hover:bg-blue-700 text-md uppercase font-bold px-8 py-2 rounded-md sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src={session?.user?.image!}
                  alt={`${session?.user?.name} image`}
                  className="rouned-full w-40 h-40"
                />
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold mb-2">
                  {session?.user?.name}
                </h3>
                <div className="text-sm mb-2 font-bold">
                  {session?.user?.email}
                </div>
                <div className="mb-2 mt-10">
                  You are logged in using &nbsp;
                  <span className="capitalize bg-blue-400 text-white px-4 py-1 ml-2 font-bold italic text-lg rounded-md">
                    {session?.user?.provider}
                  </span>
                </div>
              </div>

              <div className="mt-10 py-10 border-t text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <p className="mb-4 text-sm">{text1}</p>
                    <p className="font-bold text-xs">{text2}</p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      Source Code from Here: &nbsp;
                      <a
                        href="https://github.com/jarko1985/auth-system"
                        target="blank"
                        rel="noopener noreferrer"
                        className="text-4xl"
                      >
                        <AiFillGithub />
                      </a>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 pt-6 text-3xl">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition ease-in-out"
                      >
                        <AiFillGithub />
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="hover:scale-125 transition ease-in-out"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="hover:scale-125 transition ease-in-out"
                      >
                        <FaYoutube />
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="hover:scale-125 transition ease-in-out"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="hover:scale-125 transition ease-in-out"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="hover:scale-125 transition ease-in-out"
                      >
                        <SiUdemy />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
