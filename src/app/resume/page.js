"use client";
import React from "react";
import Link from "next/link";
import { GiExitDoor } from "react-icons/gi";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold">Moiz Inayat</h1>
        <p className="text-xl text-gray-400 mt-2">Junior Software Developer</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Education 🏫
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Software Development Diploma
            </h3>
            <p className="text-gray-400">
              Southern Alberta Institute of Technologies - 2023 - 2024
            </p>
            <p className="text-gray-300 mt-1">
              Relevant Coursework: Data Structures, Algorithms, Web Development,
              Operating Systems, Object-oriented programming
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Work Experience 🏢
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Junior Software Developer Intern
            </h3>
            <p className="text-gray-400">Cargill - Dec 2023 - Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-1 space-y-1">
              <li>
                Developed and maintained web applications using JavaScript,
                React, and Node.js.
              </li>
              <li>
                Collaborated with cross-functional teams to define, design, and
                ship new features.
              </li>
              <li>
                Utilized Docker for containerization and deployment of
                applications.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Skills 🤹
        </h2>
        <div className="flex flex-wrap gap-4 text-gray-300">
          <span className="bg-gray-800 rounded px-3 py-1">JavaScript</span>
          <span className="bg-gray-800 rounded px-3 py-1">Python</span>
          <span className="bg-gray-800 rounded px-3 py-1">React</span>
          <span className="bg-gray-800 rounded px-3 py-1">Node.js</span>
          <span className="bg-gray-800 rounded px-3 py-1">Docker</span>
          <span className="bg-gray-800 rounded px-3 py-1">Git</span>
          <span className="bg-gray-800 rounded px-3 py-1">HTML</span>
          <span className="bg-gray-800 rounded px-3 py-1">CSS</span>
          <span className="bg-gray-800 rounded px-3 py-1">SQL</span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Certifications 🪪
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              The Complete 2023 Web dev Bootcamp
            </h3>
            <p className="text-gray-400">Udemy - January 2024</p>
          </div>
        </div>
      </section>
      <div className=" justify-center flex">
        <Link
          href="/"
          className="  bg-green-400 flex  text-white text-lg px-6 py-1 rounded-md hover:bg-green-700 mt-2 mr-2"
        >
          <GiExitDoor className="h-6 w-6 mr-2" />
          Back
        </Link>
      </div>
    </div>
  );
}
