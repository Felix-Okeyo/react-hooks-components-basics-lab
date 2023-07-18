import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About (){
  /* write an <About> component here */
  return (
    <div id="about">
        <h2>About</h2>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      {/* add you home and about components nested in the navbar here */}
      <div id="home">{Home}</div>
      <div id="about">{About}</div>
    </div>
  );
}

export default App;
