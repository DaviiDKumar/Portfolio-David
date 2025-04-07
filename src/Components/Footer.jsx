import "../Css/Footer.css"; // assuming your styles are in Footer.css

function Footer() {
    return (
        <footer className="footer" id ="contact">
            <div className="footer-container">
                <h2>Get In Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} David Kumar | Built with ❤️ and React
            </div>
        </footer>
    );
}

export default Footer;
