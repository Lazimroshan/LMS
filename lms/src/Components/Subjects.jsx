import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/biology.jpg'
import image2 from '../assets/images/physics.jpg'
import image3 from '../assets/images/malayalam.jpg'
import image4 from '../assets/images/mathematics.jpg'
import image5 from '../assets/images/computer science.webp'
import image6 from '../assets/images/chemistry.jpg'

function Subjects() {
    const images = {
        'biology': image1,
        'chemistry': image6,
        'physics': image2,
        'malayalam': image3,
        'mathematics': image4,
        'computer science': image5,
    }

    const [Subjects, setSubjects] = useState([])

    useEffect(() => {
        axios.get(`https://trogon.info/interview/php/api/subjects.php`).then((response) => {
            console.log(response.data)
            setSubjects(response.data)
        })
    }, [])

    return (
        <div className="h-full p-4 bg-gray-900">
            <h1 className='text-3xl font-bold text-center text-white mb-4'>SUBJECTS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Subjects.map((sub) => (
                    <div key={sub.id} className='flex flex-col items-center p-4 rounded-lg'>
                        <Link to={`/chapters/${sub.id}`} className='flex flex-col items-center'>
                            <div className='w-24 h-24 mb-2'>
                                <img 
                                    src={images[sub.title.toLowerCase()]} 
                                    alt={sub.title} 
                                    className='w-full h-full object-cover rounded-full' 
                                />
                            </div>
                            <h1 className='text-xl font-bold text-center text-white'>{sub.title}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Subjects