import Bloglist from './Bloglist';

//import custome fetching hooks
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <>
            <div className="home">
                { error && <div>{ error }</div> }
                { isPending && <p>Loading ...</p> }
                { blogs && <Bloglist blogs={ blogs } title='All Blogs!' /> }
            </div>
        </>
    )
}

export default Home;