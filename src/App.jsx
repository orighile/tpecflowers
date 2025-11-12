import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaBars, FaTimes } from "react-icons/fa";
import { MdEventNote, MdCameraAlt, } from "react-icons/md";
import { GiFlowerPot, GiFlowers } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import './App.css';

import heroImage from "./assets/image/hero.jpeg";
import gallery1 from "./assets/image/gallery2.jpeg";
import gallery2 from "./assets/image/gallery 6.jpeg";
import gallery3 from "./assets/image/gallery1.jpeg";
import gallery4 from "./assets/image/gallery3.jpeg";
import gallery5 from "./assets/image/gallery4.jpeg";
import gallery6 from "./assets/image/gallery 5.jpeg";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const galleryImages = [
    { id: 1, url: gallery1, alt: "Pink Rose Wall" },
    { id: 2, url: gallery2, alt: "White Hydrangea Display" },
    { id: 3, url: gallery3, alt: "Mixed Floral Arrangement" },
    { id: 4, url: gallery4, alt: "Elegant Peony Wall" },
    { id: 5, url: gallery5, alt: "Rustic Garden Flowers" },
    { id: 6, url: gallery6, alt: "Tropical Flower Display" }
  ];

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <span style={styles.logoMain}>TPEC</span>{" "}
          <span style={styles.logoSub}>Flowers</span>
        </div>
        <div className="menu-icon" style={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={isMenuOpen ? {...styles.navLinks, ...styles.navLinksActive} : styles.navLinks}>
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroLeft}>
            <button className="premium-btn" style={styles.premiumBtn}>✨ Premium Floral Artistry</button>

            <h1 style={styles.heroH1}>
              Transform Your Space with <br />
              <span style={styles.heroSpan}>Exquisite Floral Artistry</span>
            </h1>

            <p style={styles.heroP}>
              Discover the unparalleled beauty and elegance of TPEC Flowers'
              bespoke flower walls, perfect for any occasion or setting.
            </p>

            <div style={styles.heroButtons}>
              <button className="btn explore-btn" style={{ ...styles.btn, ...styles.exploreBtn }}>Explore Our Collections</button>
              <button className="btn quote-btn" style={{ ...styles.btn, ...styles.quoteBtn }}>Get a Free Quote</button>
            </div>
          </div>

          <div className="hero-right" style={styles.heroRight}>
            <div style={styles.imageCard}>
              <img
                src={heroImage}
                alt="Flower Wall"
                style={styles.heroImage}
              />
              <div style={styles.imageText}>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={styles.description}>
        <h1 style={styles.descH1}>Why Choose TPEC Flowers?</h1>
        <p style={styles.descP}>We bring unmatched quality, creativity, and service to every floral creation</p>
      </div>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About TPEC Flowers</h2>
          <p style={styles.aboutP}>
            At TPEC Flowers, we specialize in creating stunning floral experiences that transform ordinary spaces into extraordinary memories. With years of expertise in floral design and event decoration, we pride ourselves on delivering premium quality flower walls and arrangements that exceed expectations.
          </p>
          <p style={styles.aboutP}>
            Our passion for flowers and attention to detail ensures that every creation is a masterpiece. From intimate celebrations to grand events, we work closely with our clients to bring their vision to life with fresh, vibrant blooms and innovative designs.
          </p>
          <div style={styles.statsContainer}>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>20+</h3>
              <p style={styles.statLabel}>Events Decorated</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>100%</h3>
              <p style={styles.statLabel}>Client Satisfaction</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statNumber}>2+</h3>
              <p style={styles.statLabel}>Years Of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.subtitle}>Comprehensive floral solutions for every occasion</p>
          
          <div style={styles.servicesGrid}>
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}><GiFlowerPot /></div>
              <h3 style={styles.serviceTitle}>Flower Walls</h3>
              <p style={styles.serviceDesc}>Custom-designed flower walls perfect for weddings, photoshoots, and corporate events. Choose from various colors and styles.</p>
            </div>
            
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}><MdEventNote /></div>
              <h3 style={styles.serviceTitle}>Event Decoration</h3>
              <p style={styles.serviceDesc}>Complete event decoration services including centerpieces, aisle arrangements, and stage designs for unforgettable celebrations.</p>
            </div>
            
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}><GiFlowers /></div>
              <h3 style={styles.serviceTitle}>Wedding Florals</h3>
              <p style={styles.serviceDesc}>Breathtaking bridal bouquets, boutonnieres, and ceremony decorations tailored to your wedding theme and style.</p>
            </div>
            
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}><BsBuilding /></div>
              <h3 style={styles.serviceTitle}>Corporate Events</h3>
              <p style={styles.serviceDesc}>Professional floral arrangements for conferences, product launches, and corporate celebrations that make lasting impressions.</p>
            </div>
            
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}><IoMdColorPalette /></div>
              <h3 style={styles.serviceTitle}>Custom Designs</h3>
              <p style={styles.serviceDesc}>Bespoke floral installations and unique arrangements crafted to match your specific vision and requirements.</p>
            </div>
            
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}><MdCameraAlt /></div>
              <h3 style={styles.serviceTitle}>Photoshoot Backdrops</h3>
              <p style={styles.serviceDesc}>Instagram-worthy flower walls and setups perfect for professional photoshoots, content creation, and special moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={styles.gallerySection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Gallery</h2>
          <p style={styles.subtitle}>Explore our stunning floral creations</p>

          <div style={styles.galleryGrid}>
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item" style={styles.galleryItem}>
                <img src={image.url} alt={image.alt} style={styles.galleryImage} />
                <div style={styles.galleryOverlay}>
                  <p style={styles.galleryText}>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <p style={styles.subtitle}>Let's create something beautiful together</p>
          
          <div style={styles.contactContent}>
            <div style={styles.contactInfo}>
              <h3 style={styles.contactInfoTitle}>Contact Information</h3>
              
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}><FaMapMarkerAlt /></span>
                <div>
                  <h4 style={styles.infoTitle}>Location</h4>
                  <p style={styles.infoText}>Austin, Texas</p>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}><FaEnvelope /></span>
                <div>
                  <h4 style={styles.infoTitle}>Email</h4>
                  <p style={styles.infoText}>info@tpecflowers.com</p>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}><FaPhone /></span>
                <div>
                  <h4 style={styles.infoTitle}>Phone</h4>
                  <p style={styles.infoText}>+1 (817) 917-9518</p>
                </div>
              </div>
            </div>
            
            <div style={styles.contactForm}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (621) 000 00"
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell us about your event or project..."
                  style={{...styles.input, ...styles.textarea}}
                ></textarea>
              </div>
              
              <button onClick={handleSubmit} className="btn submit-btn" style={{...styles.btn, ...styles.submitBtn}}>Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.footerCol}>
              <div style={styles.footerLogo}>
                <span style={styles.logoMain}>TPEC</span>{" "}
                <span style={styles.logoSub}>Flowers</span>
              </div>
              <p style={styles.footerP}>
                Creating unforgettable floral experiences for every special moment in your life.
              </p>
              <div style={styles.socialLinks}>
                <a href="https://facebook.com/tpecflowers" target="_blank" rel="noopener noreferrer" className="social-link" style={styles.socialLink}>
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com/tpecflowers" target="_blank" rel="noopener noreferrer" className="social-link" style={styles.socialLink}>
                  <FaInstagram />
                </a>
                <a href="https://pinterest.com/tpecflowers" target="_blank" rel="noopener noreferrer" className="social-link" style={styles.socialLink}>
                  <FaPinterestP />
                </a>
              </div>
            </div>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerH4}>Quick Links</h4>
              <ul className="footer-list" style={styles.footerList}>
                <li style={styles.footerItem}><a href="#home" className="footer-link">Home</a></li>
                <li style={styles.footerItem}><a href="#about" className="footer-link">About Us</a></li>
                <li style={styles.footerItem}><a href="#services" className="footer-link">Services</a></li>
                <li style={styles.footerItem}><a href="#gallery" className="footer-link">Gallery</a></li>
              </ul>
            </div>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerH4}>Services</h4>
              <ul className="footer-list" style={styles.footerList}>
                <li style={styles.footerItem}><a href="#services" className="footer-link">Flower Walls</a></li>
                <li style={styles.footerItem}><a href="#services" className="footer-link">Event Decoration</a></li>
                <li style={styles.footerItem}><a href="#services" className="footer-link">Wedding Florals</a></li>
                <li style={styles.footerItem}><a href="#services" className="footer-link">Corporate Events</a></li>
              </ul>
            </div>
            
            <div style={styles.footerCol}>
              <h4 style={styles.footerH4}>Contact</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerItem}>Austin, Texas</li>
                <li style={styles.footerItem}>info@tpecflowers.com</li>
                <li style={styles.footerItem}>+1 (817) 917-9518</li>
              </ul>
            </div>
          </div>

          <div style={styles.footerBottom}>
            <p style={styles.footerBottomText}>&copy; 2025 TPEC Flowers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "'Poppins', sans-serif",
    color: '#212529',
    background: '#fff'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 8%',
    background: '#fff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700
  },
  logoMain: {
    color: '#f85faf'
  },
  logoSub: {
    background: 'linear-gradient(90deg, #f85faf, #fc2a71)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  menuIcon: {
    display: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: '#343a40'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  hero: {
    background: 'linear-gradient(180deg, #fff0f6, #f9f1ff)',
    padding: '5rem 8%'
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '5rem',
    flexWrap: 'wrap'
  },
  heroLeft: {
    flex: 1,
    maxWidth: '550px',
    minWidth: '300px'
  },
  premiumBtn: {
    background: '#ffe1ef',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    fontWeight: 500,
    color: '#f85faf',
    marginBottom: '1.8rem'
  },
  heroH1: {
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: '1.5rem',
    color: '#111'
  },
  heroSpan: {
    display: 'block',
    background: 'linear-gradient(90deg, #f85faf, #fc2a71)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  heroP: {
    color: '#495057',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    marginBottom: '2.5rem'
  },
  heroButtons: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  btn: {
    padding: '1rem 1.8rem',
    fontSize: '1rem',
    borderRadius: '50px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  exploreBtn: {
    background: 'linear-gradient(90deg, #f039a4, #c74ae0)',
    color: '#fff',
    border: 'none'
  },
  quoteBtn: {
    background: 'transparent',
    color: '#f85faf',
    border: '2px solid #f85faf'
  },
  heroRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: '300px'
  },
  imageCard: {
    position: 'relative',
    maxWidth: '480px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 6px 25px rgba(0,0,0,0.15)'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    display: 'block'
  },
  imageText: {
    position: 'absolute',
    bottom: '30px',
    left: '30px',
    color: '#fff',
    textShadow: '0 2px 5px rgba(0,0,0,0.6)'
  },
  imageH2: {
    fontSize: '2rem',
    fontWeight: 600,
    margin: 0
  },
  imageP: {
    fontSize: '1.1rem',
    margin: '0.5rem 0 0'
  },
  description: {
    textAlign: 'center',
    padding: '5rem 8%'
  },
  descH1: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#111'
  },
  descP: {
    fontSize: '1.1rem',
    color: '#495057'
  },
  aboutSection: {
    padding: '5rem 8%',
    background: '#f8f9fa'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#111'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#495057',
    marginBottom: '3rem'
  },
  aboutP: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#495057',
    marginBottom: '1.5rem'
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '3rem',
    flexWrap: 'wrap',
    gap: '2rem'
  },
  stat: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '3rem',
    color: '#f85faf',
    margin: 0
  },
  statLabel: {
    fontSize: '1rem',
    color: '#495057',
    marginTop: '0.5rem'
  },
  servicesSection: {
    padding: '5rem 8%',
    background: '#fff'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  serviceCard: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#f85faf'
  },
  serviceTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#111'
  },
  serviceDesc: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#495057'
  },
  gallerySection: {
    padding: '5rem 8%',
    background: '#f8f9fa'
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden'
  },
  galleryImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.3s'
  },
  galleryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(248, 95, 175, 0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0
  },
  galleryText: {
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 600
  },
  contactSection: {
    padding: '5rem 8%',
    background: '#fff'
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginTop: '3rem'
  },
  contactInfo: {
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px'
  },
  contactInfoTitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#111'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.8rem',
    gap: '1rem'
  },
  infoIcon: {
    fontSize: '1.5rem',
    color: '#f85faf'
  },
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '0.3rem',
    color: '#111'
  },
  infoText: {
    fontSize: '1rem',
    color: '#495057',
    margin: 0
  },
  contactForm: {
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: '#111'
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  textarea: {
    resize: 'vertical',
    fontFamily: "'Poppins', sans-serif"
  },
  submitBtn: {
    width: '100%',
    background: 'linear-gradient(90deg, #f039a4, #c74ae0)',
    color: '#fff',
    border: 'none',
    marginTop: '1rem'
  },
  footer: {
    background: '#111',
    color: '#fff',
    padding: '3rem 8% 1rem'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerCol: {
    marginBottom: '1rem'
  },
  footerLogo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '1rem'
  },
  footerP: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    color: '#adb5bd'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem'
  },
  socialLink: {
    fontSize: '1.5rem',
    color: '#f85faf',
    textDecoration: 'none'
  },
  footerH4: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#fff'
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  footerItem: {
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    color: '#adb5bd'
  },
  footerLink: {
    color: '#adb5bd',
    textDecoration: 'none'
  },
  footerBottom: {
    borderTop: '1px solid #333',
    paddingTop: '1.5rem',
    textAlign: 'center'
  },
  footerBottomText: {
    fontSize: '0.9rem',
    color: '#adb5bd',
    margin: 0
  }
};

export default App;