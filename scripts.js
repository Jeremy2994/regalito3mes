const messageDiv = document.getElementById('message');
const loveMessages = [
    'Eres la luz de mi vida.',
    'Cada día contigo es un regalo.',
    'Te amo más de lo que las palabras pueden expresar.',
    'Eres mi vida y eres mi mundo.',
    'Ni en mis mejores sueños me imaginaba ver una sonrisa tan linda como la tuya.',
    'Tu nombre y apellido es lo mas bonito que puedo escuchar.',
    'Eres mi todo y más.',
    'No puedo imaginar mi vida sin ti.',
    'Eres lo mejor que me ha pasado.'
];

function displayLoveMessage() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    messageDiv.innerText = loveMessages[randomIndex];
}



displayLoveMessage();
displayLoveMessage();