import Image from "next/image"
import { ThumbUpIcon} from "@heroicons/react/outline"
import {StarIcon} from '@heroicons/react/solid'

import CategoryHolder from "./CategoryHolder"

const MovieDetails = ({ result }) => {

    const printRatingStar=(vote)=>{

        let fullStars= parseInt(vote/2)
        var x=[]
        for(let i=0;i<fullStars;i++){
           x.push(<StarIcon className="h-4"/>)
        }
        return(
            <div className="flex justify-center">
             {x.map(y=>y)}
            </div>
        )
    }
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (



        <div className=" md:flex min-w-sm group m-10 md:m-12 xl:m-20 p-15 bg-[#112730]">
            {/*
              Poster Image
              Title
              Vote Stars
              category
              Overview

              Trailer play button

             */}



            <div className={"flex-1 h-full relative items-center py-auto my-auto "}>

                <Image
                    className="image"
                    src={`${BASE_URL}${result.backdrop_path || result.poster_path}`
                        || `${BASE_URL}${result.poster_path}`
                    }
                    layout='responsive'
                    height={1080}
                    width={1920}
                />
            </div>

            <div className=' p-2 max-w-md ' >
                <h2 className=' text-center mt-1 text-2xl text-white transition-all duration-100 ease-in-out font-bold'>
                    {result.title || result.original_name}
                </h2>
                {result.tagline?<p className="text-center text-sm italic"> {result.tagline}</p>:<></>}
                {result.genres? <CategoryHolder data={result.genres}/>: <></>}
                {result.vote_average? 
                    printRatingStar(result.vote_average)
                : <></>}
                <button type="onclick" className="text-sm font-bold pl-2 pr-2 rounded-lg bg-[#140606] cursor-pointer ">PLAY TRAILER</button>
                {result.release_date || result.first_air_date ?<p className="text-sm text-center">Released: {result.release_date ||result.first_air_date}</p>:<></>}
                <p className='  max-w-150 pl-4 pr-2 text-justify  leading-5'>
                    {result.overview}
                </p>

               { /*<p className="flex items-center opacity-0 group-hover:opacity-100 cursor-pointer p-auto">
                    {result.media_type && `${result.media_type} .`}{" "}
                    {result.release_date || `${result.first_air_date} `}.{" "}
                    <ThumbUpIcon className="h-5 mx-2" />
                    {result.vote_count}
                </p>*/}
            </div>

        </div>

    )
}

export default MovieDetails