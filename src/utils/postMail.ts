import emailjs from 'emailjs-com';

console.log(`${process.env.REACT_APP_PUBLICK_KEY}`);
console.log(process.env.REACT_APP_SERVICE_ID);
console.log(process.env.REACT_APP_TEMPLATE_ID);

const publickKey = process.env.REACT_APP_PUBLICK_KEY || '';
const serviceId = process.env.REACT_APP_SERVICE_ID || '';
const TemplateId = process.env.REACT_APP_TEMPLATE_ID || '';

const postMail = (data: Record<string, unknown> | undefined) => {
	emailjs.init(publickKey);
	emailjs.send(serviceId, TemplateId, data).then(
		response => {
			console.log('SuCCESS!', response.status, response.text);
		},
		error => {
			console.log('FAILED...', error);
		}
	);
};

export default postMail;
