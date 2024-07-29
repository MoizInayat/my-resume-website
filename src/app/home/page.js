"use client";
import Link from "next/link";
import { GiExitDoor } from "react-icons/gi";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row  pr-[10rem] items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <img
              src="/home.jpg"
              alt="Profile"
              className="rounded-full"
              width={150}
              height={150}
            />
          </div>
          <div>
            <h1 className="text-4xl  text-left font-bold mb-4">Hey there,</h1>
            <p className="text-lg leading-relaxed text-left max-w-2xl mx-auto">
              I'm Moiz Inayat, a software developer that is passionate about
              coming up with creative and effective answers to challenging
              issues. Having just received my degree in software development
              program, I have refined my abilities in a number of programming
              languages and frameworks, including as Python, React, and
              JavaScript.I am now working on a Docker-related project for my
              Operating Systems and Cloud Computing course, which has allowed me
              to gain practical expertise with cloud technologies and
              containerization. My quest to learn new things and advance my
              career in technology is driven by an unwavering curiosity.
            </p>
            <p className="text-lg leading-relaxed text-left max-w-2xl mx-auto">
              ___________________________________________________________________________________
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-4 items-center md:items-start justify-center space">
          <Link
            href="/"
            className="  bg-green-400 flex  text-white text-lg px-6 py-1 rounded-md hover:bg-green-700 mt-2 mr-2"
          >
            <GiExitDoor className="h-6 w-6 mr-2" />
            Back
          </Link>
        </div>
      </div>
      <footer className="mt-8 pt-[10rem] flex flex-col items-center text-sm text-gray-500">
        <div className="mt-8 flex space-x-4 mb-2">
          <a
            href="https://www.linkedin.com/feed/"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MoizInayat"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Copyright 2024. Moiz Inayat
        </div>
      </footer>
    </div>
  );
}
