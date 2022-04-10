import { Container } from 'react-bootstrap';
import './App.css';
import CustomCard from './components/card/CustomCard';
import MovieList from './components/movieList/MovieList';
import SearchForm from './components/searchForm/SearchForm';
import Title from './components/title/Title';
import { fetchMovie } from './helper/axiosHelper'
import { useState, useEffect } from 'react';
import randomChar from "./helper/randomGeneratorHelp";


function App() {
  const [searchMovie, setSearchMovie] = useState({})
  const [movieList,setMovieList] = useState([]);

  
  useEffect(()=>{
    //create a random character
    console.log("useEffect is executed ");
    const char = randomChar();
    getMovie(char);
  },[]);


  const getMovie = async search => {
    const { data } = await fetchMovie(search)
    console.log(data);
    setSearchMovie(data);
    console.log(searchMovie);
  }


  //check if movie hace alreasy existed in list

  const movieNotInList = () =>{
    let flag = true;
      movieList.forEach(movie => {
        if(movie.imdbID === searchMovie.imdbID){
          flag = false;
        }     
      })
      return flag;
  }

  const onAdd = (type) => {      
      if (movieNotInList()){
         //To get just one property of the search Movie only.
        // const newObj = [...movieList,{Title:searchMovie.Title,imdbRating: searchMovie.imdbRating, Category: type}];

        // to get all the propeties of the search movie
      const newObj = [...movieList,{...searchMovie, Category: type}];    
      setMovieList(newObj);
      console.log("new objList is :", newObj);
      setSearchMovie("");
      }
  }

  const onDelete = (movieObj) => {
    if(window.confirm("Click Ok to delete or Cancel ? ")){
      const newMovieList = movieList.filter((movie) => movie.imdbID !== movieObj.imdbID)
      setMovieList(newMovieList);
    }
  }

  return (
    <div className="wrapper ">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        {searchMovie?.imdbID && <CustomCard movieObj={searchMovie} onAdd={onAdd} />}
        <hr />
        <MovieList MovieList={movieList} onDelete={onDelete}/>
      </Container>
    </div>
  );
}

export default App;
