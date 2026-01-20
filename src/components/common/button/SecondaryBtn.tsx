interface SecondaryBtnProps {
  buttonText: string;
  onClick?: () => void;
  additionalStyles?: string;
}

const SecondaryBtn = ({ buttonText, onClick, additionalStyles }: SecondaryBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 transition cursor-pointer ${additionalStyles}`}>
      {buttonText}
    </button>
  );
};

export default SecondaryBtn;
