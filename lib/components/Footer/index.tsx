interface IFooterProps {
  label: string;
}

const Footer: React.FC<IFooterProps> = ({ label }) => {
  return (
    <div className="flex py-1 justify-center items-center shadow-lg fixed w-full left-0 bottom-0 bg-slate-100">
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );
};

export default Footer;
