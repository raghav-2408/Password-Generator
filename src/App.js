import "./App.css";

function App() {
  function copy() {
    let ele = document.getElementById("input_text");
    if (ele.value === "") {
      alert("Kindly generate the password to copy!");
    } else {
      //
      navigator.clipboard.writeText(ele.value);
      //
      alert("Text Copied");
    }
  }
  function generate() {
    let ele = document.getElementById("input_text");
    let size = document.getElementById("n2");
    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$ %^&*()?/";
    let generatedPass = "";
    for (let i = 0; i < size.value; i++) {
      let randomIndex = Math.floor(Math.random() * char.length);
      generatedPass += char.charAt(randomIndex);
    }
    ele.value = generatedPass;
    console.log("generated  : ", generatedPass);
  }
  function clear() {
    let ele = document.getElementById("input_text");
    let ele1 = document.getElementById("n2");
    ele.value = "";
    ele1.value = "";
    console.log("clear");
  }
  return (
    <>
      <div className="container my-4" style={{ border: "1px solid grey" }}>
        <h1 className="text-center my-4">Password Generator</h1>
        <div className="mb-3 my-4">
          <label htmlFor="">Enter the length </label>
          <input
            type="number"
            name="n1"
            id="n2"
            className="form-control py-3 "
          />
          <label htmlFor="">Password </label>
          <input
            type="text"
            name="text"
            id="input_text"
            className="form-control py-3 my-3"
          />
          <div className="button d-grid col-2 mx-auto">
            <button className="btn btn-dark my-3" id="cp" onClick={copy}>
              Copy
            </button>
            <button className="btn btn-dark" id="gen" onClick={generate}>
              Generate
            </button>
            <button className="btn btn-dark my-3" id="clr" onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
