import "./App.css";

function App() {
  return (
    <div>
      <header
        style={{
          background: "lime",
          color: "yellow",
          fontFamily: '"Comic Sans MS", cursive',
          padding: "20px",
          fontSize: "40px",
          textAlign: "center",
          borderBottom: "5px dashed hotpink",
        }}
      >
        mr.kirby.biz
      </header>
      <marquee style={{ background: "red", color: "white", fontSize: "24px" }}>
        BUY KIRBY AIR RIDERS NOW!!!
      </marquee>
      <div
        style={{
          margin: "50px",
          border: "10px groove purple",
          padding: "20px",
          background: "orange",
          maxWidth: "500px",
          boxShadow: "5px 5px 0px 0px magenta",
        }}
      >
        <h1
          style={{
            fontFamily: '"Papyrus", fantasy',
            color: "blue",
            textAlign: "center",
            textDecoration: "underline wavy green",
          }}
        >
          Kirby Air Riders!
        </h1>
        <p style={{ fontSize: "30px", color: "green", textAlign: "center" }}>
          Price: $90 USD
        </p>
        <img
          src="/game.png"
          alt="Kirby Air Riders cover"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            border: "5px solid black",
          }}
        />
        <button
          style={{
            marginTop: "20px",
            width: "100%",
            background: "magenta",
            color: "black",
            fontSize: "25px",
            padding: "10px",
            fontFamily: '"Comic Sans MS", cursive',
            border: "4px dotted yellow",
          }}
        >
          BUY IT
        </button>
      </div>
    </div>
  );
}

export default App;
