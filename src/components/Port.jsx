

export default function Port() {
  return (
    <div>
         <section className="portfolio" id="portfolio">
        <h2 className="heading">Few  <span>Projects</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/895/791/datas/original.png" alt="" width="300px" height="200px"/>
                    <div className="portfolio-layer">
                        <h4>Expense Tracker</h4>
                        <p>Built using HTML, CSS and ReactJs and used firebase for authentication.</p>
                        <a href="https://github.com/spocombatshubham/Expense-tracker" target="_blank"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src="/public/images/souly.png" alt="" width="300px" height="200px"/>
                    <div className="portfolio-layer">
                        <h4>Soulify</h4>
                        <p>Built using HTML, CSS and Javascript where I used the concept of ArrayList and Arrow Functions with dynamic DOM manipulation.</p>
                        <a href="https://github.com/spocombatshubham/Soulify-Music-App" target="_blank"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src="/public/images/foody.png" alt="" width="300px" height="200px"/>
                    <div className="portfolio-layer">
                        <h4>Foodie App</h4>
                        <p>Used the concept of UseState in react and API implementation.</p>
                        <a href="#" target="_blank"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>
                {/* <div className="portfolio-box">
                    <img src="json-filter-sort.JPG" alt="" width="300px" height="200px"/>
                    <div className="portfolio-layer">
                        <h4>JSON-Filter-Sort</h4>
                        <p>Here i made Use of React JS,Javascript where I made Use of JSON data and sort the data based on filters</p>
                        <a href="https://saikumar6632.github.io/JSON-FILTER-SORT/" target="_blank"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src="Coding-academy.JPG" alt="" width="300px" height="200px"/>
                    <div className="portfolio-layer">
                        <h4>Coding Academy App</h4>
                        <p>Here i Used Bootstrap Framework,Various Frameworks including Navbar,Footer,etc</p>
                        <a href="https://saikumar6632.github.io/Coding-Academy-App/" target="_blank"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div> */}
                {/* <div className="portfolio-box">
                    <img src="Food-Delivery.JPG" alt="" width="300px" height="200px"/>
                    <div className="portfolio-layer">
                        <h4>Food Delivery App</h4>
                        <p>Its my First project Using HTML-CSS where i learnt ground basics </p>
                        <a href="https://saikumar6632.github.io/Food-delivery-app/" target="_blank"><i className='bx bx-link-external' ></i></a>
                    </div>
                </div> */}
                <h2 className="github-line">For More<span> Projects</span> Check out my Github!</h2>
            </div>
    </section>
    </div>
  )
}
