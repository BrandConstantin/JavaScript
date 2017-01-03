var movie = prompt("Which movie?: Toy Story 2, Finding Nemo, or The Lion King").toLowerCase();

var getReview = function (movie) {
    switch(movie){
        case 'Toy Story 2':
            return "Great story. Mean prospector.";
        break;
        case 'Finding Nemo':
            return "Cool animation, and funny turtles.";
        break;
        case 'The Lion King':
            return "Great songs.";
        break;
        default:
            return "I don't know!";
        break;
    }
}

getReview("Toy Story 2");