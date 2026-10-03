import { useState } from "react";
import "./App.css";
import { CardComponent } from "./_components/card.jsx";
import pokemon from "./data/pokemon.json";

function App() {
  return (
    <main className="p-6 grid grid-cols-4 w-full max-w-7x1 gap-4">
      {pokemon.map((item) => {
        return (
          <CardComponent
            key={item.title}
            judul={item.title}
            deskripsi={item.description}
            gambar={item.image}
          />
        );
      })}
    </main>
  );
}

export default App;
