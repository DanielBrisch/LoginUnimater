const puppeteer = require('puppeteer');
const wifiControl = require('wifi-control');

(async () => {
    wifiControl.init({
        debug: true
    });

    const checkWifiConnection = async () => {
        return new Promise((resolve, reject) => {
            wifiControl.getIfaceState('wlan0', function (err, status) {
                if (err) {
                    reject(err);
                } else {
                    resolve(status.ssid === 'UNIMATER');
                }
            });
        });
    };

    const isConnectedWifi = await checkWifiConnection();
    if (!isConnectedWifi) {
        console.log("Não conectado à rede UNIMATER. Aguardando conexão...");
        return;
    }

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');

    await page.goto('http://192.168.8.1:8002/index.php?zone=unimater&redirurl=http%3A%2F%2Fdetectportal.brave-http-only.com%2F');

    const isConnectec = await page.evaluate(() => {
        return document.body.textContent.trim() === 'You are connected';
    });

    if (isConnectedWifi) {
        console.log("Conectado. Não é necessário prosseguir.");
        await browser.close();
        return;
    }

    await page.type('#auth_user', '12218285');
    await page.type('#auth_pass', 'Danimon159!');
    await page.click('#check');

    await page.waitForSelector('#login');
    await page.click('#login');

    await browser.close();
})();
