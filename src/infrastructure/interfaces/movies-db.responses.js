// al recibir una propiedad modificada de la api hacer el cambio donde sea necesario aqui, he ir a los casos de uso de use-case y realizar la actualizacion de la propiedad
import { MovieMapper } from "../mappers/movie.mapper";

export class NowPlayingResponse {
    constructor(dates, page, results, total_pages, total_results) {
      this.dates = dates;
      this.page = page;
      this.results = results;
      this.total_pages = total_pages;
      this.total_results = total_results;
    }
  }
  
export class MovieDBMoviesResponse {
    constructor(page, results, total_pages, total_results) {
      this.page = page;
      this.results = results;
      this.total_pages = total_pages;
      this.total_results = total_results;
    }
  }
  
export class Dates {
    constructor(maximum, minimum) {
      this.maximum = maximum;
      this.minimum = minimum;
    }
  }
  
export class Result {
    constructor(adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count) {
      this.adult = adult;
      this.backdrop_path = backdrop_path;
      this.genre_ids = genre_ids;
      this.id = id;
      this.original_language = original_language;
      this.original_title = original_title;
      this.overview = overview;
      this.popularity = popularity;
      this.poster_path = poster_path;
      this.release_date = release_date;
      this.title = title;
      this.video = video;
      this.vote_average = vote_average;
      this.vote_count = vote_count;
    }

    toMovieEntity() {
        return MovieMapper.fromMovieDBResultToEntity(this);
    }
  }
    export class MovieDBMovie {
      constructor( adult, backdrop_path, belongs_to_collection, budget, genres, homepage, id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
      ) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.belongs_to_collection = belongs_to_collection;
        this.budget = budget;
        this.genres = genres;
        this.homepage = homepage;
        this.id = id;
        this.imdb_id = imdb_id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.production_companies = production_companies;
        this.production_countries = production_countries;
        this.release_date = release_date;
        this.revenue = revenue;
        this.runtime = runtime;
        this.spoken_languages = spoken_languages;
        this.status = status;
        this.tagline = tagline;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
      }
    }

      export class BelongsToCollection {
        constructor(id, name, poster_path, backdrop_path) {
          this.id = id;
          this.name = name;
          this.poster_path = poster_path;
          this.backdrop_path = backdrop_path;
        }
      }
      
      export class Genre {
        constructor(id, name) {
          this.id = id;
          this.name = name;
        }
      }
      
      export class ProductionCompany {
        constructor(id, logo_path, name, origin_country) {
          this.id = id;
          this.logo_path = logo_path;
          this.name = name;
          this.origin_country = origin_country;
        }
      }
      
      export class ProductionCountry {
        constructor(iso_3166_1, name) {
          this.iso_3166_1 = iso_3166_1;
          this.name = name;
        }
      }
      
      export class SpokenLanguage {
        constructor(english_name, iso_639_1, name) {
          this.english_name = english_name;
          this.iso_639_1 = iso_639_1;
          this.name = name;
        }
      }
      
      export class MovieDBCastResponse {
        constructor(id, cast, crew) {
          this.id = id;
          this.cast = cast;
          this.crew = crew;
        }
      }
      
      export class MovieDBCast {
        constructor( adult, gender, id, known_for_department, name, original_name, popularity, profile_path, cast_id, character, credit_id, order, department, job
        ) {
          this.adult = adult;
          this.gender = gender;
          this.id = id;
          this.known_for_department = known_for_department;
          this.name = name;
          this.original_name = original_name;
          this.popularity = popularity;
          this.profile_path = profile_path;
          this.cast_id = cast_id;
          this.character = character;
          this.credit_id = credit_id;
          this.order = order;
          this.department = department;
          this.job = job;
        }
      }    
  