import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/requests'
import Results from '../components/Results'

export default function Home({ results,}) {



  return (
    <div >
      <Head>
        <title>Streamer</title>
        <meta name="description" content="Movie Streamer Site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='manifest' href="/manifest.json"/>
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const baseURL = 'https://api.themoviedb.org/3'
  let fetchURL= `${baseURL}${requests[genre]?.url || requests.fetchTrending.url}`
  if (requests[genre] && requests[genre].title === 'SEARCH') {
    // fetchURL = `${baseURL}${requests[genre].url}`
    //fetchURL=fetchURL+"avaters"
    if(context.query.key){  
      fetchURL = `${baseURL}${requests[genre].url}${context.query.key}`
    }
  
  }


  //const request = await fetch( `https://api.themoviedb.org/3/search/movie?api_key=bf8b550b390c142b15bcbaa40e1ddfe8&query=Avengers`)
  // .then(res => res.json());
  const request = await fetch(fetchURL).then(res => res.json());
  return {
    props: {
      results: request.results || null,
     
    },
  };
}
