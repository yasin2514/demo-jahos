
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='m-0'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;