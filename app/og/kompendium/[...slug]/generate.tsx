import type { ReactNode } from "react";
import { readFile } from "node:fs/promises";
import type { ImageResponseOptions } from "@takumi-rs/image-response";
import { Geist } from "next/font/google";
import { Computer, Mouse, Pencil } from "lucide-react";

export interface GenerateProps {
  title: string;
  description?: string;
  chapter: string;
}

const font = readFile("./lib/og/IBMPlexSans-Regular.woff2").then((data) => ({
  name: "Mono",
  data,
  weight: 600,
}));


const fontBold = readFile("./lib/og/IBMPlexSans-Bold.woff2").then(
  (data) => ({
    name: "Mono",
    data,
    weight: 800,
  }),
);

const fontBoldItalic = readFile("./lib/og/IBMPlexSans-BoldItalic.woff2").then(
  (data) => ({
    name: "Mono",
    data,
    weight: 800,
  }),
);

export async function getImageResponseOptions(): Promise<ImageResponseOptions> {
  return {
    width: 1200,
    height: 630,
    format: "webp",
    fonts: await Promise.all([font, fontBold, fontBoldItalic]),
  };
}

function getColor(chapter: string) {
  switch (chapter) {
    case "programowanie":
      return "hsl(137, 72%, 59%)";
    case "uzytkowe":
      return "hsl(317, 69%, 59%)";
    default:
      return "hsl(227, 80%, 59%)";
  }
}

function getIcon(chapter: string, color: string) {
  switch (chapter) {
    case "programowanie":
      return <Computer color={color}/>;
    case "uzytkowe":
      return <Mouse color={color}/>;
    default:
      return <Pencil color={color}/>;
  }
}

export function generate({ title, description, chapter }: GenerateProps) {
  const primaryTextColor = getColor(chapter);
  const logo = (
    <div tw="text-5xl">
      <span tw="font-bold mr-0.5" style={{ color: primaryTextColor, fontStyle: 'italic'}}>$</span>
      <span tw="font-bold">Kompendium</span>
      <span tw="font-bold" style={{ color: primaryTextColor, fontStyle:'italic' }}>
        Inf;
      </span>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "rgb(10,10,10)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
          }}
        >
          {getIcon(chapter, primaryTextColor)}
          <span
            tw="font-black text-7xl"
            style={{
              color: primaryTextColor,
            }}
          >
            
            {title}
          </span>
        </div>
        <p
          style={{
            fontSize: "48px",
            color: "rgba(240,240,240,0.7)",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
            marginTop: "auto",
          }}
        >
          {logo}
        </div>
      </div>
    </div>
  );
}
