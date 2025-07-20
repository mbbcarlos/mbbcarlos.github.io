import Link from 'next/link';

const ButtonSection = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href}>
      <button
        className={
          'flex items-center uppercase bg-dark dark:bg-primary text-white gap-1 px-4 py-2 cursor-pointer hover:border-2 font-semibold tracking-widest rounded-md hover:border-dark hover:text-dark dark:hover:text-primary dark:hover:border-primary dark:hover:bg-complementary hover:bg-primary duration-300 hover:scale-3'
        }
      >
        {title}
      </button>
    </Link>
  );
};

export default ButtonSection;
