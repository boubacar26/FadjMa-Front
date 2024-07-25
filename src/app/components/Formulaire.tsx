import React from "react";

type FormProps = {
  onClick: () => void;
};

const FormButton: React.FC<FormProps> = ({ onClick }) => (
  <button
    className="w-56 h-12 bg-white border border-black"
    onClick={onClick}
  >
    + Nouveau médicament
  </button>
);

export default FormButton;
