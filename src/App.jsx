import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Liked from "./Components/Liked/Liked";
function App() {
    return (
        <div className="App">
            <Header/>
            <Card />
            <Header/>

            <Liked/>
        </div>
    );
}

export default App;