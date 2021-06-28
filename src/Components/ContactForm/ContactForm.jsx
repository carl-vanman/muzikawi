import './ContactForm.css'

const ContactForm = () => {

	return (
		<form className="contact-form">
			<h4>Contact us</h4>
			<label type="text">
				<input placeholder="Name" />
			</label>
			<label type="text">
				<input placeholder="Email" />
			</label>
			<label type="text">
				<input placeholder="Message" />
			</label>
			<button>Send message</button>
		</form>
	)
}

export default ContactForm