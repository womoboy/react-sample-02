import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(res => {
                    console.log(res);
                    if(!res.ok) {
                        throw Error('the fetch api cant return data');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setIsPending(null)
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000)
    }, []);

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