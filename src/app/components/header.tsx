import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-row w-full uppercase  font-sans  justify-center'>
      <nav className='bg-background-200 py-5 w-full '>
        <div className='flex flex-wrap justify-between items-center '>
          <Link href='/'>
            <h2 className='text-3xl tracking-wider font-bold gradient'>
              Marta Carlos
            </h2>
          </Link>
        </div>
      </nav>
    </header>
  );
}
