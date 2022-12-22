import React from 'react';
import LinkNewTab from '../components/LinkNewTab';

const IndexPage = () => (
  <main className="min-h-screen flex flex-col align-middle w-screen">
    <div className="w-full max-w-6xl flex flex-col align-middle mx-auto px-3">
      <section className="flex w-full justify-between">
        <div className="flex flex-col align-middle justify-center">
          <h1 className="text-6xl md:text-9xl p-0">Giorgio</h1>
          <h1 className="text-6xl md:text-9xl p-0">Tran</h1>
        </div>
        <div className="flex flex-col justify-end text-3xl md:text-6xl md:gap-2">
          <LinkNewTab link="https://linkedin.com/in/giorgio-tran-03a656139/" text="LinkedIn" />
          <LinkNewTab link="https://github.com/giorgio-tran/" text="GitHub" />
          <a href="/404">Resume</a>
        </div>
      </section>
      <section>
        <h1>Testing</h1>
      </section>
    </div>
  </main>
);

export default IndexPage;

export const Head = () => <title>Giorgio Tran</title>;
