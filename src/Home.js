import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'descreption 1', author: 'Aria', id: 1},
        {title: 'Welcome party', body: 'descreption 2', author: 'Babak', id: 2},
        {title: 'Web dev top tips', body: 'descreption 3', author: 'Ata', id: 3}
    ]);
    
    return (
        <>
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>writtn by : {blog.author}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;