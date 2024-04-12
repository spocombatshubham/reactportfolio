

export default function Header() {
  return (
    <>
    <div className="header">
        <a href="#" className="logo">Portfolio</a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <div className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
    </>
  )
}
