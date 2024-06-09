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

                    <p className="home__description">
                    Hello! I'm Snehil Chourasiya, a recent graduate in Electronics 
                    and Communication Engineering with a keen interest in technology. 
                    Currently interning at CredMarg Technologies Pvt. Ltd., I'm gaining 
                    valuable industry experience. Additionally, I completed a rigorous 
                    6-month full-stack Java course at Sathya Technologies, Hyderabad. 
                    With a solid academic background and practical skills, I'm excited 
                    to embark on new challenges and contribute to innovative projects.
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