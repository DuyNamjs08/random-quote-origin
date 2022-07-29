import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft  } from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect} from "react";
const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
function App() {
  const [quote, setQuote] = useState(
    "Every child is an artist. The problem is how to remain an artist once he grows up."
  );
  const [author, setAuthor] = useState("Jim Rohn");
  const [random, setRandom] = useState(0);
  const [color, setColor] = useState("#e74c3c");
  const [data, setData] = useState(null);
  const [show , setShow] = useState(false)
 
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((json) => {
        return (
          setData(json.quotes), console.log("check data by fetch", json.quotes)
        );
      });
  }, [random, setRandom]);

  //  const getData =()=> {
  //   var xhttp = new XMLHttpRequest()
  //   xhttp.addEventListener("load", () => {
  //     console.log("checkkkkk =>>>", xhttp.responseText);
  //     const test = JSON.parse(xhttp.responseText).quotes;
  //     console.log(test);
  //     setData(test);
  //   });
  //   xhttp.open(
  //     "GET",
  //     "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  //   );
  //   xhttp.send();
  // }
  // useEffect(()=>{
  //     getData();
  // },[])

  const handleChangeQuote = () => {
      const randomNumber = Math.floor(Math.random() * data.length);
      setRandom(randomNumber);
      setQuote(data[randomNumber].quote);
      setAuthor(data[randomNumber].author);
      setColor(colorArray[randomNumber]);
      setShow(!show);
      
  };

  return (
    <div className="app" style={{ background: color }}>
      <div id="quote-box" style={{ color: color }}>
        <div className={`quote-text ${show ? "show" : 'hide'}`}>
          <p>
            <FontAwesomeIcon style={{ marginRight: 10 }} icon={faQuoteLeft} />
            {quote}
          </p>
        </div>
        <div className='quote-author'>
          <p className={show ? "show" : 'hide'}>{author}</p>
        </div>
        <div className="buttons">
          <div className="links">
            <a
              style={{ color: color }}
              className="button-a"
              id="tweet-quote"
              href="http://google.com"
            >
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a
              style={{ color: color }}
              className="button-a"
              id="tumblr-quote"
              href="http://google.com"
            >
              <i className="fa-brands fa-tumblr-square"></i>
            </a>
          </div>
          <button
            style={{ background: color }}
            className="button"
            id="new-quote"
            onClick={handleChangeQuote}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
