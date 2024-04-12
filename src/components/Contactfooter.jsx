

export default function Contactfooter() {
  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
      {/* Footer Design */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by ShubhamKumarSingh | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><i className='bx bx-up-arrow-alt' ></i></a>
        </div>
      </footer>
      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    </div>
  );
}
