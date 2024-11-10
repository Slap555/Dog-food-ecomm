import Navbar from "./components/common/Navbar/Navbar";
import AboutUsPage from "./components/pages/AboutUsPage";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <Homepage />
        {/* <AboutUsPage /> */}
      </div>
    </>
  );
}

export default App;
