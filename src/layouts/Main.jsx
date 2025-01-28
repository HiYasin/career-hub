import { Outlet, ScrollRestoration } from "react-router-dom";
import ContainerX from "../components/shared/ContainerX";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <>
            <header className="px-2 fixed z-50 left-0 top-1 right-0">
                <ContainerX>
                    <Navbar />
                </ContainerX>
            </header>
            <main className="mt-20 mb-10 mx-2">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer />
            </footer>
            <ScrollRestoration />
        </>
    );
};

export default Main;