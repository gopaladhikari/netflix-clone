import Rows from "./components/Rows";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="NETFLIX TRENDING" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* Container */}
    </div>
  );
}

export default App;
