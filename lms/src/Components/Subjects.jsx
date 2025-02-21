import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Subjects() {
  const [Subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get(`https://trogon.info/interview/php/api/subjects.php`)
      .then((response) => {
        console.log(response.data);
        setSubjects(response.data);
      });
  }, []);

  return (
    <div className="h-screen p-4 bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        SUBJECTS
      </h1>
      <div className="">
        {Subjects.map((sub) => (
          <Link key={sub.id} to={`/chapters/${sub.id}`}>
            <div className="w-full flex items-center p-4 hover:opacity-50 transition-all duration-200  ">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 border-4 border-gray-800">
                <span className="text-gray-900 font-bold">{sub.id}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{sub.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
