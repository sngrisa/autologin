import { useEffect } from "react";
import Swal from "sweetalert2";

const sweetAlertOk = (): void => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Cuenta creada con éxito",
    showConfirmButton: false,
    timer: 1500
  });
};

const sweetAlertError = (): void => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Ocurrió un error durante el registro",
    showConfirmButton: true,
    timer: 1500
  });
};

const Sweetalert2 = ({ alertDetails }: { alertDetails: boolean | null }) => {
  useEffect(() => {
    if (alertDetails === true) sweetAlertOk();
    else if (alertDetails === false) sweetAlertError();
  }, [alertDetails]);

  return null; // No renderiza nada visual
};

export default Sweetalert2;
