# commando executar log
```
 - ./filter_access_log.sh "GET"
```
 # filtro GET PUT e DELETE
 ```
 - bash filter_result.sh put
 - bash filter_result.sh get
 - bash filtenr_result.sh delete
 ```
 # instalar depedencia para o laboratorio. 
 ```
sudo apt-get install apache2
sudo service apache2 start
sudo apt-get install curl
sudo apt-get install ssmtp -y
sudo apt-get install mailutils -y
sudo apt-get install nmap -y
<<<<<<< HEAD
sudo apt-get install awscli -y
=======
apt-get install -y mysql-server
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
>>>>>>> 36d1978e9b3568d4a8b37c16ebeae2ae51458a07
```
 # commando curl e bash
 ```
 - curl --write-out %{http_code} --output /dev/null http://localhost
 - curl --write-out %{http_code} --silent --output /dev/null http://localhost
 - bash monitoracao-servidor.sh
 - curl --write-out %{http_code} http://google.com
 - curl --write-out %{http_code} https://caelum-online-public.s3.amazonaws.com/shell-script/parte2/aula_2/index.html
 - sudo service apache2 start
 - http://localhost/site.html
```
 # acesso ao crontab 
 ```
 sudo crontab -e
 ```

 # commando para visualizar consumo.

```
free | grep
free | grep -i mem
free | grep -i mem | awk '{ print $2 }'
free -h | grep -i mem | awk '{ print $3 }'
echo 63.00 | awk -F. '{ print $2 }'
```

# commandos mysql
```
sudo mysql -u root
show databases;
use mutillidae
show tables;
select * from produtos;
select * from usuarios;
sudo mysql -u root
use mutillidae
delete from produtos;
delete from usuarios;

```

# commandos script backup myql
```
- mkdir backup
- mysqldump -u root $1 > $1.sql
- sudo mysql -u root mutillidae < /home/backup/mutillidae.sql
- sudo mysqldump -u root -p mutillidae > /home/backup/mutillidae2.sql
```

# commandos aws cli upload

```
- mkdir backup_mutillidae_amazon
- nano backup-amazon.sh
- chmod +x backup-amazon.sh
- sudo bash backup-amazon.sh
```
<img src="aws backup s3.png" alt="Alt Text" width="1000">

 - acessar crontab
 ```
 sudo crontab -e
 ```

 # commandos aws cli restore

 ```
 - mkdir restore_mutillidae_amazon
 - chmod +x restore_amazon.sh produtos
 - bash restore_amazon.sh produtos
 ```

 # commandos aws cli download
 ```
 aws s3 sync $CAMINHO_BACKUP s3://curso-shell-script
 
 ```

# link github referencia

- https://github.com/RafaelNercessian/curso-shell.git
