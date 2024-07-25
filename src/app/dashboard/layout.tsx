import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";


export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <>
      <div className="flex">
        <div className="sideBar w-1/5 h-screen" style={{ backgroundColor: "#283342" }}>
          <SideBar />
        </div>
        <div className="main w-4/5 flex-col">
          <div className="navbar bg-white">
            <Navbar />
          </div>
          <div className="navbar bg-slate-100">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
