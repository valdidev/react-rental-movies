import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContentDetails } from './ContentDetails';
import { ContentGrid } from './ContentGrid';
import { Search } from './Search';

export const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Search />
    </header>
      <main>
        <Routes>
            <Route path='/content' element={ <ContentGrid /> } />
            <Route path='/content/:contentId' element={ <ContentDetails /> } />
        </Routes> 
      </main>
    </BrowserRouter>
  )
}
