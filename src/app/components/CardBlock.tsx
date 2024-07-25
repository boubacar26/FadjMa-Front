// components/CardBlock.tsx
import React from "react";

type CardBlockProps = {
  title: string;
  linkText: string;
  linkUrl?: string;
  data: Array<{ value: string; label: string }>;
};

const CardBlock: React.FC<CardBlockProps> = ({ title, linkText, data }) => {
  return (
    <div className="flex flex-col bloc">
      <div className="flex justify-between titre">
        <h6>{title}</h6>
        <p>{linkText}</p>
      </div>
      <div className="flex justify-between infos">
        {data.map((item, index) => (
          <div key={index}>
            <p className="num">{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBlock;
