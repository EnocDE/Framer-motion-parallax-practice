// import './App.css'

import Parallax from "./Parallax";

function App() {
  return (
    <article className="h-[300vh] bg-gray-100">
      <Parallax>
        <section className="h-screen bg-white grid place-items-center">
          <h2 className="text-6xl text-center">Hero animado 🐧</h2>
        </section>
        <section className="h-screen rounded-xl bg-indigo-500">
          <h2 className="text-6xl text-center text-white pt-20">Section 💛</h2>
        </section>
      </Parallax>
    </article>
  );
}

export default App;
