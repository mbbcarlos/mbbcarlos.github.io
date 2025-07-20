/* eslint-disable @next/next/no-img-element */
import ExpandableItem from '../components/base/expandable';
import Tag from '../components/tag';

export default function Project({
  title,
  description,
  techStack,
  thumbnail,
  copyright,
}: {
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  copyright: string;
}) {
  return (
    <ExpandableItem title={title}>
      <div className='flex flex-col md:flex-row gap-4 justify-between px-6 py-4'>
        <div className='flex flex-col gap-2 basis-full md:basis-1/2 text-xl items-center xl:items-start justify-center'>
          <div className='shrink'>
            <img
              src={thumbnail}
              className='w-auto rounded-md max-h-[300px]'
              alt={'about me, second image'}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 basis-full md:basis-1/2 justify-between'>
          <p>{description}</p>
          <div>
            <p>Built with</p>
            <div className='flex flex-wrap gap-2'>
              {techStack.map((s, i) => (
                <Tag key={`${s}-${i}`} name={s} />
              ))}
            </div>

            <small>@ {copyright} Copyrights reserved</small>
          </div>
        </div>
      </div>
    </ExpandableItem>
  );
}
