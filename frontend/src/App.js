import React from "react";
import './app.css'
import Landing from "./component/landing/landing";
import Namepage from "./component/nameDetails/namePageLanding";
import Blog from './component/blog/ViewBlogs'
import BlogSingle from './component/blog/components/singlePost/SinglePost'
import MostLiked from './component/mostLiked/mostLiked'
import Message from "./component/message/Message";
import { Route, Routes } from "react-router-dom";

import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div >
      <CookiesProvider>
      <Routes>
      <Route exact element={<Landing/>} path="/" /> 
      <Route exact element={<Namepage/>} path="/meaningof/:name/:id" /> 
      <Route exact element={<Landing/>} path='/nameWith/:letter'/> 
      <Route exact element={<Landing/>} path="/nameOf/:letter" /> 
      <Route exact element={<Blog/>} path="/blog" /> 
      <Route exact element={<BlogSingle/>} path="/blog/singleBlog/:id" /> 
      <Route exact element={<MostLiked/>} path="/names/mostLiked" /> 
      <Route exact element={<Message/>} path="/messages" /> 
      </Routes>
      </CookiesProvider>

    </div>
  );
}

export default App;
