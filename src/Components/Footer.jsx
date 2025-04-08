import "../Css/Footer.css";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_odz445f',
            'template_56u3a38',
            form.current,
            'jcTN7bo3MKu3y0m9h'
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
                toast.success("✅ Message sent successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
                e.target.reset();
            },
            (error) => {
                console.error('FAILED...', error.text);
                toast.error("❌ Oops, something went wrong!", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            }
        );
    };

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <h2>Get In Touch</h2>
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" placeholder="Title of your message" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>

            <ToastContainer /> {/* ← Toast UI injected here */}

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} David Kumar | Built with ❤️ and React
            </div>
        </footer>
    );
}

export default Footer;
