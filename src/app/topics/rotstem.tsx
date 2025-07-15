import Card from "../components/base/card";
import ExpandableItem from "../components/base/expandable";
import Project from "../components/project";
import Tag from "../components/tag";

export default function Rotstem() {
  return (
    <Project title={"ROT@HCTM"} description={"A website that allows you to explore the history of Portugal&apos;s most important science, technology and medicine institutions. It offers an interactive map experience, immersing the user in the historical context of the historical institutions"} techStack={["Typescript", "NextJS", "Python"]} thumbnail={"/images/rotstem.png"} copyright={"CIUHCT"}></Project>

  )
}