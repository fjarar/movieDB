"use client";

import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function Search({ param, setActive }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  useEffect(() => {
    if (genre === param) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [genre, param, setActive]);

  return null;
}

const Navbaritem = ({ title, param }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      <Suspense fallback={null}>
        <Search param={param} setActive={setActive}/>
      </Suspense>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          isActive
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default Navbaritem;
