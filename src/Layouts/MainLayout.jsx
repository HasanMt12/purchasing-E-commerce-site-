import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;