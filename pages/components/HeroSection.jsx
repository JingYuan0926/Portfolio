import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {

    return (
        <main className="py-16 mt-16 md:flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-8xl">
                            Hello, I'm{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-10xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                               Jing Yuan
                            </span>
                        </span>
                        <span className="text-7xl">
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(`<span style="color:#FF77FF">Web Developer</span>`)
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString(`<span style="color:#9E7BFF">Crypto Trader</span>`)
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start()
                                }}
                            ></TypeWritter>
                        </span>
                        <p className="text-sky-100 mt-8 text-base sm:text-lg md:text-xl mb-6">Slide down to know more about me</p>
                        <Link href="https://drive.google.com/file/d/1ajOJwhrua1lElHtbVjzOv12ySXn8xPBa/view" className="px-6 inline-block py-3 rounded-full border-solid-2 border-pink-500 hover:bg-pink-400">
                            View My Resume
                        </Link>
                    </h1>
                </motion.div>
            </div>
        </main>
    );
};

export default HeroSection;