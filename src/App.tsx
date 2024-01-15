import './App.css';
import {Main} from './pages/main/Main.tsx';
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {Projects} from './pages/projects/Projects.tsx';

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
            <RemoveTrailingSlash/>
            <Routes>
                <Route path={'/'} element={<JumpToHome/>}/>
                <Route path={'/home'} element={<Main/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    </>;
};
