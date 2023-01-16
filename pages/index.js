import Head from "next/head";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Form from "../components/Form";
import projects from "../utils/projects";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>FAR Portfolio</title>
        <meta name="description" content="Francisco Alvarez Raineri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Retrato low.png" />
      </Head>
      <main className="bg-gray-200 text-gray-600">
        <Landing></Landing>
        <NavBar></NavBar>
        <div id="projects" className="h-12"></div>
        <div>
          <h1 className="text-3xl font-mono text-center m-4">PROJECTS</h1>
          {projects.map((project, i) => (
            <Project project={project} key={`project_${i}`}></Project>
          ))}
        </div>
        <div id="about" className="h-12"></div>
        <div className="flex flex-col justify-center shadow-md shadow-gray-400">
          <h1 className="text-3xl font-mono text-center m-4">MY STORY</h1>
          <p className="m-4 max-w-lg text-center self-center leading-loose text-lg">
            After a decade of part-time and temporary jobs, I felt the need to
            settle down and follow the path of a professional career.
            <br></br>
            Programming came as the obvious choice. The subject caught my
            attention back in high-school because I love problem solving and
            writing is a great way to achieve it.
            <br></br>
            Having graduated from an +800hs intensive bootcamp, I’m eager to
            join a team and start adding value.
            <br></br>
            Meanwhile, there are plenty of problems to work on and tools to
            learn.
          </p>
        </div>
        <div id="contact" className="h-12"></div>
        <div>
          <h1 className="text-3xl font-mono text-center m-4">GET IN TOUCH</h1>
          <Form></Form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
