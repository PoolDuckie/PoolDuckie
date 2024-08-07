// gangtxt.js - Your Ultimate Gang Text Generator
// Created with swagger and style by Druggmoney
//
// Ready to bring some street vibes to your site? Just assign the class 'Message' to any HTML element,
// set the 'data-length' attribute to the desired message length, and watch the magic happen!
//
// Usage:
// <div class="Message" data-length="999"></div><br>
// <div class="Message" data-length="6969"></div><br>
// <div class="Message" data-length="420"></div><br>
// <div class="Message" data-length="1234"></div><br>
//
// Feel the rhythm of the streets, and let your content hustle with the best of them!

console.log('Gang Text Generator: Online' );

// Array of gang texts
const gangTexts = [
    "Yo, whaddup homie? We be rollin' deep in the streets, hustlin' day and night. Ain't nobody messin' with our crew. We got the swagger, the style, and the drive to make things happen.",
    "Straight outta the block, we keep it real, hustlin' hard and livin' fast. Our squad's tight, we ain't got time for fakes. Always grindin', stackin' paper, stayin' sharp.",
    "In the hood, it's all about loyalty and respect. We run these streets, always on the move, makin' deals and stayin' fly. Ain't no one gonna bring us down.",
    "From the alleyways to the high rises, we got the game on lock. Keepin' it gangsta, one hustle at a time. We rise, we grind, we shine.",
    "Crew's tight, game's strong. We be out here every day, rain or shine, makin' moves and gettin' paid. Respect the hustle, fear the strength.",
    "Life in the fast lane, always on the edge. We got the style, the power, and the street smarts to make it big. Ain't no stoppin' us, we got this on lock.",
    "Hustle hard, play hard. From dusk till dawn, we out here, reppin' the crew and showin' the world how it's done. Keep it real, keep it gangsta.",
    "We be the kings of the streets, movin' in silence and makin' noise when needed. Every step calculated, every move precise. That's how we roll.",
    "Ain't no shortcuts in this life, just hard work and dedication. We stay true to the game, keepin' it 100 all day, every day. Gang life, straight up.",
    "Rollin' with the crew, day one homies. We got each other's backs, no matter what. In this game, it's all about trust, loyalty, and respect. Peace out, stay gangsta.",
    "From the corners of the hood to the bright lights of downtown, we hustle with pride and ambition, always movin' forward, never lookin' back.",
    "In the shadows of the city, we make our moves, swift and silent. We grind for the paper, but we live for the respect. This is our life, our legacy.",
    "Every night under the streetlights, we strategize and plan, always one step ahead. Our crew is unstoppable, driven by dreams and determination.",
    "Through the highs and lows, we stay solid. Our bond is unbreakable, forged in the fires of the streets. Together, we rise above the challenges.",
    "With every sunrise, we renew our hustle, facing the world with courage and confidence. The grind never stops, and neither do we.",
    "We navigate the concrete jungle with precision and purpose, each day a new chapter in our story. We are the architects of our destiny.",
    "In the heart of the city, we find our strength. The streets are our playground, and we dominate with skill and strategy.",
    "From dusk till dawn, our grind is relentless. We chase our dreams with passion, knowing that success is the only option.",
    "Our crew is a brotherhood, bound by trust and loyalty. We face every challenge head-on, emerging stronger each time.",
    "With grit and determination, we conquer the urban landscape. Our hustle is unmatched, and our spirit is unbreakable.",
    "Through the maze of city life, we carve our own path. Our journey is marked by resilience and relentless ambition.",
    "Every corner we turn, we face new opportunities. We seize each moment, turning dreams into reality with hard work and hustle.",
    "The rhythm of the streets echoes in our hearts. We move to its beat, driven by ambition and the desire to succeed.",
    "In the face of adversity, we stand tall. Our crew is our family, and together, we overcome all obstacles.",
    "With each step we take, we leave our mark. The city is our canvas, and we paint it with our stories of triumph and tenacity.",
    "Through the hustle and grind, we find our purpose. Our journey is a testament to our strength and unyielding spirit.",
    "From the first light of dawn to the dark of night, we hustle with unwavering determination. Our eyes are set on the prize, and we won't be stopped.",
    "The streets are our proving ground, where we test our mettle and push our limits. Our crew is fearless, and our resolve is unshakable.",
    "Every challenge we face is a stepping stone to greatness. We rise above the struggle, knowing that our hard work will pay off.",
    "Our journey is one of perseverance and passion. We hustle with heart, knowing that every effort brings us closer to our dreams.",
    "With every move we make, we inspire and uplift. Our crew is a force to be reckoned with, and our impact is undeniable.",
    "In the face of uncertainty, we find our strength. The streets are our battlefield, and we are the warriors who emerge victorious.",
    "From the alleys to the main streets, we keep hustlin', always movin', always groovin'.",
    "We make our mark in the city, every step a statement of our resilience.",
    "Under the streetlights, our dreams come alive, and we chase them relentlessly.",
    "The hustle is in our blood, and the grind never stops.",
    "Our legacy is written in the concrete, one hustle at a time.",
    "We rise from the ashes, stronger and more determined.",
    "The city is our canvas, and we paint it with our ambitions.",
    "In the urban jungle, we are the apex predators, always on the hunt.",
    "Our unity is our strength, and together we conquer all challenges.",
    "Every dawn brings new opportunities, and we seize them all.",
    "The rhythm of the hustle drives us forward, never looking back.",
    "We face the world with confidence, knowing our crew has our back.",
    "From the shadows, we emerge victorious, every single time.",
    "The grind is our anthem, and we live it every day.",
    "Our journey is marked by tenacity, ambition, and unbreakable spirit."
];

// Function to get a random message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * gangTexts.length);
    return gangTexts[randomIndex];
}

// Function to ensure the message meets the desired length by concatenating random messages
function generateMessage(maxLength) {
    let message = '';
    while (message.length < maxLength) {
        message += ' ' + getRandomMessage();
    }
    return message.substring(0, maxLength);
}

// Assign the random message to each HTML element with the class 'Message'
document.addEventListener('DOMContentLoaded', () => {
    const messageElements = document.querySelectorAll('.Message');
    messageElements.forEach(element => {
        const maxLength = parseInt(element.getAttribute('data-length'), 10);
        const randomMessage = generateMessage(maxLength);
        element.textContent = randomMessage;
    });
});
