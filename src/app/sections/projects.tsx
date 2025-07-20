import Card from '../components/base/card';
import Rotstem from '../topics/rotstem';
import StemGram from '../topics/stemgram';
import Wildfires from '../topics/wildfires';

export default function Projects({}) {
  return (
    <section id='freelance' className='w-full flex flex-col h-fit'>
      <div className='flex flex-row items-center justify-center md:justify-between lg:justify-center '>
        <Card cardData={{ id: 'projects', title: 'Projects' }}>
          <div className='flex flex-col gap-12 justify-center items-center w-full '>
            <Rotstem />

            <div className='flex flex-row align-middle justify-between items-center gap-12  w-full'>
              <StemGram />
            </div>
            <div className='flex flex-row align-middle justify-between items-center gap-12  w-full'>
              <Wildfires />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
