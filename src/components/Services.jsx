

export default function Services() {
  return (
    <div>
         <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>
        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt' ></i>
                <h3>SDE Intern</h3>
                <p>I recently completed my SDE Internship at ITJOBSX where I worked with HTML, CSS, ReactJs and SQL.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bx-test-tube'></i>
                <h3>Problem Solving</h3>
                <p>I love to solve problems with my coding skills. I really love solving DSA problems and writing code in C++ and other languages.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bx-data' ></i>
                <h3>Web Development</h3>
                <p>I have a keen interest in developing web applications using latest tookls.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
    </div>
  )
}
