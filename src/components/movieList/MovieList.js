import { useState } from "react"
import { Button, ButtonGroup, Col, Row } from "react-bootstrap"
import CustomCard from "../card/CustomCard"
import CustomList from "../card/CustomList";


const MovieList = ({MovieList,onDelete}) => {
  const [mood, setMood] = useState("");
  const [isGrid,setIsGrid] = useState(true);

  //fiflter movie
  const filteredMovies = mood === "" ? MovieList : MovieList.filter((movie)=>movie.Category === mood );

  return (
    <div>
      <Row>
        <Col ><h2 className="fs-4"><span className="text-capitalize fw-bolder fs-3 me-1">{mood || "All"}</span> List is selected</h2></Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
        <ButtonGroup>
          <Button variant="primary" onClick = {() => setMood("")}>All</Button>
          <Button variant="info" onClick = {() => setMood("happy")}>Happy</Button>
          <Button variant="warning" onClick = {() => setMood("lazy")}>Lazy</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="primary" onClick={()=>setIsGrid(true)}>Grid</Button>
          <Button variant="info" onClick={()=>setIsGrid(false)}>List</Button>
        </ButtonGroup>
        </Col>
      </Row>

    <Row>
      <Col className="d-flex flex-wrap justify-content-center">
        {
          filteredMovies.map((movie,index)=> 
          isGrid? (<CustomCard key={index} movieObj = {movie} showDeleteBtn={true} onDelete={onDelete} />)
          :(<CustomList key={index} movieObj = {movie} showDeleteBtn={true} onDelete={onDelete} />))
        }
      </Col>
    </Row>

    </div>
  )
}

export default MovieList