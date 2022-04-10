import { Button, Col, Form, Row } from "react-bootstrap"
import {useState} from 'react'


const SearchForm = ({getMovie}) => {
    const [search, setSearch] = useState("");
    const handleOnChange = (e) => {
        const {value} = e.target;
        setSearch(value);
    }       

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        getMovie(search);
        e.target.value = "";
    }


    return (
        <div >
            <Form className="d-flex justify-content-center" onSubmit={handleOnSubmit}>
                <Row>
                    <Col >
                        <Form.Control placeholder="First name" onChange={handleOnChange}/>
                    </Col>
                    <Col>
                        <Button variant="warning" type="submit" >Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}

export default SearchForm