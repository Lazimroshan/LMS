import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Chapters() {
  const { id } = useParams();

  const [Chapters, setChapters] = useState([]);

  const navigate = useNavigate();

  const nextpage = () => {
    navigate(`/videolist/${id}`);
  };

  useEffect(() => {
    axios
      .get(`https://trogon.info/interview/php/api/modules.php?subject_id=${id}`)
      .then((response) => {
        console.log(response.data);
        setChapters(response.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 bg-cover bg-center p-4 ">
      <h1 className="text-center text-white text-2xl font-bold pb-8">CHAPTERS</h1>
      {Chapters.map((chap) => (
        <div className="w-full p-4l ml-4 rounded-lg">
          <h3 className="text-white
           font-bold -indent-4"><span className="text-red-700 ">{chap.id}</span> {chap.title}</h3>
           <img src="../arrow.png" alt="" className="w-30 h-30" />
        </div>
      ))}
      <button className="fixed top-[90%] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg transition-all duration-200" onClick={nextpage}>Continue</button>
    </div>
  );
}

export default Chapters;
