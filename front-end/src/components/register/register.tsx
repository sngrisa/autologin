import { Label } from "@radix-ui/react-label";
import "./register.scss";
import { Button } from "../ui/button";
import { FaEye, FaPencil } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Link } from "react-router";
import { SiAvast } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import Sweetalert2 from "@/shared/sweetAlert/sweetalert2";
import { useState } from "react";

const Register = () => {


  let [showConfirmAlert, setConfirmAlert] = useState<boolean>(false);


  const submitForm = (event: any) =>{
    event?.preventDefault();
    setConfirmAlert(true);
    return (<Sweetalert2 alertDetails={showConfirmAlert}/>);
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
            <h1 className="text-slate-900 text-center text-3xl font-semibold">Registrarse</h1>
            <form className="mt-12 space-y-6" onSubmit={submitForm}>
              <div>
                <Label className="text-slate-900 text-sm font-bold mb-2 block">Email</Label>
                <div className="relative flex items-center">
                  <Input name="username" type="text" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                  <span className="w-4 h-4 absolute right-4 text-slate-400"><MdAttachEmail /></span>
                </div>
              </div>
              <div>
                <Label className="text-slate-900 text-sm font-bold mb-2 block">Contraseña</Label>
                <div className="relative flex items-center">
                  <Input name="password" type="password" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                  <span className="w-4 h-4 absolute right-4 text-slate-400"><FaEye /></span>
                </div>
              </div>
              <div className="flex items-center">
                <Input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <Label htmlFor="remember-me" className="text-slate-600 ml-3 block text-sm">
                  Acepto los<a href="javascript:void(0);" className="text-blue-600 font-medium hover:underline ml-1">términos y condiciones de uso</a>
                </Label>
              </div>

              <div className="mt-12">
                <Button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-bolder rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                  <span><FaPencil /></span>Crear cuenta
                </Button>
              </div>
              <p className="text-slate-600 text-sm mt-6 text-center">Tenés cuenta?
                <Link to={"/"} className="text-blue-600 hover:underline ml-1 font-bold">
                  Iniciar Sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;