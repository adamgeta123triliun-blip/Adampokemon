import "./App.css";
import Navbar from "./component/navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="place-items-center grid grid-cols-2 w-full h-dvh">
        <div className="flex-col max-w-2xl space-y-5 p-4">
          <h1 className="text-4xl font-bold text-neutral-900">
            adam kurniawan
          </h1>

          <p className="text-lg text-neutral-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            pariatur, quibusdam provident veniam neque aut soluta optio vel.
            Incidunt, quos.
          </p>

          <div className="flex gap-4">
            <button className="bg-neutral-800 text-neutral-200 py-1.5 px-4 rounded-lg">
              Download CV
            </button>

            <button className="bg-neutral-200 text-neutral-800 py-1.5 px-4 rounded-lg">
              Kontak Saya
            </button>
          </div>
        </div>
      </main>

      {/* Jangan Diikutin */}
    </>
  );
}

export default App;
