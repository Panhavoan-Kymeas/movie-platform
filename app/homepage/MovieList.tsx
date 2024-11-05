import React from 'react';

const movies = [
  {
    id: 1,
    title: "TRAP",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001618",
    cinemas: ["legend", "major", "prime"]
  },
  {
    id: 2,
    title: "Bagman",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752",
    cinemas: ["major", "prime"]
  },
  {
    id: 3,
    title: "Trapezium",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001742",
    cinemas: ["legend"]
  },
  {
    id: 4,
    title: "Exit",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001727",
    cinemas: ["legend", "major"]
  },
  {
    id: 5,
    title: "TRAP",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001618",
    cinemas: ["legend", "major", "prime"]
  },
  {
    id: 6,
    title: "Bagman",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001752",
    cinemas: ["major", "prime"]
  },
  {
    id: 7,
    title: "Trapezium",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001742",
    cinemas: ["legend"]
  },
  {
    id: 8,
    title: "Exit",
    image: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001727",
    cinemas: ["legend", "major"]
  }
];

const MovieCard = ({ movie }) => {
  return (
    <a href="#" className="flex flex-col gap-4 h-full group">
      <div className="relative flex-1 w-full overflow-hidden rounded-xl">
        <img 
          src={movie.image} 
          alt={``}
          className="w-full h-full object-cover "
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-normal text-white">{movie.title}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 h-full">
          {movie.cinemas.map((cinema) => (
                <div key={cinema} className="h-full object-cover rounded">
                    <img 
                        src={`/image/${cinema}.png`} 
                        alt={cinema}
                        className="w-full object-cover rounded" // Maintain aspect ratio and fill the grid cell
                    />
                </div>
            ))}
        </div>
      </div>
    </a>
  );
};

const MovieList = () => {
  return (
    <div className="mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;