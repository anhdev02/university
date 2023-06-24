import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../component/page/AboutPage'
import AdmissionsPage from '../component/page/AdmissionsPage'
import BlogPage from '../component/page/BlogPage'
import BlogSinglePage from '../component/page/BlogSinglePage'
import ContactPage from '../component/page/ContactPage'
import EventPage from '../component/page/EventPage'
import FacultyPage from '../component/page/FacultyPage'
import HomePage from '../component/page/HomePage'
export class AppRoute extends Component{
    render() {
        return(
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path='/about' element={<AboutPage/>}></Route>
                <Route path='/event' element={<EventPage/>}></Route>
                <Route path='/faculty' element={<FacultyPage/>}></Route>
                <Route path='/admissions' element={<AdmissionsPage/>}></Route>
                <Route path='/blog' element={<BlogPage/>}></Route>
                <Route path='/blogsingle' element={<BlogSinglePage/>}></Route>
                <Route path='/contact' element={<ContactPage/>}></Route>
            </Routes>
        )
    }
}

export default AppRoute