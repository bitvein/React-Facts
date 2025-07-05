import logo from "/src/images/react-logo.png";

export default function Navbar() {
  return (
    <>
      {/* <h1>Navbar goes here</h1> */}
      <header>
        <nav>
          <img src={logo} alt="react logo" />
          <span>ReactFacts</span>
        </nav>
      </header>
    </>
  );
}
