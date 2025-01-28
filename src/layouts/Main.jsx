import { Outlet, ScrollRestoration } from "react-router-dom";
import ContainerX from "../components/shared/ContainerX";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <>
            <header>
                <ContainerX>
                    <Navbar />
                </ContainerX>
            </header>
            <main>
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