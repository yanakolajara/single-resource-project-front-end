import { useNavigate } from 'react-router-dom';

const errorImage = require('../Media/errorCode.jpeg')

function NotFound(){
    const navigate = useNavigate()
    return(
        <div id="notFoundDiv">
            <img src={errorImage}/>
            <h1>Page Not Found</h1>
            <button
            id="notFoundHomeButton"
            onClick={() => navigate('/')}
            >Home</button>
        </div>
    )
}

export default NotFound;