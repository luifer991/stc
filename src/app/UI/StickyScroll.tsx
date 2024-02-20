"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";


const content = [
    {
        title: "Mantente a salvo con STC",
        description:
            "Descubre cómo STC puede revolucionar tu seguridad personal.",
    },
    {
        title: "STC es Personalizable",
        description:
            "STC está diseñado para adaptarse a cada usuario, asegurando una experiencia personalizada.",
    },
    {
        title: "Mantente Protegido en Cualquier Momento",
        description:
            "STC proporciona una variedad de características de vanguardia para mejorar su seguridad.",
    },
    {
        title: "STC: Tu Seguridad, Nuestra Prioridad",
        description:
            "STC garantiza tu seguridad con sus medidas de seguridad sólidas y confiables.",
    },
    {
        title: "Utiliza STC en cualquier escenario",
        description:
            "STC es un programa que te ayuda a prevenir situaciones de violencia, independientemente de tu condición física.",
    },
    {
        title: "Mejora tu Seguridad con STC",
        description:
            "STC puede adaptarse a diferentes situaciones, asegurandote que puedas prevenir la violencia.",
    },
    {
        title: "Empodérate con STC",
        description:
            "STC asegura una solución segura para cualquier persona en cualquier escenario.",
    },
    {
        title: "Únete a nuestra comunidad",
        description:
            "STC empodéra a sus usuarios con las herramientas para prevenir la violencia y librarse de cualquier peligro.",
    } 
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
