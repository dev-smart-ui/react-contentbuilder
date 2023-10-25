import Link from '@components/ui/link';

import cn from 'classnames';
import {BuilderImage} from "src/builderComponents/builderImage";
import {textFromBuilder} from "@components/customBlocks/helper";

interface BannerProps {
  img: any;
  link:string;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}



const BannerCard: React.FC<BannerProps> = ( props) => {


  return (
    <div data-custom={"BannerCard"} className={cn('mx-auto', props?.className)}>

      <span data-text={"main"}>card</span>
      <Link
        href={props?.link||"/"}
        className={cn(
          'rounded-sm h-full group flex justify-center relative overflow-hidden hover:opacity-90',
          props. classNameInner
        )}
      >
        <BuilderImage
          src={props?.img }
          width={480}
          height={200}
          alt={""}
          quality={100}
          className={cn('bg-skin-thumbnail object-cover w-full', {
            'rounded-md': props?.variant === 'rounded',
          })}
        />
        {props?.effectActive && (
          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
