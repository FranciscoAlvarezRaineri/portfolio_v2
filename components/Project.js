import React from "react";

const Project = ({ project }) => {
  const { title, subTitle, content, funcs, imgs, imgAlt, tools, live, repo } =
    project;
  return (
    <div className="flex items-center justify-items-center shadow-md shadow-gray-400">
      <div className="md:basis-1/3 basis-1/2 w-auto m-4 shadow-md shadow-gray-800 rounded-3xl aspect-video">
        <a href={live ? live : repo} target="blank">
          <img
            src={imgs}
            alt={imgAlt}
            className="overflow-hidden rounded-3xl"
          ></img>
        </a>
      </div>
      <div className="md:basis-2/3 basis-1/2 flex content-between md:flex-row flex-col">
        <div className="basis-1/2 m-4">
          <h1 className="text-2xl leading-loose">{title}</h1>
          <h1 className="text-xl leading-loose">{subTitle}</h1>
          <p className="text-lg leading-loose">{content}</p>
          <ul className="list-disc ml-4">
            {funcs?.map((func, i) => (
              <li key={`tool_${i}`} className="text-lg">
                {func}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/2 m-4">
          <h1 className="md:text-center text-2xl leading-loose">
            What I've Learned:
          </h1>
          <ul className="list-disc">
            {tools?.map((tool, i) => (
              <li
                key={`tool_${i}`}
                className="md:text-center text-lg leading-loose"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
