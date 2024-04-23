export interface SectionProps {
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

export interface CardProps {
    icon: string
    alt: string
    body: string
    sect: string
    img: string
    div?: string
    p: string
}

export interface ButtonProps {
    classb: string
    text: string
}

export interface TitleProps {
    first: string,
    spanOne?: string,
    SpanTwo?: string,
    second?: string,
    third?: string
    w?: string
}