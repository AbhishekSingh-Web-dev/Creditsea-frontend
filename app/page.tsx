import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <h1 className=" font-bold underline">
      Welcome to Home Page
      <br />
      <br />
      <Link href="/page1" className="text-purple-600 ">
        Go to Page 1
      </Link>
      <br />
      <br />
      <Link href="/page-2" className="text-purple-600">
        Go to Page 2
      </Link>
      <br />
      <br />
      <Link href="/page-3" className="text-purple-600">
        Go to Page 3
      </Link>
      <br />
      <br />
      <Link href="/page4" className="text-purple-600">
        Go to Page 4
      </Link>
      <br />
      <br />
      <Link href="/page5" className="text-purple-600">
        Go to Page 5
      </Link>
      <br />
      <br />
      <Link href="/admin" className="text-purple-600">
        Go to Admin Page
      </Link>
    </h1>
  );
};

export default page;
