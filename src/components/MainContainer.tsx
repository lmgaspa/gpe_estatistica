import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


interface MainContainerProps {
    children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainContainer;