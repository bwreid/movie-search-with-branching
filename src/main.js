$(function () {
  searchTitle('Frozen');
});

console.log('Running...');

function searchTitle (title) {
  $.get('http://www.omdbapi.com/?t=' + title)
   .done(function (movie) {
     console.log(movie);
   });
}
