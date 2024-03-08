'use client'
import React from "react";
import Image from "next/image";
import Card from "../Components/Card";
import { libreBaskerville } from "../Components/fonts";
import styles from "@/Home.module.css";
import { motion } from "framer-motion";
import { SectionProps } from "@/lib/definitions";

const variant = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            ease: "easeInOut",
            delayChildren: 0.2
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
}

const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
}

function Section({
    text,
    title,
    body,
    image,
    alt,
    icon,
    iconTwo,
    altTwo,
    altThree,
    bodyTwo,
    bodyThree = '',
    imageTop = '',
    altThreeTop = ''
}: SectionProps) {
    return (
        <section className="flex flex-shrink mt-[100px] mb-[100px] h-screen max-w-[960px] mx-auto">
            <motion.article initial="hidden" whileInView="visible" variants={variant} className="block text-start w-[410px]">
                <motion.p
                    variants={item}
                    className="text-base text-[#cbb26a]">{text}</motion.p>
                <motion.h2
                    variants={item}
                    className="pt-8 pb-8 text-[42px] leading-[1.1] text-[#ffffffcc] w-full">
                    {title}
                </motion.h2>
                <motion.h4
                    variants={item}
                    className={`text-base w-full text-[#ffffff99] ${libreBaskerville.className}`}
                >
                    {body}
                </motion.h4>

                <div className="grid">
                    <Card
                        sect="grid-item"
                        img="icon"
                        p="body"
                        icon={icon}
                        alt={alt}
                        body={bodyTwo}
                    />
                    <Card
                        sect="grid-item"
                        img="icon"
                        p="body"
                        icon={iconTwo}
                        alt={altTwo}
                        body={bodyThree}
                    />
                </div>
            </motion.article>
            <div className="flex flex-shrink ml-[80px] w-[510px] h-[600px]">
                <div className={styles.image}>
                    <Image
                        className="rounded-[32px] w-[230x] h-[280px]"
                        src={image}
                        alt={altThree}
                        width={230}
                        height={300}
                    />
                </div>
                <div className={styles.imageDos}>
                    <Image
                        className="rounded-[32px] w-[230x] h-[280px]"
                        src={imageTop}
                        alt={altThreeTop}
                        width={230}
                        height={300}
                    />
                </div>

            </div>
        </section>
    );
}

export default Section;
