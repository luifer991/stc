import Image from "next/image";
import Button from "../Components/Button";
import Card from "../Components/Card";
import { libreBaskerville } from "../Components/fonts";
import styles from "@/Home.module.css";
import Link from "next/link";

export type SectionProps = {
    text: string;
    title: string;
    body: string;
    alt: string;
    icon: string;
    image: string;
    iconTwo: string;
    altTwo: string;
    altThree: string;
    bodyTwo: string;
    bodyThree: string;
    imageTop: string;
    altThreeTop: string;
};

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
            <article className="block text-start w-[410px]">
                <p className="text-base text-[#cbb26a]">{text}</p>
                <h2 className="pt-8 pb-8 text-[42px] leading-[1.1] text-[#ffffffcc] w-full">
                    {title}
                </h2>
                <h4
                    className={` text-base w-full text-[#ffffff99] ${libreBaskerville.className}`}
                >
                    {body}
                </h4>

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
            </article>
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
