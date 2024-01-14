import './App.css';
import {Main} from './pages/main/Main.tsx';
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {NavBar} from './pages/main/sections/NavBar.tsx';
import {Projects} from './pages/projects/Projects.tsx';
import {Awards} from './pages/awards/Awards.tsx';

const JumpToHome = () => {
    const nav = useNavigate();
    useEffect(() => {
        nav('./home');

    }, [nav]);
    return <></>;
};
export const RemoveTrailingSlash = ({...rest}) => {
    const location = useLocation();

    if (location.pathname.match('/.*/$')) {
        return <Navigate replace {...rest} to={{
            pathname: location.pathname.replace(/\/+$/, ''),
            search: location.search
        }}/>;
    } else return null;
};
export const App = () => {
    return <>
        <BrowserRouter>
            <NavBar/>
            <RemoveTrailingSlash/>
            <Routes>
                <Route path={'/'} element={<JumpToHome/>}/>
                <Route path={'/home'} element={<Main/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
                <Route path={'/awards'} element={<Awards/>}/>
            </Routes>
        </BrowserRouter>
    </>;
};
