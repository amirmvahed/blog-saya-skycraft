import Footer from "@/components/Footer";
import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import React from "react";

const outfit = Outfit({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Blog App",
    description: "A blog post for saya skycraft",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
