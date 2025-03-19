"use client";
import "./home.css";
import { motion as m } from 'motion/react';
import PDFViewer from "./components/pdfViewer";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Marquee from "react-fast-marquee";
import Image from "next/image";


export default function Home() {
    // Javacript code goes here

    const [showResume, setShowResume] = useState(false); // Show Project Popup
    const handleShowResume = () => {
        setShowResume(true)
    }


    return (
        <AnimatePresence mode="popLayout">
            <m.div
                key="home-page-key"
                className="page"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* <h1>Gregory Golonka</h1> */}
                <div className="home-header">
                    <div className="home-header-child">
                        <img src="/profile-pic.jpg"
                            width={200}></img>
                    </div>
                    <div className="home-header-child">
                        <p>
                            Hi there! My name is Gregory, and I am an aspiring aerospace engineer currently studying at the University of Notre Dame.
                            My passion lies in solving complex engineering problems, from aerodynamics
                            to propulsion systems, and I have hands-on experience in both research and design.
                        </p>
                    </div>
                </div>
                <div className="home-content">
                    <m.button
                        key="resume-button-key"
                        className="resume-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleShowResume()}
                    >
                        <p>View Resume</p>
                    </m.button>
                    {showResume && (
                        <PDFViewer
                            pdfUrl={`/GG_Resume.pdf`}
                            showPDF={showResume}
                            setShowPDF={setShowResume}
                        />
                    )}
                    <a href="https://www.linkedin.com/in/ggolonka/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                        <img src="linkedin.png" className="linkedin-pic"></img> {/* TODO: USE React Icons Or another Icon Library to reduce build size */}
                    </a>
                    <a href="mailto:gtgolonka91602@gmail.com" className="gmail-button">
                        <img src="gmail.png" className="gmail-pic"></img> {/* Same As Above!! */}
                    </a>

                </div>
                <div className="home-photo-container">
                    <div className="home-photo-grid">
                        {/*Changed to next Image for optimzed loading... going to migrate all images to blob storage */}
                        <Image alt="abroud" src="/abroad.jpg" width={200} height={200} className="gallery-photo" />
                        <Image alt="dol2" src="/dol2.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="cin" src="/cin.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="dol" src="/dol.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="aca" src="/aca.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="game" src="/game.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="game2" src="/game2.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="eng" src="/eng.png" width={200} height={200} className="gallery-photo" />
                        <Image alt="pal" src="/pal.png" width={200} height={200} className="gallery-photo" />
                    </div>
                </div>
            </m.div>
        </AnimatePresence >
    );
}
