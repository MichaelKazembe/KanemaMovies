//Routes.js

import React from 'react';
import Home from '../Pages/Home';
import Trending from '../Pages/Trending';
import Genres from '../Pages/Genres';
import Search from '../Pages/Search';
import NotFound from '../Pages/NotFound';
import MoviesList from '../Sections/MovieList';


const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/movies', component: <MoviesList /> },
    { path: '/trending', component: <Trending /> },
    { path: '/genres', component: <Genres />},
    { path: '/search', component: <Search />},
    { path: '*', component: <NotFound /> }
];

export default routes;