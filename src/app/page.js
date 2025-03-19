"use client";
import "./home.css";
import { motion as m } from 'motion/react';
import PDFViewer from "./components/pdfViewer";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";





export default function Home() {
    const storagePrefix = process.env.BLOB_IMAGE_PREFIX;
    const images = []

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
                        <Image
                            src="https://xtbw2pvhfmxic82d.public.blob.vercel-storage.com/images/profile-pic.webp"
                            width={175}
                            height={175}
                            alt="profile-pic"
                        />
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
                        whileHover={{ background: "var(--background)" }}
                        onClick={() => handleShowResume()}
                    >
                        <p>My Resume</p>
                    </m.button>
                    {showResume && (
                        <PDFViewer
                            pdfUrl={`/GG_Resume.pdf`}
                            showPDF={showResume}
                            setShowPDF={setShowResume}
                        />
                    )}
                    <span className="home-content-inline">
                        <m.a
                            href="https://www.linkedin.com/in/ggolonka/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="linkedin-button"
                            whileHover={{ background: "var(--background)" }}
                        >
                            <FaLinkedin size={45} fill="var(--copy)" />
                        </m.a>
                        <m.a
                            href="mailto:gtgolonka91602@gmail.com"
                            className="gmail-button"
                            whileHover={{ background: "var(--background)" }}
                        >
                            <MdEmail size={45} fill="var(--copy)" />
                        </m.a>
                    </span>

                </div>
                <div className="home-photo-container">
                    <div className="home-photo-grid">
                        {images.map((image, index) => (
                            <Image
                                key={`home-image-${index}`}
                                alt={image}
                                src={`${storagePrefix}${image}`}
                                width={200}
                                height={200}
                                className="gallery-photo"
                            />

                        ))}
                    </div>
                </div>
            </m.div>
        </AnimatePresence >
    );
}
