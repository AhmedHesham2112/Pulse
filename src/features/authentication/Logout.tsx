import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isPending } = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <button disabled={isPending} onClick={handleLogout}>
      {!isPending ? <HiArrowRightOnRectangle /> : "Logging out..."}
    </button>
  );
}

export default Logout;
