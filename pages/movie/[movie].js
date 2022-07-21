import { getbyid } from "../../utils/requests";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import MovieDetails from "../../components/MovieDetails";
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
 // console.log(result);

  return (
    <div >
      <Header /> 
      <div className="hidden md:block">
       
        <Nav />
      </div>
      <MovieDetails result={result} />
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