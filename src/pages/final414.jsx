import React from 'react';
import Container from '../components/Container';

const Essay = () => (
  <Container>
    <h1 className="text-3xl">
      A &quot;Practice&quot; Internship
    </h1>
    <br />
    <p>
      ICS 414 was a great sequel to ICS 314. In ICS 314, the majority of the time was spent on understanding web development languages and tools, with a brief final project at the end. ICS 414 jumps straight to building a project for an entire semester using a more secure version of Meteor. Luckily, I was exposed to industrial strength Meteor during last year&apos;s hackathon, so that knowledge helped me throughout the semester. ICS 414 helped me learn how to work with customers, how to implement unfamiliar features, and how to work with a randomly assigned team.
    </p>
    <br />
    <p>
      Working with customers was definitely challenging because they propose ideas that can be tough to implement. One of such was a CSV downloader, which can allow users in administrative roles to download data. To implement that, I was originally relying on outside libraries because that’s what I have done in the past. However, none of the libraries that I tried were compatible with the framework that we were using, so I had to implement it myself. I initially was not aware that CSV’s format was like a string because on my laptop CSV shows up as a table. After determining the structure of CSV, I had to iterate through the objects in the collection to convert the entire list into CSV. That made me realize that I should not overly rely on libraries, and instead focus more on my ability to solve such problems without them.
    </p>
    <br />
    <p>
      The team being randomly assigned was also a different experience, and more realistic to what happens in a real job. All of the members in the team were very knowledgeable, and I learned a lot from them as well. James developed the interactive map, which was a really neat feature for our application. His stylistic choices on certain components in the user interface, such as the interactive search bar, was very impressive. I learned a lot from him by looking at his code for those implementations. Working with a team allowed me to grow as a future developer, and also improve by looking at others’ code.
    </p>
    <br />
    <p>
      Overall, ICS 414 was almost like a practice internship, and I enjoyed the course. I would highly recommend it for students who have already taken ICS 314.
    </p>
  </Container>
);

export default Essay;
export const Head = () => <title> Projects - Sketch </title>;
