import "./App.css";
import Board from "./components/Board";
import Brand from "./components/Brand";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="border-r border-r-main-divider pb-8 xl:static fixed -left-full z-10 bg-white max-w-sm w-full">
        <div className="sticky top-0">
          <Brand divider={true} opener={true} />
          <Sidebar />
        </div>
      </div>
      <div className="col-span-5 xl:col-span-4">
        <Navbar className="px-5 py-5 sm:px-12 sm:py-6" />
        <Board className="px-5 py-5 sm:px-12 sm:py-10" />
      </div>
    </div>
  );
}

export default App;
