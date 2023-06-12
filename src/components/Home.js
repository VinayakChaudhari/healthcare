import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <>

            <header>
                <h2>Better Health, Better Tomorrow & Eat Good, Glow Good</h2>
                {/* <p>Our full stack curriculum is supported by a passionate open source community.</p>
                <p>Remove your fresher's tag, join Industrial Training program now.</p> */}
                <Link to="/products" class="button">Let's Get Started</Link>
            </header>

            <main>
                <div id="section0">
                    <img src="Images/background1.jpg" height="500px" width="1000px" alt="header"  />
                </div>
                <div id="section1">
                    <div class="section1-heading" id="products">
                        {/* <h2>Product Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque
                            rem nulla quas incidunt sint Id quo sed iure iste ipsam, vitae accusantium
                            voluptates iusto libero doloribus perferendis.</p> */}
                            <div></div>
                    </div>
                    <div class="card-view">
                        {/* <div class="card">
                            <img src="Images/book.svg" alt="Learn" />
                            <h2>Learn</h2>
                            <p>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</p>
                        </div> */}
                        <div class="card">
                            <img src="Images/pc.svg" alt="Build" />
                            <h2>Motivation</h2>
                            <p>Motivating the nurses is not the only issue, but motivating them 
                                in a way having their sense of responsibility 
                                toward their work to ensure the safety of the patients."</p>
                        </div>
                        <div class="card">
                            <img src="Images/connect.svg"  alt="Connect" />
                            <h2>Connect</h2>
                            <p>
Healthcare Connect is the premier community 
network for healthcare professionals and businesses</p>
                        </div>
                    </div>
                </div>
              
            </main>

        </>
    );
}
export default Home;
