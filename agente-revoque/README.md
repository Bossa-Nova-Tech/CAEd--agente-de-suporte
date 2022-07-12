# CAEd Agente - Admin revoke
Código para agente e admin auto revoque

# Como utilizar o código:

- Adicionar a a seguinte extensão no google chrome para o agente:
https://chrome.google.com/webstore/detail/javascript-injector/ejnccfcackblkelbafbolcpjfpcmbplg/related?hl=pt-BR
- Copiar o código esse codigo para o agente:
```
var firebaseModule = document.createElement('script');
firebaseModule.type = 'module';

firebaseModule.src = 'https://caed.agenciabossanova.com/scripts/firebase.js';
var script = document.createElement('script');
script.src = "https://caed.agenciabossanova.com/scripts/agente-chat.js";
            
document.head.appendChild(script)
document.head.appendChild(firebaseModule)
```
- Abrir a extensão que você acabou de instalar
- Colar o código na "caixa" que abrirá
- Clicar em "Update"



- Adicionar a a seguinte extensão no google chrome para o admin:
https://chrome.google.com/webstore/detail/javascript-injector/ejnccfcackblkelbafbolcpjfpcmbplg/related?hl=pt-BR
- Copiar o código esse codigo para o admin:
```
var firebaseModule = document.createElement('script');
firebaseModule.type = 'module';

firebaseModule.src = 'https://caed.agenciabossanova.com/scripts/firebase-admin.js';
var script = document.createElement('script');
script.src = "https://caed.agenciabossanova.com/scripts/admin-chat.js";
            
document.head.appendChild(script)
document.head.appendChild(firebaseModule)
```
- Abrir a extensão que você acabou de instalar
- Colar o código na "caixa" que abrirá
- Clicar em "Update"