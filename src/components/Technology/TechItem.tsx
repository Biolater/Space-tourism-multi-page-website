type Props = {
  isActive: boolean;
  idx: number;
  onClick: () => void;
};

const TechItem: React.FC<Props> = ({ isActive, idx, onClick }) => {
  return (
    <button
      className={`size-10 md:size-14 lg:size-20 flex border md:text-2xl lg:text-[2rem] border-white/20 transition-all rounded-full items-center justify-center ${
        isActive ? "bg-white text-black transition-colors duration-300" : "bg-transparent text-white"
      } hover:border-white`}
      onClick={onClick}
    >
      {idx + 1}
    </button>
  );
};

export default TechItem;

