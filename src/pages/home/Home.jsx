import react from "react";
import Profile2 from "../../assets/Profile2.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
const Home = () =>{
    return(
        <>
        <section className="home section grid">
            <img src={Profile2} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                       <span> I'm Snehil Chourasiya. </span>
                       FullStack Developer
                    </h1>

                    <p className="home__description">Lorem ipsum,
                     dolor sit amet consectetur adipisicing elit.
                      Architecto aliquam possimus, eveniet natus
                       illum commodi sint cupiditate alias non,
                        explicabo, nam veniam ea! Iste quibusdam 
                        sunt qui eveniet rerum reprehenderit?
                    </p>

                    <Link to='/about' className="button">
                        More About Me <span className="button__icon"><FaArrowRight/></span>
                    </Link>
                </div>
            </div>

        <div className="color__block"></div>
        </section>
        </>
    )
}
export default Home;