import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem 1fr] grid-rows-[auto 1fr]">
      <main className=" bg-gray-50 p-[4rem 4.8rem 6.4rem] overflow-scroll">
        <div className="max-w-[120rem] m-[0 auto] flex flex-col gap-[3.2rem]">
          <Header />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
