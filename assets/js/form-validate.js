// ============================================
// EmailJS Configuration
// ============================================
const EMAILJS_PUBLIC_KEY = 'vnZ9aLQQ9bDbhzuWu';
const EMAILJS_SERVICE_ID = 'service_lqa972i';
const EMAILJS_TEMPLATE_ID = 'template_l8zkzwo';

// Initialize EmailJS
(function(){
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Form Validation & Submission Function
function valid_datas( f ){
	
	// Validation
	if( f.name.value.trim() == '' ){
		jQuery('#form_status').html('<span class="wrong">Nama harus diisi!</span>');
		notice( f.name );
	} else if( f.email.value.trim() == '' || !isValidEmail(f.email.value) ){
		jQuery('#form_status').html('<span class="wrong">Email harus diisi dengan format yang benar!</span>');
		notice( f.email );
	} else if( f.subject.value.trim() == '' ){
		jQuery('#form_status').html('<span class="wrong">Subjek harus diisi!</span>');
		notice( f.subject );
	} else if( f.message.value.trim() == '' ){
		jQuery('#form_status').html('<span class="wrong">Pesan harus diisi!</span>');
		notice( f.message );
	} else {
		// All validations passed, send email via EmailJS
		sendEmail(f);
	}
	
	return false;
}

// Email validation helper
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Send email using EmailJS
function sendEmail(form) {
	// Show loading state
	jQuery('#form_status').html('<span class="loading">Mengirim pesan Anda...</span>');
	jQuery('#fruitkha-contact').animate({opacity:0.3});
	jQuery('#fruitkha-contact').find('input,textarea,button').attr({'disabled':'disabled'});
	
	// Prepare template parameters
	const templateParams = {
		name: form.name.value.trim(),
		email: form.email.value.trim(),
		phone: form.phone.value.trim() || '-',
		subject: form.subject.value.trim(),
		message: form.message.value.trim()
	};
	
	// Send email via EmailJS
	emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
		.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			
			// Show success message
			jQuery('#form_status').html(
				'<span class="success">✓ Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.</span>'
			);
			
			// Reset form
			jQuery('#fruitkha-contact')[0].reset();
			
			// Re-enable form after 3 seconds
			setTimeout(function(){
				jQuery('#fruitkha-contact').animate({opacity:1});
				jQuery('#fruitkha-contact').find('input,textarea,button').removeAttr('disabled');
				jQuery('#form_status').html('');
			}, 3000);
			
		}, function(error) {
			console.log('FAILED...', error);
			
			// Show error message
			jQuery('#form_status').html(
				'<span class="wrong">✗ Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.</span>'
			);
			
			// Re-enable form
			jQuery('#fruitkha-contact').animate({opacity:1});
			jQuery('#fruitkha-contact').find('input,textarea,button').removeAttr('disabled');
		});
}

// Notice function for highlighting invalid fields
function notice( f ){
	jQuery('#fruitkha-contact').find('input,textarea').css('border','none');
	f.style.border = '1px solid red';
	f.focus();
}