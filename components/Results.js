import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
const Results = ({ results }) => {

  return (
    <div>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center">
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
      </FlipMove>
  
    </div>
   );
}

export default Results