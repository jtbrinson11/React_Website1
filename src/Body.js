import Sidebar from './Sidebar';
import Form from './Form';
import './Body.css'

function Body() {
    return (
        <div className='Body'>
            <Sidebar />
            <Form />
        </div>
    );
}

export default Body;