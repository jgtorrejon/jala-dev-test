import Create from "./components/create";
import Search from "./components/search";

function App() {
  return (
    <div className="bg-green-100 h-screen">
      <div className="text-center pt-20">
        <p className="text-4xl text-grey-200">JALA DEV TEST</p>
      </div>
      <div className="flex mt-20">
        <Create />
        <Search />
      </div>
    </div>
  );
}

export default App;
