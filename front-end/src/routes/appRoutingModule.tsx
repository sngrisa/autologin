import { Route, Routes } from "react-router";
import Login from "../components/login/login";
import Register from "../components/register/register";
import RecoverPassword from "@/components/recoverPassword/recoverPassword";

const AppRoutingModule = () => {
  return (
    <Routes>
      <Route index Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/recoverpassword" Component={RecoverPassword} />
    </Routes>
  )
}

export default AppRoutingModule;