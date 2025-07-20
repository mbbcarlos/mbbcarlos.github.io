import Project from '../components/project';

export default function StemGram() {
  return (
    <Project
      title={'StemGram'}
      description={
        'A website filled with photographs about the construction of technological and scientific landscapes in Portugal (1850-1914), offering an interactive map experience, as well as an advanced search process.'
      }
      techStack={['React', 'Typescript', 'Node Express']}
      thumbnail={'/images/stemgram.png'}
      copyright={'CIUHCT'}
    ></Project>
  );
}
