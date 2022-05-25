const App = () => {

    const title = 'Hello World !';
    const like = 50;

    return (
        <>
            <div className="App">
                <div className="content">
                    <h1>{ title }</h1>
                    <p>Like { like } times</p>
                </div>
            </div>
        </>
    )
}

export default App;