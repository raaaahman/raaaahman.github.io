import Image from "next/image";

export function Testimonial ({ customer, children, preline, subline, link, className, ...props  }) {

  return (
    <article 
        className={className + " flex flex-col justify-between before:content-[' '] before:block before:mx-auto before:w-24 before:mb-8 before:border-t-2 before:border-grey-400 after:content-[' '] after:block after:mx-auto after:w-24 after:mt-8 after:border-b-2 after:border-grey-400"}
        {...props}
    >  
        {preline ? <p className="text-lg font-bold text-center text-white-strong">"{preline}"</p> : null}
        <blockquote className='p-4 text-md text-justify'>{children}</blockquote>
        {subline ? <p className="text-lg font-bold text-center text-white-strong">"{subline}"</p> : null}
        {customer ? <figure
            className="flex flex-row justify-center items-center gap-2 p-3 before:content-[' '] before:border before:border-white-strong before:w-4"
            >
            {customer.picture ?
                <div className="w-12 h-12 rounded-full border border-grey-400 mx-2">
                    <Image
                        className="block w-full rounded-full"
                        src={customer.picture}
                        objectFit="cover"
                    />
                </div>
            : null}
            {customer.name ? <figcaption className='text-md text-white-strong'>
                {customer.name}
                {link && link.href && link.label ? <a href={link.href} className="relative z-[50] ms-2 text-blue-light italic">{link.label}</a>: null} 
            </figcaption> : null}
        </figure> : null}
    </article>
  )
};