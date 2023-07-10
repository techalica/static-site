import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../containers/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
