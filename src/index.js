const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let driver = new webdriver.Builder()
    // .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    // .setChromeOptions()
    // .setFirefoxOptions(/* ... */)
    .build();

driver.manage().window().maximize();
driver.get('https://www42.bb.com.br/portalbb/daf/beneficiario,802,4647,4652,0,1.bbx?pk_vid=f776277b0eae44031597111182d7e724').then(function() {
    driver.findElement(webdriver.By.name('formulario:j_id34:nome')).sendKeys('Campina Grande');
    let buttonBuscar = driver.wait(webdriver.until.elementLocated(webdriver.By.id('formulario:botaoBuscar')), 5000);
    buttonBuscar.click().then(function() {
        driver.findElement(webdriver.By.id('formulario:j_id44:dataInicialInputDate')).sendKeys('01/08/2020');
        driver.findElement(webdriver.By.id('formulario:j_id54:dataFinalInputDate')).sendKeys('11/08/2020');
        driver.findElement(webdriver.By.id('formulario:botaoContinuar')).click();
    });    
});

// driver.findElement(webdriver.By.id('formulario:botaoBuscar')).click();


