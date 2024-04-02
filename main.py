from selenium import webdriver
import time

driver = webdriver.Chrome()

driver.get('http://192.168.8.1:8002/index.php?zone=unimater&redirurl=http%3A%2F%2Fdetectportal.brave-http-only.com%2F')

RA = ''
password = ''

driver.find_element_by_id("auth_user").send_keys(RA)

driver.find_element_by_id("auth_pass").send_keys(password)

driver.find_element_by_id("check").click()

time.sleep(2)

driver.find_element_by_id("login").click()

# driver.quit()
