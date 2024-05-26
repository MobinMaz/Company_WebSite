import Header from './component/Header'
import OurTeam from './component/OurTeam'
import BlogBar from './component/BlogBar'
import Footer from './component/Footer'
import OurVideoBar from './component/OurVideoBar'

function App() {
  return (
    <>
      <div className='flex flex-col '>
        <Header />
        <OurVideoBar />
        <BlogBar />
        <OurTeam />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
