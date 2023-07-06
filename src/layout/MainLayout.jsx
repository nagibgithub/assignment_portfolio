import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";



const MainLayout = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div data-theme={theme} style={theme === 'dark' ? { color: '#60a5fa' } : { color: 'black' }} className="min-h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-fixed">
            <div>
                <NavBar></NavBar>
                <div className="mt-20">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;