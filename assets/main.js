// Function to send email
function sendEmail(to, subject, body) {
	window.location = `mailto:${encodeURI(to)}?subject=${encodeURI(subject)}&body=${encodeURI(body)}`;
}