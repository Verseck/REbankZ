import Cards from "./Home/components/Cards"
import Card from "./Home/components/Card"
import Footer from "./Home/components/Footer"
import Section from "./Home/components/Section"
import Header from "./Home/components/Header"
import Sobre from "./Home/components/Sobre"



function Home(){
    

    return(
        <div className="dark:bg-black dark:bg-opacity-75 dark:text-white">
            <Header/>
            <Section/>
            <Cards/>
            <Card/>
            <Sobre/>
            <Footer/>
        </div>
    )
}
export default Home