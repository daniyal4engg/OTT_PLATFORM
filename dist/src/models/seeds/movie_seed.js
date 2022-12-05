"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("movie_table").del();
        // Inserts seed entries
        yield knex("movie_table").insert([
            {
                movie_id: 1,
                movie_title: "Game of Thrones",
                genre: "Action",
                url: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 2,
                movie_title: "House of the Dragon",
                genre: "Drama",
                url: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                movie_plan: "basic",
            },
            {
                movie_id: 3,
                movie_title: "Unaired Game of Thrones Prequel Pilot",
                genre: "Action|Adventure|Drama",
                url: "https://m.media-amazon.com/images/M/MV5BODg5NDJhMjYtMTYyYi00NzAwLTliNmYtNGZhMjQ4ZjNkMjgyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 4,
                movie_title: "Game of Thrones: The Last Watch",
                genre: "Drama|Romance|War",
                url: "https://m.media-amazon.com/images/M/MV5BZDdlMzQzNDQtNTAxMS00NTMyLTgxYTAtYzQ0OGI1YzZhY2Y3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                movie_plan: "basic",
            },
            {
                movie_id: 5,
                movie_title: "Game of Thrones Conquest & Rebellion: An Animated History of the Seven Kingdoms",
                genre: "Drama",
                url: "https://m.media-amazon.com/images/M/MV5BMGYzNDJiOTgtN2Y1OC00NmM2LTk3MTMtZmFhNmJlMzQzNGNhXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 6,
                movie_title: "Purge of Kingdoms",
                genre: "Drama|Horror|Mystery|Thriller",
                url: "null",
                movie_plan: "basic",
            },
            {
                movie_id: 7,
                movie_title: "Game of Thrones: The Story So Far",
                genre: "Comedy|Thriller",
                url: "https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_.jpg",
                movie_plan: "basic",
            },
            {
                movie_id: 8,
                movie_title: "Making of Game of Thrones",
                genre: "Adventure|War|Western",
                url: "https://m.media-amazon.com/images/M/MV5BMzE2MTMxMzMwMV5BMl5BanBnXkFtZTgwMDg3NzA2MDE@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 9,
                movie_title: "Divo, Il",
                genre: "Drama",
                url: "null",
                movie_plan: "basic",
            },
            {
                movie_id: 10,
                movie_title: "Sherlock Holmes: A Game of Shadows",
                genre: "Animation|Children|Comedy",
                url: "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 11,
                movie_title: "The Friendship Game",
                genre: "Drama",
                url: "https://m.media-amazon.com/images/M/MV5BYTEzYzEyNTQtZjIwYS00ZjdjLTk2NjgtYWRhMTRiYTUxMDE1XkEyXkFqcGdeQXVyMDYyODA2Mw@@._V1_.jpg",
                movie_plan: "basic",
            },
            {
                movie_id: 12,
                movie_title: "The Hating Game",
                genre: "Adventure|Fantasy",
                url: "https://m.media-amazon.com/images/M/MV5BNDI2MDQzZDAtZmVlZS00MWU1LThkNzUtNjZmZmY3ZDljYjk2XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 13,
                movie_title: "The Crying Game",
                genre: "Drama|Thriller",
                url: "https://m.media-amazon.com/images/M/MV5BYWU4MjQ3YzUtNTA3YS00YmRmLTk1YjktODM1NGU0MjFiOTUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                movie_plan: "basic",
            },
            {
                movie_id: 14,
                movie_title: "Road Games",
                genre: "Drama",
                url: "https://m.media-amazon.com/images/M/MV5BZTVlMTk2YmYtNjQyYS00YTBmLWFhZjEtZjk0Zjc4MDFkYmExXkEyXkFqcGdeQXVyMzU4ODM5Nw@@._V1_.jpg",
                movie_plan: "premium",
            },
            {
                movie_id: 15,
                movie_title: "Funny Games",
                genre: "Children|Comedy",
                url: "https://m.media-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_.jpg",
                movie_plan: "basic",
            },
            {
                movie_id: 16,
                movie_title: "Kurt Cobain About a Son",
                genre: "Documentary|Musical",
                url: "null",
                movie_plan: "premium",
            },
            {
                movie_id: 17,
                movie_title: "Berlin Alexanderplatz",
                genre: "Drama",
                url: "null",
                movie_plan: "basic",
            },
            {
                movie_id: 18,
                movie_title: "Warning for the Joensson Gang (Varning för Jönssonligan)",
                genre: "Comedy|Crime",
                url: "null",
                movie_plan: "premium",
            },
            {
                movie_id: 19,
                movie_title: "101 Dalmatians",
                genre: "Adventure|Children|Comedy",
                url: "null",
                movie_plan: "basic",
            },
            {
                movie_id: 20,
                movie_title: "Lonely Hearts",
                genre: "Crime|Drama|Thriller",
                url: "null",
                movie_plan: "premium",
            },
        ]);
    });
}
exports.seed = seed;
