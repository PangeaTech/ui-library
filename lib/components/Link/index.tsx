interface ILinkProps {
  href: string;
  onClick: () => void;
  target?: string;
  className?: string;
  label: string;
}
const Link: React.FC<ILinkProps> = ({
  href,
  onClick,
  label,
  target = '_blank',
  className = 'text-blue-400 hover:text-purple-700 hover:underline'
}) => {
  return (
    <a href={href} onClick={onClick} className={className} target={target} rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default Link;
