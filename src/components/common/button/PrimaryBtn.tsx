interface PrimaryBtnProps {
  buttonText: string;
  additionalStyles?: string;
}

const PrimaryBtn = ({ buttonText, additionalStyles = '' }: PrimaryBtnProps) => {
  return (
    <button
      className={`px-8 py-3 bg-linear-to-b from-[#67a7ff] to-[#2f7be6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition cursor-pointer ${additionalStyles}`}>
      {buttonText}
    </button>
  );
};

export default PrimaryBtn;
