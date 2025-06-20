import { RiNextjsFill } from "react-icons/ri";
import { SiFlask, SiKotlin, SiUnrealengine } from "react-icons/si";
import { FaNode, FaPython, FaReact } from "react-icons/fa";

function getIconList(techStack: string[]) {
  return techStack.map((tech)=> {
    return {
      'next': <RiNextjsFill className="text-3xl"/>,
      'python': <FaPython className="text-3xl" />,
      'react': <FaReact className="text-3xl" />,
      'node': <FaNode className="text-3xl" />,
      'unreal': <SiUnrealengine className="text-3xl"/>,
      'flask': <SiFlask className="text-3xl"/>,
      'kotlin': <SiKotlin className="text-3xl"/>


    }[tech]
    
  });
}


export default function Tech({ techStack }: { techStack: string[] }) {
  return (
    <div className="flex flex-row gap-2" >
      <small>Built with</small>
      {getIconList(techStack)} 
    </div>
  )
}