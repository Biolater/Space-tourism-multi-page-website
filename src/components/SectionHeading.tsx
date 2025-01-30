import React from "react";

type Props = {
    number: number;
    title: string;
};

const SectionHeading: React.FC<Props> = ({ number, title}) => {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-6">
      <span className="font-bold font-barlow text-white/25">0{number}</span>
      <h1 className="text-center font-barlow tracking-[0.15rem] uppercase">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
