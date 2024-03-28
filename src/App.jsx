import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className="px-36 py-24">
        <HomePage />
      </div>
    </>
  );
}

export default App;
