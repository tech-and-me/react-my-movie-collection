import { Button, Card } from "react-bootstrap"


const CustomCard = ({ movieObj, onAdd, onDelete, showDeleteBtn = false }) => {
  return (
    <Card style={{ width: '18rem' }} className="my-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title>{movieObj.Title}</Card.Title>
        <Card.Title>Rate: {movieObj.imdbRating}</Card.Title>
        {
          showDeleteBtn
            ? <div className="d-flex justify-content-center">
              <Button variant="danger" className="mx-2 w-50" onClick={() => onDelete(movieObj)}>Delete</Button>
            </div>

            : <div className="d-flex justify-content-center">
              <Button variant="info" className="mx-2 w-50" onClick={() => onAdd("happy")}>Happy</Button>
              <Button variant="secondary" className="mx-2 w-50" onClick={() => onAdd("lazy")}>Lazy</Button>
            </div>
        }

      </Card.Body>
    </Card>
  )
}

export default CustomCard