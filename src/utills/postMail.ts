import emailjs from 'emailjs-com';

const publickKey = process.env.REACT_APP_PUBLICK_KEY || '';
const serviceId = process.env.REACT_APP_SERVICE_ID || '';
const TemplateId = process.env.REACT_APP_TEMPLATE_ID || '';

const postMail = (data: Record<string, unknown> | undefined) => {
	emailjs.init(publickKey);
	emailjs.send(serviceId, TemplateId, data).then(
		response => {
			console.log('SuCCESS!', response.status, response.text);
			alert('SuCCESS Contact');
		},
		error => {
			console.error('FAILED...', error);
			alert('FAILED Contact!!');
		}
	);
};

export default postMail;
