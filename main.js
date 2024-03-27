const puppetter = require('puppeteer');
const wifi = require('node-wifi');

wifi.init({
    iface: null
});

function startMainJs() {
    (async () => {
        const browser = await puppetter.launch();
        const page = await browser.newPage();

        // Adicione aqui suas credenciais
        var RA = ''
        var password = ''

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');

        await page.goto('http://192.168.8.1:8002/index.php?zone=unimater&redirurl=http%3A%2F%2Fdetectportal.brave-http-only.com%2F');

        await page.type('#auth_user', RA);

        await page.type('#auth_pass', password);

        await page.click('#check');

        await
            await page.waitForSelector('#login');

        await page.click('#login');

        await browser.close();

    })();
}

wifi.getCurrentConnections((error, currentConnections) => {
    if (error) {
        startMainJs();
        return;
    }
    currentConnections[0].bssid === 'UNIMATER' ? startMainJs() : console.log('Not Connected to UNIMATER');
});


