import Link from '@components/ui/link';

import cn from 'classnames';
import {BuilderImage} from "src/builderComponents/builderImage";

interface BannerProps {
  img: any;
  link:string;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}



const BannerCard: React.FC<BannerProps> = ({
  img ,
  link,
  className,
  variant = 'default',
  effectActive = true,
  classNameInner,
}) => {

  return (
    <div data-custom={"BannerCard"} className={cn('mx-auto', className)}>
      card
      <Link
        href={link||"/"}
        className={cn(
          'rounded-sm h-full group flex justify-center relative overflow-hidden hover:opacity-90',
          classNameInner
        )}
      >
        <BuilderImage
          src={img }
          width={480}
          height={200}
          alt={""}
          quality={100}
          className={cn('bg-skin-thumbnail object-cover w-full', {
            'rounded-md': variant === 'rounded',
          })}
        />
        {effectActive && (
          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
