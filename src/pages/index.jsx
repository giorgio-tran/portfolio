import React from 'react';
import LinkNewTab from '../components/LinkNewTab';
import ProjectCard from '../components/ProjectCard';
import projects from '../info/projects';

const IndexPage = () => (
  <main className="min-h-screen flex flex-col align-middle w-full">
    <div className="w-full max-w-6xl flex flex-col align-middle mx-auto px-5">
      <section className="flex w-full justify-between pb-10 md:pb-72">
        <div className="flex flex-col align-middle justify-center">
          <h1 className="text-6xl md:text-9xl p-0">Giorgio</h1>
          <h1 className="text-6xl md:text-9xl p-0">Tran</h1>
        </div>
        <div className="flex flex-col justify-end text-3xl md:text-6xl md:gap-2">
          <LinkNewTab link="https://linkedin.com/in/giorgio-tran-03a656139/" text="LinkedIn" />
          <LinkNewTab link="https://github.com/giorgio-tran/" text="GitHub" />
          <LinkNewTab link="#" text="Resume" />
        </div>
      </section>
      <section className="pb-10 md:pb-72">
        <h1 className="w-full border-b-2 border-b-black text-3xl md:text-6xl pb-2">
          ABOUT ME
        </h1>
        <div className="py-2 flex flex-col gap-1 text-2xl">
          <p>Master&apos;s in Computer Science 2024.</p>
          <p>Keyboard Enthusiast.</p>
          <p>Coffee Aficionado.</p>
        </div>
      </section>
      <section>
        <h1 className="border-b-2 border-b-black text-3xl md:text-6xl pb-2">PROJECTS</h1>
        {projects.map((project) => (<ProjectCard project={project} />))}
      </section>
    </div>
  </main>
);

export default IndexPage;

export const Head = () => <title>Home</title>;
