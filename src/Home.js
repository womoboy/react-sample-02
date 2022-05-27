import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'descreption 1', author: 'Aria', id: 1},
        {title: 'Welcome party', body: 'descreption 2', author: 'Babak', id: 2},
        {title: 'Web dev top tips', body: 'descreption 3', author: 'Aria', id: 3}
    ]);

    //delete data from blogs state
    const handledelete = (id) => {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog);
    }
    
    return (
        <>
            <div className="home">
                <Bloglist blogs={blogs} title='All Blogs!' handledelete={handledelete}/>
            </div>
        </>
    )
}

export default Home;