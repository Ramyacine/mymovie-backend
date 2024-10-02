var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();

module.exports = router;


const url =`${process.env.Url_movie}api_key=${process.env.Api_key}`;
console.log(url);
// const options = {method: 'GET', headers: {accept: 'application/json'}};



router.get("/movies", (req, res) => {
    // User.find().then((allUsers) => res.json({ result: true, allUsers }))
fetch(url)
  .then(response => response.json())
  .then(data => {

        const tabmovie = data.results.map((movieElem, i) =>{
            console.log("une movie")
            return { title: movieElem.title, 
                poster_path: `https://image.tmdb.org/t/p/original/${movieElem.poster_path}`, 
                vote_average: movieElem.vote_average, 
                vote_count: movieElem.vote_count, 
                overview: movieElem.overview
            }
        })

  res.json({movies :tabmovie})
})
  .catch(err => console.error('error:' + err));

})
 // const movies = femovies.map((data, i) => {
  //   const isLiked = likedMovies.some(movie => movie === data.title);
  //   return <Movie key={i} updateLikedMovies={updateLikedMovies} isLiked={isLiked} title={data.title} overview={
  //     // if(data.overview.length > 250) {
  //     //   data.overview = data.overview.substring(0, 250) + '...';
  //     }} poster={`https://image.tmdb.org/t/p/original/`+data.poster_path} voteAverage={data.vote_average} voteCount={data.vote_count} />;
  // });

//   if(data.overview.length > 250) {
//       data.overview = data.overview.substring(0, 250) + '...';