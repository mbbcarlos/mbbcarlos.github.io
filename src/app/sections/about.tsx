import Image from 'next/image';
import Card from '../components/base/card';
import ExpandableItem from '../components/base/expandable';
import Timeline from '../components/base/timeline';
import Education from '../components/education';
import Tag from '../components/tag';

export default function Introduction({}) {
  return (
    <section id='introduction' className='w-full flex flex-col h-fit'>
      <div className='flex flex-row items-center justify-center md:justify-between lg:justify-center '>
        <Card cardData={{ id: 'about', title: 'About' }}>
          <div className='flex flex-col gap-12 justify-center items-center w-full '>
            {/**  Row 1 / Section 1 **/}
            <div className='flex flex-col align-middle justify-between items-center gap-12 md:flex-row w-full'>
              <div className='basis-1/3'>
                <Image
                  src='/images/about-1.jpg'
                  className='w-auto rounded-full'
                  alt={'about me, first image'}
                  width={300}
                  height={300}
                />
              </div>
              <div className='flex flex-col h-full basis-2/3 gap-2 justify-between '>
                <h2 className='text-3xl text-center md:text-left md:text-6xl font-bold'>
                  Marta Carlos ✌🏻
                </h2>
                <div className='flex flex-col gap-2 text-xl'>
                  <p className='text-md'>
                    I like to think of myself as little mix of a creative and a
                    technical personal but I&apos;ve let my creative side down
                    for many years. However, I&apos;m now on long life mission
                    to change that.
                  </p>
                  <p className='text-md'>
                    I like drawing on my free time and I&apos;ve had my fair
                    share of video editing adventures. One of the reasons I
                    chose software engineering for a career was thinking
                    &quot;What if, instead of using this editing software, I was
                    the one building them?&quot; So maybe, who knows if
                    that&apos;s where I&apos;ll end up in 20 years?
                  </p>
                </div>
              </div>
            </div>
            {/**  Work **/}
            <div className='flex flex-col align-middle justify-between items-center gap-12 md:flex-row w-full '>
              <ExpandableItem title='Work'>
                <div className='flex flex-col xl:flex-row gap-4 px-6 pt-4'>
                  <div className='flex flex-col gap-2 basis-full xl:basis-7/12 text-xl justify-between pb-6'>
                    <div className='flex flex-col gap-2'>
                      <p>
                        Currently working as a Software Engineer @ OutSystems.
                      </p>
                      <p>
                        More specifically, I&apos;m currently working in a
                        frontend-focused team responsible for shaping the future
                        of mobile apps made with OutSystems. My day-to-day
                        consistes of building reusable, React-based UI
                        components on top of the Ionic Framework.
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                      <Tag name='React' />
                      <Tag name='Typescript' />
                      <Tag name='NextJS' />
                      <Tag name='Javascript' />
                      <Tag name='Kotlin' />
                    </div>
                  </div>
                  <div className='flex flex-col basis-full xl:basis-5/12'>
                    <Timeline />
                  </div>
                </div>
              </ExpandableItem>
            </div>
            {/**  Education **/}
            <div className='flex flex-col align-middle justify-between items-center gap-12 md:flex-row w-full '>
              <ExpandableItem title='Education'>
                <div className='flex flex-col xl:flex-row gap-4 justify-between px-6 py-4'>
                  <div className='flex flex-col basis-full md:basis-1/2'>
                    <Education />
                  </div>
                  <div className='flex flex-col gap-2 basis-full md:basis-1/2 text-xl items-center xl:items-end justify-center'>
                    <div className='shrink'>
                      <img
                        src='/images/about-2.jpg'
                        className='w-auto rounded-full max-h-[300px]'
                        alt={'about me, second image'}
                      />
                    </div>
                  </div>
                </div>
              </ExpandableItem>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
