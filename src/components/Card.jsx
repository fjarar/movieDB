import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
//import { noImage } from "no-image.jpg";

const Card = ({ result }) => {
  /* result.poster_path */
  
  var movieImg = '';
  if(result.backdrop_path != null){
    movieImg = `https://image.tmdb.org/t/p/original/${result.backdrop_path}`;
  }else{
    movieImg = '/no-image.jpg';
  }
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:p-4 sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`} className="flex sm:inline flex-col items-center">
        <Image
          src={movieImg}
          alt={`${result.title}`}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          width={500}
          height={300}
        ></Image>
        
        <div className="p-2">
          <p className="line-clamp-2 text.md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
        </div>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 mr-1 ml-3" />
          {result.vote_count}
        </p>
      </Link>
    </div>
  );
};

export default Card;
