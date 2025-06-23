import { Label } from "@radix-ui/react-label";
import { Link } from "react-router";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoSend } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { SiAvast } from "react-icons/si";
import { IoIosSkipBackward } from "react-icons/io";

const RecoverPassword = () => {

  let submitForm = () => {

  }

  return (
    <div className="bg-black">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-[480px] w-full">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <section className="w-full flex justify-center mb-10">
              <Link to={"/"} className=" text-black text-center">
                <h1 className="flex items-center uppercase font-bold text-5xl text-orange-300"><span className="mr-1"><SiAvast /></span></h1>
              </Link>
            </section>
            <h1 className="text-slate-900 text-center text-3xl font-semibold">Recuperar Contraseña</h1>
            <form className="mt-12 space-y-6" onSubmit={submitForm}>
              <div>
                <Label className="text-slate-900 text-sm font-bold mb-2 block">Email</Label>
                <div className="relative flex items-center">
                  <Input name="username" type="text" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Ingrese su email" />
                  <span className="w-4 h-4 absolute right-4 text-slate-400"><MdAttachEmail /></span>
                </div>
              </div>

              <div className="mt-12">
                <Button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-bolder rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                  <span><IoSend /></span>Enviar email
                </Button>
              </div>
              <div className="text-slate-600 text-sm mt-6 w-full flex justify-center">
                <Link to={"/"} className="text-blue-600 hover:text-blue-400 ml-1 font-bold flex items-center" style={{textDecoration:'none'}}>
                  <span><IoIosSkipBackward /></span>Volver al Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword;