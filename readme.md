### 1 - clone repository
<code>git clone https://github.com/DanielBrisch/UnimaterLogin.git</code>

### 2 - run in the directory
<code>pip install selenium</code>

### 3 - Enter your RA and password in the send_keys functions
<code> 
##RA
driver.find_element(By.ID,"auth_user").send_keys('')
# password
driver.find_element(By.ID,"auth_pass").send_keys('')
</code>

### 4 - run using in directory

<code>python main.py</code>