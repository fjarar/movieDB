"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = search.trim();
    if(searchQuery){
      setInputValue(searchQuery);
      router.push(`/search/${searchQuery}`);
      setSearch("");
    }    
  };

  useEffect(() => {
    if (pathname.startsWith('/search')) {
      const searchTerm = pathname.split('/search/')[1];
      setInputValue(searchTerm);
    }else{
      setInputValue('');
    }
  }, [pathname]);  

  return (
    <>
      <form
        className="flex justify-between px-5 max-w-6xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search keywords..."
          className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-amber-600 disabled:text-gray-400"
          disabled={search === ""}
        >
          Search
        </button>
      </form>
      {inputValue && (
        <p className="m-2 px-5 max-w-6xl">
          Buscaste: <span className="font-bold">{inputValue}</span>
        </p>
      )}
    </>
  );
};

export default SearchBox;
