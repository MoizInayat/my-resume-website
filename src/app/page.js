"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center "
      style={{ backgroundImage: "url(/cover.jpg)" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-6xl text-yellow-50 font-bold tracking-wider leading-tight text-center">
          Welcome To Moiz Inayat Simple Web Page Resume! 📋
        </h1>
        <div className="mb-4 flex">
          <Link
            className=" bg-orange-300 flex  text-white text-lg px-6 py-1 rounded-xl hover:bg-orange-600 mt-2 mr-2"
            href="/home"
          >
            {" "}
            <FaHome className="h-6 w-6 mr-2" /> Home{" "}
          </Link>
          <Link
            className=" bg-orange-300 text-white flex text-lg px-6 py-1 rounded-xl hover:bg-orange-600 mt-2 mr-2"
            href="/resume"
          >
            {" "}
            <FaClipboardList className="h-6 w-6 mr-2" /> Resume{" "}
          </Link>
          <Link
            className=" bg-orange-300 flex text-white text-lg px-6 py-1 rounded-xl hover:bg-orange-600 mt-2 mr-2"
            href="/contact"
          >
            {" "}
            <MdContactMail className="h-6 w-6 mr-2" /> Contact{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
