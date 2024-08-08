"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Search(){
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return genre;
}

const Navbaritem = ({ title, param }) => {
  return (
    <div>
      <Suspense>
        <Link
          className={`hover:text-amber-600 font-semibold ${
            <Suspense><Search /></Suspense> === param
              ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </Suspense>
    </div>
  );
};

export default Navbaritem;
