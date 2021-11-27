import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import LastSec from "./components/LastSec";
import Cta from "./components/Cta";

import firstLeft from "./assets/featureImage.svg";
import secR from "./assets/whereHanging.svg";
import fandom from "./assets/fandom.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section
        bgColor={"#fff"}
        leftImg={firstLeft}
        title="Create an invite-only place where you belong"
        text="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      />
      <Section
        rightImg={secR}
        bgColor={"#f6f6f6"}
        title="Where hanging out is easy"
        text="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
      />
      <Section
        leftImg={fandom}
        title="From few to a fandom"
        text="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      />
      <LastSec />
      <Cta />
    </div>
  );
}

export default App;
