import React from "react";
import Card from "@/components/Card";

const Results = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl 2xl:max-w-full mx-auto 2xl:mx-24 py-4">
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
};

export default Results;
