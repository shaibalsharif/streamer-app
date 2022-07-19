import { getbyid } from "../../utils/requests";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
/*export const getStaticProps= async (context)=>{
  const id= context.params.movie;
  const res= await fetch(`api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const data= await res.json();
  return{
    props:{
      data,
      a:id,
      b:API_KEY,
    },
  }
}*/


//const router = useRouter()
const movie = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div>
      <Header />
      <Nav />

      <div className=" group  m-10 md:m-12 xl:m-20 p-15">
        <div className={"max-w-md w-100%"}>
          <Image
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`
              || `${BASE_URL}${result.poster_path}`
            }
            layout='responsive'
            height={1080}
            width={1920}
          />
        </div>

        <div className=' p-2 max-w-sm' >
          <h2 className=' text-center mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
            {result.title || result.original_name}
          </h2>
          <p className='text-lg text-center max-w-150  p-10'>
            {result.overview}
          </p>

          <p className=" flex items-center opacity-0 group-hover:opacity-100 cursor-pointer">
            {result.media_type && `${result.media_type} .`}{" "}
            {result.release_date || `${result.first_air_date} `}.{" "}
            <ThumbUpIcon className="h-5 mx-2" />
            {result.vote_count}
          </p>
        </div>

      </div>
    </div>
  )
}

export default movie


export const getServerSideProps = async (context) => {
  const id = context.query.movie
  const baseURL = "https://api.themoviedb.org/3/movie/"

  const res = await fetch(`${baseURL}${id}${getbyid.url}`
  )
  const data = await res.json()
  return {
    props: {
      result: data || null,

    },
  };
}