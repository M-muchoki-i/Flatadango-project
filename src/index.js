const options = {
  method: "GET",
  headers: {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": "EchoapiRuntime/1.1.0",
    Connection: "keep-alive",
  },
};

fetch("http://localhost:3002/films?deleted=false", options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((movies) => {
    // List item for each movie
    const filmsItems = document.getElementById("films");

    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      filmsItems.appendChild(li);

      // i have added an event listener to display movie details
      li.addEventListener("click", () => displayMovieDetails(movie));
    });
  });

//  display movie details
function displayMovieDetails(movie) {
  const poster = document.getElementById("poster");
  poster.src = movie.poster;
  const title = document.getElementById("title");
  title.textContent = movie.title;
  // give time in minutes. i reserached this part it was giving me an error
  const runtime = document.getElementById("runtime");
  runtime.textContent = `${movie.runtime} minutes`;
  const showtime = document.getElementById("showtime");
  showtime.textContent = `Showtime: ${movie.showtime}`;
  const description = document.getElementById("description");
  description.movie;
}
const availableTicketsElement = document.querySelector("tickets");
availableTicketsElement.textContent = `Available Tickets: ${
  data.capacity - data.tickets_sold
}`;

// Update available tickets text
function updateAvailableTickets(movie) {
  updateAvailableTickets.textContent = movie.capacity - movie.tickets_sold;
}

// Buy a ticket
// buyButton.onclick = async () => {
//   if (!selectedMovie) return;

// Delete a movie
function deleteMovie(movieId) {
  fetch(`fetch('http://localhost:3002/films', options)${movieId}`, {
    method: "DELETE",
  });
  console.log(` ${movieId} deleted`);
}

// Initial fetch of movies
fetchMovies();
