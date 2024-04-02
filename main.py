import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless") 
chrome_options.add_argument("--disable-gpu") 

driver = webdriver.Chrome()

driver.get('http://192.168.8.1:8002/index.php?zone=unimater&redirurl=http%3A%2F%2Fdetectportal.brave-http-only.com%2F')

time.sleep(2)


# adicione o seu RA dentro da funcao send_keys
driver.find_element(By.ID,"auth_user").send_keys('')
# adicione sua senha dentro da funcao send_keys
driver.find_element(By.ID,"auth_pass").send_keys('')

driver.find_element(By.ID,"check").click()

time.sleep(2)

driver.find_element(By.ID,"login").click()

# driver.quit()
