import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentUserSelector} from '../../redux/selectors';

const ProtectedRoute = () => {
    const user = useSelector(currentUserSelector);
    return user ? <Outlet/> : <Navigate to=''/>
}
export default ProtectedRoute;