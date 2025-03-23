
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

      // Optionally, add an event listener to display movie details
      li.addEventListener("click", () => displayMovieDetails(movie));
    });
  });


// Function to display movie details
function displayMovieDetails(movie) {
  const poster = document.getElementById("poster");
  const title = document.getElementById("title");
  const runtime = document.getElementById("runtime");
  const showtime = document.getElementById("showtime");
  const description = document.getElementById("description");

 
  poster.src = movie.poster;
  title.textContent = movie.title;
  runtime.textContent = `${movie.runtime} minutes`;
  showtime.textContent = `Showtime: ${movie.showtime}`;
  description.textContent = movie.description;

//   const availableTicketsElement = document.querySelector("tickets");
//   availableTicketsElement.textContent = `Available Tickets: ${
//     data.capacity - data.tickets_sold
    //   }`;
    
    document.getElementById("buy-ticket").addEventListener("click", () => {
      const currentTickets = parseInt(
        document.getElementById("ticket-num").textContent
      );

      if (currentTickets > 0) {
        fetch(`http://localhost:3002/films/${movieDetailsId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tickets_sold: movie.tickets_sold + 1,
          }),
        }).then(() => {
          document.getElementById("ticket-num").textContent =
            currentTickets - 1;
          updateSoldOutStatus();
        });
      }
    });

}
