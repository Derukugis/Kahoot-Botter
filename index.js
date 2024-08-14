'use strict'
const puppeteer = require('puppeteer');
const prompt = require("prompt-sync")({ sigint: true });

var pin = prompt("Enter game pin: ");
var name = prompt("Enter Username: ");
var chosenchar = prompt("Choose an Avatar: ");
var chosenaccessory = prompt("Choose an Accesory: ");

var running = false;

var witch = "item-3350";
var pumpkin = "item-1500";
var frankenstien = "item-1450";
var ghost = "item-1200";
var batglasses = "item-1150";
var Khat = "item-1550";
var flowerhat = "item-3100";
var crown = "item-3150";
var viking = "item-3200";
var graduate = "item-3250";
var cowboy = "item-3300";
var headphones = "item-3400";
var hearts = "item-3450";
var heartglasses = "item-3500";
var sciencegoggles = "item-3550";
var hardhat = "item-5300";
var eyepatch = "item-3600";
var monocole = "item-1250";
var judge = "item-1300";
var einstien = "item-1350";
var elvis = "item-1400";
var sunglasses = "item-3650";
var tophat = "item-3700";
var propeller = "item-3750";
var partyhat = "item-3800";
var disguise = "item-3850";
var baby = "item-3900";
var pancakes = "item-3950";
var icecream = "item-4000";
var coolglasses = "item-4050";
var goggles = "item-4100";
var football = "item-4150";
var astronaut = "item-4200";

if (chosenaccessory == "witch","Witch") {
	chosenaccessory = "item-3350"
}
if (chosenaccessory == "pumpkin","Pumpkin") {
	chosenaccessory = "item-1500"
}
if (chosenaccessory == "frankenstien","Frankenstien") {
	chosenaccessory = "item-1450"
}
if (chosenaccessory == "ghost","Ghost") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "batglasses","Batglasses","batGlasses","BatGlasses","bat glasses","Bat glasses","bat Glasses","Bat Glasses","bat","Bat") {
	chosenaccessory = "item-1150"
}
if (chosenaccessory == "hat","Hat","cap","Cap","Khat","khat","KHat","kHat","k-hat","K-hat","K-Hat","Kcap","KCap","kCap","kcap","K-cap","K-Cap","k-cap","K hat","K Hat","k Hat","k hat","k cap","K cap","K Cap","k Cap") {
	chosenaccessory = "item-1550"
}
if (chosenaccessory == "flowerhat","Flowerhat","FlowerHat","flowerHat","Flower","flower","flowers","Flowers","reeth","Reeth","Flower reeth","Flower Reeth","flower Reeth","Floral hat","flower ring","Flower ring","flower Ring","Flower Ring","Floral ring","floral Ring", "Floral Ring","floral ring") {
	chosenaccessory = "item-3100"
}
if (chosenaccessory == "crown","Crown") {
	chosenaccessory = "item-3150"
}
if (chosenaccessory == "viking","Viking","Viking helmet","Viking Helmet","viking Helmet","viking helmet") {
	chosenaccessory = "item-3200"
}
if (chosenaccessory == "graduate","Graduate","Graduate hat","Graduate Hat","graduate Hat","Graduate cap","Graduate Cap","graduate Hat","Scholar","scholar","Scholar hat","scholar hat","Scholar Hat","scholar Hat","Scholar cap","Scholar Hat","scholar Hat") {
	chosenaccessory = "item-3250"
}
if (chosenaccessory == "cowboy","Cowbow","cowbow hat","Cowbow Hat","Cowboy hat","cowboy Hat") {
	chosenaccessory = "item-3300"
}
if (chosenaccessory == "headphones","Headphones","gamer","Gamer","Gaming headphones","Gaming Headphones","gaming headphones","gaming Headphones") {
	chosenaccessory = "item-3400"
}
if (chosenaccessory == "heart","Heart","hearts","Hearts","Love heart","Love Heart","love Heart","Love hearts","love heart","Love Hearts","love Hearts","love hearts") {
	chosenaccessory = "item-3450"
}
if (chosenaccessory == "heart glasses","Heart glasses","Heart Glasses","heart Glasses","heart sunglasses","Heart sunglasses","Heart Sunglasses","heart Sunglasses","love glasses","Love glasses","love Glasses","Love Glasses","love sunglasses","Love Sunglasses","Love sunglasses","love Sunglasses") {
	chosenaccessory = "item-3500"
}
if (chosenaccessory == "sciencegoggles","ScienceGoggles","Sciencegoggles","scienceGoggles","science goggles","Science goggles","Science Goggles","science Goggles","Safety goggles","safety goggles","Safety Goggles","safety Goggles","Safety glasses","safety glasses","Safety Glasses","safety Glasses") {
	chosenaccessory = "item-3550"
}
if (chosenaccessory == "hardhat","Hardhat","HardHat","hardHat","hard hat","Hard hat","Hard Hat","hard Hat","builder","Builder","builder hat","Builder hat","Builder Hat","builder Hat","construction","Construction") {
	chosenaccessory = "item-5300"
}
if (chosenaccessory == "eyepatch","Eyepatch","eyePatch","EyePatch","pirate","Pirates") {
	chosenaccessory = "item-3600"
}
if (chosenaccessory == "monocole","Monocole","monicole","Monicole","monical","Monical") {
	chosenaccessory = "item-1250"
}
if (chosenaccessory == "judge","Judge") {
	chosenaccessory = "item-1300"
}
if (chosenaccessory == "einstien","Einstien") {
	chosenaccessory = "item-1350"
}
if (chosenaccessory == "elvis","Elvis","80s","eighties","Eighties","hair","Hair") {
	chosenaccessory = "item-1400"
}
if (chosenaccessory == "sunglasses","Sunglasses","shades","Shades") {
	chosenaccessory = "item-3650"
}
if (chosenaccessory == "tophat","Tophat","TopHat","topHat","top hat","Top hat","Top Hat","top Hat") {
	chosenaccessory = "item-3700"
}
if (chosenaccessory == "propeller","Propeller","propeller hat","Propeller hat","Propeller Hat","propeller Hat","propeller cap","Propeller cap","Propeller Cap","propeller Cap") {
	chosenaccessory = "item-3750"
}
if (chosenaccessory == "Party","party","partyhat","Partyhat","PartyHat","partyHat","party hat","Party hat","Party Hat","party Hat") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "disguise","Disguise","mustache","Mustache","nose","Nose") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "baby","Baby","dummy","Dummy","pacifier","Pacifier") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "Pancake","Pancake","pancakes","Pancakes") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "icecream","Icecream","IceCream","iceCream","ice-cream","Ice-cream","Ice-Cream","ice-Cream","ice cream","Ice cream","Ice Cream","ice Cream") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "coolglasses","Coolglasses","CoolGlasses","coolGlasses","cool glasses","Cool glasses","Cool Glasses","cool Glasses","cool sunglasses","Cool sunglasses","Cool Sunglasses","cool Sunglasses","rainbow glasses","Rainbow glasses","Rainbow Glasses","rainbow Glasses","rainbow sunglasses","Rainbow sunglasses","Rainbow Sunglasses","rainbow Sunglasses") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "Goggles","goggles","swimming goggles","Swimming goggles","Swimming Goggles","swimming Goggles") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "football","Football","football helmet","Football helmet","Football Helmet","football Helmet") {
	chosenaccessory = "item-1200"
}
if (chosenaccessory == "astronaut","Astronaut","astronaut helmet","Astronaut helmet","Astronaut Helmet","astronaut Helmet","astronaut suit","Astronaut suit","Astronaut Suit","astronaut Suit") {
	chosenaccessory = "item-1200"
}

(async () => {
	// Launch the browser
	const browser = await puppeteer.launch({
		browserWSEndpoint: 'wss://chrome.browserless.io?--user-data-dir=/tmp/session',
		headless: false,
		defaultViewport: null,
		userDataDir: 'User Data',
		devtools: false,
		ignoreDefaultArgs: [
		'--autoplay-policy=user-gesture-required',
		'--disable-background-networking',
		'--disable-background-timer-throttling',
		'--disable-backgrounding-occluded-windows',
		'--disable-breakpad',
		'--disable-client-side-phishing-detection',
		'--disable-component-update',
		'--disable-default-apps',
		'--disable-dev-shm-usage',
		'--disable-domain-reliability',
		'--disable-extensions',
		'--disable-features=AudioServiceOutOfProcess',
		'--disable-gl-drawing-for-tests',
		'--disable-hang-monitor',
		'--disable-ipc-flooding-protection',
		'--disable-notifications',
		'--disable-offer-store-unmasked-wallet-cards',
		'--disable-popup-blocking',
		'--disable-print-preview',
		'--disable-prompt-on-repost',
		'--disable-renderer-backgrounding',
		'--disable-setuid-sandbox',
		'--disable-speech-api',
		'--disable-sync',
		'--hide-scrollbars',
		'--ignore-gpu-blacklist',
		'--metrics-recording-only',
		'--mute-audio',
		'--no-default-browser-check',
		'--no-first-run',
		'--no-pings',
		'--no-sandbox',
		'--no-zygote',
		'--password-store=basic',
		'--use-gl=swiftshader',
		'--use-mock-keychain',
		]
	});

	// Create a page
for (let i = 0; i < 3; i++) {
		const page = await browser.newPage();
	
		const blocked_domains = [
		'https://cdn.amplitude.com',
		'https://sentry.io/',
		'https://snippet.maze.co/',
		'https://googlesyndication.com',
		'https://adservice.google.com',];
	
		await page.setRequestInterception(true);
		page.on('request', (req) => {
			const url = req.url()
			if (req.resourceType() === 'image' || blocked_domains.some(domain => url.includes(domain)) || req.resourceType() === 'stylesheet' || req.resourceType() === 'font') {
				req.abort();
			} else {
				req.continue();
			}})

		
		await page.goto('https://kahoot.it', { waitUntil: 'networkidle2'});
		
		await page.type('input[name="gameId"]', pin)
	
		// Search for submit button
		const submit = await page.waitForSelector('button');
		// Click the submit button
		await submit.click();
	
		// Wait until on the join page
		await page.waitForFunction("window.location.pathname == '/join'", { waitUntil: 'networkidle2' });
		
		// Type in the text box
		await page.type('input[name="nickname"]', name+i)
		// Find and click the button
		const namesubmit = await page.waitForSelector('button');
		await namesubmit.click();
		// Wait until the client has joined the game before repeating
		await page.waitForFunction("window.location.pathname == '/instructions'", { waitUntil: 'networkidle2' });
		
		const charbutton = await page.waitForSelector('button');
		await charbutton.click();
		const character = await page.waitForSelector('div[aria-label=' + chosenchar + ']');
		const parent_node_char = await character.getProperty('parentNode');
		await parent_node_char.click();
		const accessorybutton = await page.waitForSelector('button[data-functional-selector="edit-avatar-item"]');
		await accessorybutton.click();
		const accessory = await page.waitForSelector('img[data-functional-selector=' + chosenaccessory + ']');
		const parent_node_accessory = await accessory.getProperty('parentNode')
		await parent_node_accessory.click();
		console.log("hi")
}})();