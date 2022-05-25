const App = () => {

    const title = 'Hello World !';
    const like = 50;

    return (
        <>
            <div className="App">
                <div className="content">
                    <p>{ title }</p>
                    <p>Likes { like } times</p>
                    <p>random number is: {Math.floor(Math.random() * 20)}</p>
                </div>
            </div>
        </>
    )
}

export default App;