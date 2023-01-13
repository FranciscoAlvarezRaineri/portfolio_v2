import Head from "next/head";
import Link from "next/link";
import Project from "../components/Project";
import projects from "../utils/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>FAR Portfolio</title>
        <meta name="description" content="Francisco Alvarez Raineri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Retrato low.png" />
      </Head>
      <main className="bg-gray-200 text-gray-800">
        <div
          id="header"
          className="h-screen bg-gray-800 flex flex-wrap-reverse"
        >
          <div className="flex flex-col justify-evenly md:basis-2/3 basis-full">
            <div className="text-gray-200 font-mono text-3xl justify-center m-4 flex lg:flex-row flex-col">
              <h1 className="mr-5 text-center">Hi! I'm</h1>
              <p className="text-center">Francisco Alvarez Raineri</p>
            </div>
            <h1 className="text-gray-200 font-mono text-3xl text-center m-4">
              Full Stack Developer
            </h1>
            <h1 className="text-gray-200 font-mono text-3xl text-center m-4">
              Welcome to my Portfolio!
            </h1>
          </div>
          <div className="md:basis-1/3 basis-full flex justify-center items-center">
            <img
              src="/Retrato low.jpg"
              alt="Portrait"
              className="w-auto max-h-96 aspect-square border rounded-full shadow-md shadow-gray-600 m-4"
            ></img>
          </div>
        </div>
        <nav
          id="navbar"
          className="w-screen text-gray-200  bg-gray-800 flex justify-between sticky top-0"
        >
          <div className="text-gray-200 justify-between flex"></div>
          <div className="text-gray-200 justify-between flex">
            <Link href="#header" className="m-4 text-xl font-mono">
              Top
            </Link>
            <Link href="#projects" className="m-4 text-xl font-mono">
              Projects
            </Link>
            <Link href="#about" className="m-4 text-xl font-mono">
              About
            </Link>
            <Link href="#contact" className="m-4 text-xl font-mono">
              Contact
            </Link>
          </div>
        </nav>
        <div id="projects" className="h-12"></div>
        <div>
          <h1 className="text-3xl font-mono text-center m-4">PROJECTS</h1>
          {projects.map((project, i) => (
            <Project project={project} key={`project_${i}`}></Project>
          ))}
        </div>
        <div id="about">
          <div className="flex flex-col justify-center">
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
        </div>
        <div id="contact">
          <div>
            <h1 className="text-3xl font-mono text-center m-4">GET IN TOUCH</h1>
          </div>
          <form
            action="/api/contact"
            method="post"
            className="flex items-center flex-col leading-loose"
          >
            <div className="text-center">
              <label for="name">Name</label> <br></br>
              <input type="text" id="name" name="name" placeholder="John Doe" />
            </div>
            <div className="text-center">
              <label for="email">Email</label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="JhonDoe@email.com"
              />
            </div>
            <div className="text-center">
              <label for="message">Message</label>
              <br></br>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Do you want to come work with us?"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-200">
        <div className="flex justify-evenly sm:flex-row flex-col">
          <div
            id="info"
            className="sm:basis-1/2 basis-1 font-mono text-center m-4 leading-loose max-w-md "
          >
            <Link href="mailto:FranciscoAlvarezRaineri@gmail.com">
              FranciscoAlvarezRaineri@gmail.com
            </Link>
          </div>
          <div
            id="socials"
            className="sm:basis-1/2 basis-1 font-mono text-xl text-center m-4 leading-loose max-w-md"
          >
            <div className="flex justify-evenly ">
              <div id="LinkedIn" className="">
                <a
                  href="https://www.linkedin.com/in/franciscoalvarezraineri/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
              <div id="GitHub" className="">
                <a
                  href="https://github.com/FranciscoAlvarezRaineri"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
              <div id="Twitter" className="">
                <a href="https://twitter.com/FranciscoAlvRai" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
