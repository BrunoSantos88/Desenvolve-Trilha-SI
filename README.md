<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions Badge"> <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"> 
![Node.js](https://img.shields.io/badge/Node.js-16-green?style=flat&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-7.10.0-red?style=flat&logo=npm&logoColor=white)


 
 <p align="center">  
Configuração de Ambiente de Desenvolvimento com Docker e Express.js
<p>

- Instalar dependências do GitHub Runner.
- Criar a pasta actions-runner e definir que a execução ficará na pasta _work.
<p align="center">
  <img src="imagens/download.png" alt="setup instalação" width="800">
</p>

````
mkdir actions-runner
chmod 777 -R actions-runner
cd actions-runner
curl -o actions-runner-linux-x64-2.316.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.1/actions-runner-linux-x64-2.316.1.tar.gz
echo "chave token" actions-runner-linux-x64-2.316.1.tar.gz" | shasum -a 256 -c
tar xzf ./actions-runner-linux-x64-2.316.1.tar.gz
./config.sh --url https://github.com/BrunoSantos88/Desenvolve-Trilha-SI --token "chavetoken"
./run.sh
````
- Caso tenha sucesso na instalação!
<p align="center">
  <img src="imagens/gitruuner_online.png" alt="setup instalação" width="800">
</p>

Setup da Instalação:
Acesse via SSH o terminal da máquina e execute os seguintes comandos:
<p align="center">
  <img src="imagens/githubrunner.png" alt="após instalação" width="800">
</p>
2. Setup do GitHub Action
Crie a pasta e o arquivo de execução github/workflows/express_app.yml. </p>
Passo 1: Definir a "branch" e "agente"

````
on:
  push:
    branches:  
      - desafio2

jobs:
  express_vm:
    runs-on: self-hosted
````

Passo 2: Checar repositório no GitHub
````
steps:
  - name: Checkout code
    uses: actions/checkout@v2
````
Passo 3: Executar script
````
- name: Install Container & NodeJs and NPM
  run: |
    chmod +x dependencia.sh
    if ./dependencia.sh; then
      echo "Install complete"
    else
      echo "Install failed"
    fi
````
Script Shell: dependencia.sh
````
#!/bin/bash
set -e 
sudo apt update -y
if [[ $? -ne 0 ]]; then
  echo "Update failed"
  exit 1
fi
sudo apt install docker.io -y
if [[ $? -ne 0 ]]; then
  echo "Docker installation failed"
  exit 1
fi
sudo apt install docker-compose -y
if [[ $? -ne 0 ]]; then
  echo "Docker Compose installation failed"
  exit 1
fi
sudo apt update -y
if [[ $? -ne 0 ]]; then
  echo "Second update failed"
  exit 1
fi
sudo apt install nodejs -y
if [[ $? -ne 0 ]]; then
  echo "Node.js installation failed"
  exit 1
fi
sudo apt install npm -y
if [[ $? -ne 0 ]]; then
  echo "NPM installation failed"
  exit 1
fi
echo "Install complete"
````
Passo4: Clonar repositório e alterar branch
````
- name: Clone repository
  run: |
    sudo git clone https://github.com/BrunoSantos88/Desenvolve-Trilha-SI.git
    cd Desenvolve-Trilha-SI
    sudo git checkout desafio2
````
Passo 5: Executar e levantar o docker-compose
````
- name: Deploy_UP_Express_APP
  run: |
    cd express_app
    sudo docker-compose up -d
````
3. Enviar requisição curl após execução do comando
````
steps:
  - name: Send curl request
    run: |
      curl http://${{secrets.HOST_EXPRESS}}:3000

````
Após finnalizar Job Sucesso!
<p align="center">
  <img src="imagens/sucesspjob.png" alt="jobsucesso." width="800">
</p>


<p align="center">
  <img src="imagens/express_server.png" alt="termino processo." width="800">
</p>



<table>
<thead>
  <tr>
    <th colspan="2">Portas Liberadas</th> <th colspan="2">CLOUD</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>22</td>  <td>VM LINUX</td>      <td>CLOUD</td> 
    <td>SSH</td> <td>UBUNTU 20:04</td>  <td>AZURE</td>
  </tr>
  <tr>
    <td>3000</td> <td>NODEJS</td>  <td>DOCKER</td>
    <td>NODE</td> <td>16</td>  <td>DOCKERCOMPOSE/td>
  </tr>
</tbody>
</table>
