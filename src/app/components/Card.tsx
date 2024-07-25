import Image, { StaticImageData } from "next/image";
import styles from "../../../styles/Main.module.css";
import { FC } from "react";

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
  bgColor: string;
  footerText: string;
  borderColor: string;
}

const Card: FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  bgColor,
  footerText,
  borderColor,
}) => {
  return (
    <div
      className={`${borderColor} w-52 h-40 flex justify-center text-center flex-col`}
    >
      <Image
        src={imageSrc}
        alt="..."
        className={`${styles.image} mx-auto mt-1 w-8`}
      />
      <h5 style={{ fontSize: "20px", fontWeight: "700" }} className="mb-3 mt-2">
        {title}
      </h5>
      <p style={{ fontSize: "14px", fontWeight: "500" }} className="mb-3.5">
        {subtitle}
      </p>
      <div style={{ backgroundColor: bgColor }}>
        <p style={{ fontSize: "12px", fontWeight: "400", padding: "4%" }}>
          {footerText}
        </p>
      </div>
    </div>
  );
};

export default Card;
