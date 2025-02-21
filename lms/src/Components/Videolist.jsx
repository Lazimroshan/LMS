import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { FaChevronRight } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";

function Videolisting() {

    const { id } = useParams()
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate=useNavigate();

    useEffect(() => {
        setLoading(true)
        axios.get(`https://trogon.info/interview/php/api/videos.php?module_id=${id}`).then((response) => {
            console.log(response.data)
            setVideos(response.data)
            setLoading(false)
        }).catch((error) => {
            console.error('Error fetching videos:', error)
            setLoading(false)
        })
    }, [id])

    const handleVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    const back = () => {
        navigate('/');
      };

    return (
        <div className="min-h-screen bg-gray-900 bg-cover bg-center p-4 ">
            <h1 className='text-3xl font-bold text-white text-center pb-5'>VIDEO CLASS</h1>
            {selectedVideo ? (
                <div key={selectedVideo.id} className="w-full bg-gray-800 p-4 mb-4 rounded-lg">
                    
                    <ReactPlayer
                        className="w-full h-auto"
                        url={selectedVideo.video_url}
                        controls={true}
                        width="100%"
                        height="100%"
                    />
                    <h3 className="text-white font-bold mt-3">{selectedVideo.title}</h3>
                    <h1 className='text-white mt-2' >{selectedVideo.description}</h1>
                    <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg transition-all duration-200" onClick={() => setSelectedVideo(null)}>Back to List</button>
                </div>
            ) : (
                videos.map((video) => (
                    <button
                        key={video.id}
                        onClick={() => handleVideoSelect(video)}
                        className="w-full flex items-center bg-gray-800 p-4 mb-4 rounded-lg hover:bg-gray-700 transition-all duration-200"
                    >
                        <div className="flex-shrink-0 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center mr-4"><BiCheck className='w-8 h-8 text-amber-50'/></div>
                        <h3 className="text-white flex-2 font-bold text-left">{video.title}</h3>
                        <FaChevronRight className="text-white" />
                    </button>
                ))
            )}
            <button className=" text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg transition-all duration-200" onClick={back}>Back to home</button>
        </div>
    )
}

export default Videolisting
