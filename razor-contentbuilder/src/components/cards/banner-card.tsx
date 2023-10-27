import Link from "next/link";

import cn from 'classnames';
import {BuilderImage} from "src/builderComponents/builderImage";
import {IsEditable, onlyForBuilder} from "@components/config";


interface BannerProps {
  img: any;
  link:string;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}



const BannerCard: React.FC<BannerProps> = ( {img, className, classNameInner, variant, link, effectActive}) => {


  return (
<<<<<<< HEAD
    <div data-component={"BannerCard"} className={cn('mx-auto', props?.className)}>
=======
    <div data-custom={"BannerCard"} className={cn('mx-auto', className)}>

      <span data-text={"main"}>card</span>
>>>>>>> 90cf7ccbe4df7bee6b4cb1e43648a95ad90b9e42
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
          {...IsEditable({img: "src" })}
        />
<<<<<<< HEAD
=======
        {effectActive && (
>>>>>>> 90cf7ccbe4df7bee6b4cb1e43648a95ad90b9e42
          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />

      </Link>

      {onlyForBuilder()&& <span>    <br/><br/> variant ('rounded' | 'default')    <br/><br/> <span
        className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500" +
          " focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" +
          " dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} {...IsEditable({variant: "textContent" })}>rounded</span>  <br/><br/> <hr/>
        </span>     }

    </div>
  );
};

export default BannerCard;
