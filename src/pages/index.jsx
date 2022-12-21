import { Link } from 'gatsby-link';
import React from 'react';

const IndexPage = () => (
  <main className="min-h-screen flex flex-col align-middle w-screen">
    <div className="w-full max-w-7xl flex flex-col align-middle mx-auto px-3">
      <section className="flex w-full justify-between">
        <div className="flex flex-col align-middle justify-center">
          <h1 className="text-6xl md:text-9xl p-0">Giorgio Tran</h1>
          <p className="text-center pt-2 text-lg">
            <b>MSCS Student @ UHM</b>
          </p>
        </div>
        <div className="flex flex-col justify-center text-4xl">
          <Link to="/404">LinkedIn</Link>
          <Link to="/404">GitHub</Link>
          <Link to="/404">Email</Link>
        </div>
      </section>
      <section className="bg-slate-50">
        <h1>Testing</h1>
      </section>
    </div>
  </main>
);

export default IndexPage;

export const Head = () => <title>Giorgio Tran</title>;
