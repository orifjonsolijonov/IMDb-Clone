import Navbar from "../components/navbar/navbar.jsx"
import NewFeaturedCard from '../components/newFeaturedCard/newFeaturedCard.jsx'
import TopPicks from '../components/newFeaturedCard/TopPicks.jsx'
import NewTopIMDbCard from '../components/newFeaturedCard/NewTopIMDbCard.jsx'
import CreateSection from '../components/newFeaturedCard/CreateSection.jsx'
import StreamingCard from '../components/newFeaturedCard/StreamingCard.jsx'

import "./app.css"
function App() {
  return (
    <>

      <Navbar />
      <NewFeaturedCard/>
      <TopPicks />
      <NewTopIMDbCard/>
      <CreateSection/>
      <StreamingCard />
    </>
  )
}

export default App
