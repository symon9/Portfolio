import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import placeholder from "/public/png/placeholder.png";
import { skillsImage } from "@/utils/skill-image";

const SingleProject = ({ project }) => {
  const { name, description, tools, code, demo, image, features } = project;

  return (
    <div className="group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-2 md:px-2 py-[10px]">
      <div className="flex flex-col justify-between w-full h-full px-2">
        <div className="py-2">
          <Image
            src={image ? image?.src : placeholder}
            alt={name}
            width={1080}
            height={650}
            className="w-96 md:w-[25rem] rounded-lg"
          />
        </div>
        <h2 className="text-pink-500 not-italic font-semibold text-lg leading-[110%] capitalize">
          <Link
            href={demo}
            className="no-underline text-pink-500 flex hover:text-pink-600 transition"
          >
            {name}
            <HiExternalLink />
          </Link>
        </h2>
        <p className="text-[#EFF3F4] text-xs md:text-sm py-3">{description}</p>
      </div>
      <h3 className="mb-1 px-2 w-full text-sm text-[#16f2b3]">Stacks</h3>
      <div className="my-1 px-2 flex justify-start gap-2 w-full">
        {tools.map((tool, id) => (
          <div className="h-6" key={id}>
            <Image
              src={skillsImage(tool)?.src}
              alt={tool}
              title={tool}
              width={30}
              height={30}
              className="h-full w-auto rounded-lg z-50 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
