import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Card from '../components/base/card';

export default function Links({}) {
  return (
    <section id='freelance' className='w-full flex flex-col h-fit '>
      <div className='flex flex-row items-center justify-center md:justify-between lg:justify-center '>
        <Card
          cardData={{
            id: 'links',
            title: 'Links',
          }}
        >
          <div className='flex my-2 md:my-12 w-full text-sm md:text-md '>
            <div className={'flex flex-row w-full py-2 gap-8 justify-center'}>
              <Link
                href='https://www.linkedin.com/in/marta-carlos/'
                className='group flex flex-col font-bold uppercase text-xl w-fit text-center gap-4'
              >
                <BsLinkedin
                  size={92}
                  className={'text-dark group-hover:text-primary'}
                />
                <span className='text-dark group-hover:text-primary'>
                  LinkedIn
                </span>
              </Link>

              <Link
                href='https://github.com/mbbcarlos'
                className='group flex flex-col font-bold uppercase text-xl w-fit text-center gap-4'
              >
                <BsGithub
                  size={92}
                  className={'text-dark group-hover:text-primary'}
                />
                <span className='text-dark group-hover:text-primary'>
                  Github
                </span>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
