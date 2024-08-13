import './Home.css';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img6 from './assets/img6.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import img7 from './assets/img7.jpeg';
import img8 from './assets/img8.jpeg';


function Home() {
    const books = [
        { title: "Introduction to Computer Science", img: img1, price: "₹1,750.50" },
        { title: "Computer Science with Python", img: img2, price: "₹980.00" },
        { title: "Fundamental Engineering Mathematics", img: img3, price: "₹442.00" },
        { title: "A Textbook of Engineering Physics", img: img6, price: "₹ 670.50" },
        { title: "GATE Computer Science & Technology ", img: img4, price: "₹550.00" },
        { title: "Harness Power of Computatioanl Systems", img: img5, price: "₹1,501.00" },
        { title: "Fundamental of Engineering Chemestry", img: img7, price: "₹703.50" },
        { title: "Introduction to Python with BigData", img: img8, price: "₹607.00" }
    ];

    return (
        <>
            
            <div className='home-outerbox'>
                <div className='home-innerbox'>
                    <section className="shop-section">
                        {books.map((book, index) => (
                            <section className="shop" key={index}>
                                <section className="shop-content">
                                    <h2>{book.title}</h2>
                                    <div
                                        className="shop-img"
                                        style={{ backgroundImage: `url(${book.img})` }}
                                    />
                                    <p>{book.price}</p>
                                </section>
                            </section>
                        ))}
                    </section>
                    
                </div>
            </div>
        </>
    );
}

export default Home;
