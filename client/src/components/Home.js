import React from "react";

function Home(props) {
  return (
    <div>
      <div className="mt-3">
        <div
          className={`flex justify-center flex-col items-center px-4 ${
            props.mode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <h2 className="text-3xl font-bold">Codex</h2>
          <p className="text-lg mb-4 text-center px-10 mt-4">
            Explore structured roadmaps and essential resources for mastering
            coding in Data Structures and Algorithms (DSA) and web development.
            Start with programming fundamentals (Codecademy, freeCodeCamp), then
            study basic data structures and algorithms (GeeksforGeeks,
            HackerRank, LeetCode). For web development, begin with front-end
            technologies (HTML, CSS, JavaScript on freeCodeCamp, MDN Web Docs),
            move to back-end languages and databases (Udemy, Coursera), and
            finally, integrate both in full-stack development (freeCodeCamp,
            Codecademy). These roadmaps and resources provide comprehensive
            learning paths to build and enhance your coding skills effectively.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div>
          <h1
            className={`text-2xl font-bold ${
              props.mode ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Resources
          </h1>
          <p
            className={`${
              props.mode ? "text-gray-200" : "text-gray-900"
            } mt-3 text-lg text-center`}
          >
            Discover essential resources like LeetCode and HackerRank, which
            provide extensive coding challenges and tutorials for mastering data
            structures and algorithms. These platforms offer a structured
            approach to enhance problem-solving skills and prepare for technical
            interviews. For web development, leverage freeCodeCamp's interactive
            curriculum, Codecademy's hands-on projects, and Udemy's
            comprehensive courses to learn HTML, CSS, JavaScript, and more.
            These resources offer practical exercises and real-world projects to
            build proficiency in front-end and back-end development. Whether
            focusing on algorithms or web development, these platforms provide
            diverse learning paths and opportunities to advance coding skills
            effectively.
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-4">
          <h1
            className={`text-2xl font-bold ${
              props.mode ? "text-gray-200" : "text-gray-900   "
            }`}
          >
            Roadmaps
          </h1>
          <p
            className={`text-lg text-center py-4 ${
              props.mode ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Explore structured roadmaps for mastering Data Structures and
            Algorithms DSA and web development with essential resources. For
            DSA, start with programming fundamentals Codecademy, freeCodeCamp,
            then move to basic data structures like arrays and linked lists
            GeeksforGeeks, HackerRank, and focus on algorithms LeetCode,
            CodeSignal. For web development, begin with front-end technologies
            like HTML, CSS, and JavaScript freeCodeCamp, MDN Web Docs, advance
            to back-end languages and databases Udemy, Coursera, and finally,
            combine both in full-stack development freeCodeCamp, Codecademy.
            These roadmaps provide comprehensive learning paths to build and
            enhance your coding skills effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;