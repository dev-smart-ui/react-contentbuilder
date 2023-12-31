import { BsX } from 'react-icons/bs';
import cn from 'classnames';

type HighlightedBarProps = {
  onClose?: (e: React.SyntheticEvent) => void;
  variant?: 'dark' | 'primary' | 'highlighted' | 'highlightedTwo';
  className?: string;
};

const variantBasedClasses = {
  dark: 'bg-gray-800',
  primary: 'bg-skin-primary',
  highlighted: 'bg-skin-highlighted',
  highlightedTwo: 'bg-gradient-to-r from-[#2930b4] to-[#2a9eb0]',
};

// @ts-ignore
const HighlightedBar: React.FunctionComponent<HighlightedBarProps> = ({variant = 'dark', onClose, children, className,}) => {
  return (
    <div
      className={cn(
        'z-50 w-full min-h-[40px] py-2 px-4 md:px-6 lg:px-8 flex items-center justify-center relative text-sm text-skin-inverted',
        variantBasedClasses[variant],
        className
      )}
    >
      {children}
      <button
        onClick={onClose}
        aria-label="Close Button"
        className="outline-none absolute flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full end-2 md:end-3 transition-colors duration-200 hover:bg-skin-fill hover:bg-opacity-10 focus:bg-skin-fill focus:bg-opacity-10"
      >
        <BsX className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HighlightedBar;
