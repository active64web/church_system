import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import { useState } from "react";

const Layout = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div className="layout">
            <main>
                <SidebarComponent openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
                <div className="page">
                    <Header setOpenSideBar={setOpenSideBar} />
                    <div className="outlet">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Layout;