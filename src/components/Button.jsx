import  cn  from './cn';
import { children } from 'react';

export default function Button({ className, children, ...rest }) {
    return (
        <button className={cn(className, "bg-[#50B66A] text-black w-max-[10rem] text-center w-fit rounded-md p-2 flex flex-col gap-5 items-center shadow-md shadow-gris")} {...rest}>
            {children}
        </button>
    );
}