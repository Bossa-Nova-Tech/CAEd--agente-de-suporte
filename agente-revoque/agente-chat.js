var container = document.createElement("div");
buttonContainer = document.createElement("button");

styleContainerSucess = `
border-radius: 100%;
padding: 10px; 
position: fixed; 
top: 0; 
left: 0; 
width: 60px; 
height: 60px; 
background-color: white; 
z-index: 9999;
background: #2196f3;
display: flex;
align-items: center;
justify-content: center;
`;
styleContainerOff = `
border-radius: 100%;
padding: 10px; 
position: fixed; 
top: 0; 
left: 0; 
width: 60px; 
height: 60px; 
background-color: white; 
z-index: 9999;
background: #f44336;
display: flex;
align-items: center;
justify-content: center;
`;

container.style = styleContainerOff;

buttonContainer.style = `
background: black;
color: white;
border: none;
padding: 5px;
border-radius: 20px;
`

var online = false;

buttonContainer.innerHTML = "OFF";

container.appendChild(buttonContainer);
document.body.appendChild(container);
