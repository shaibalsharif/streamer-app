import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/requests'
import Results from '../components/Results'

export default function Home({results}) {
 
  console.log(results);
  
  return (
    <div >
      <Head>
        <title>Streamer</title>
        <meta name="description" content="Movie Streamer Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />    
      <Nav />
      <Results  results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json());
  return {
    props: {
      results: request.results ||null,
     
    },
  };
}
