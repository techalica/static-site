interface Props {
  logo?: React.ReactNode;
  title?: string;
}

const Skill: React.FC<Props> = ({ logo, title = "" }) => {
  return (
    <div
      className="h-36 w-36 my-4 mx-4 bg-white border shadow-lg rounded-full flex flex-col items-center justify-center"
      title={title}
    >
      {logo}
      {false && title && (
        <span className="mt-2 text-xs font-semibold">{title}</span>
      )}
    </div>
  );
};

export default Skill;
