import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className="no-page">
            <h2>Sorry</h2>
            <p>We can'n finde this page</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
    )
}

export default NoPage;