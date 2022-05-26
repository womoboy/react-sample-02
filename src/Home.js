const Home = () => {
    const handleClick = () => {
        console.log('Hello World !');
    }

    const handleClickmeAgain = (name, e) => {
        console.log(name , ' ' , e.target);
    }

    return (
        <>
            <div className="container">
                <h2>This is Home page</h2>
                <button onClick={handleClick} >Click me</button>
                <button onClick={(e) => handleClickmeAgain('Hello', e)}>Click me agian</button>
            </div>
        </>
    )
}

export default Home;