import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import "./login.scss";
import { IoLogInSharp } from "react-icons/io5";
import { Link } from "react-router";
import { MdAttachEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { SiAvast } from "react-icons/si";

const Login = () => {
    return (
        <>
            <div className="bg-black">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-[480px] w-full">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <section className="w-full flex justify-center mb-10">
                                <Link to={"/"} className=" text-black text-center">
                                    <h1 className="flex items-center uppercase font-bold text-5xl text-orange-300"><span className="mr-1"><SiAvast /></span></h1>
                                </Link>
                            </section>
                            
                            <h1 className="text-slate-900 text-center text-3xl font-semibold">Iniciar Sesion</h1>
                            <form className="mt-12 space-y-6">
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
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <Input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                                        <Label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                                            Recordarme
                                        </Label>
                                    </div>
                                    <div className="text-sm">
                                        <Link to={"/recoverpassword"} className="text-blue-600 hover:underline font-semibold">
                                            Olvidaste tu contraseña?
                                        </Link>
                                    </div>
                                </div>

                                <div className="!mt-12">
                                    <Button type="button" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                        <span className="mr-1 text-4xl"><IoLogInSharp /></span>Iniciar Sesion
                                    </Button>
                                </div>
                                <p className="text-slate-900 text-sm !mt-6 text-center">No tenés cuenta?
                                    <Link to={"/register"} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                                        Registrarse
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;