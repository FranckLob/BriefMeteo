//---------------------------
//au début on masque tout
document.getElementById('aff-lm').style.display='none';
document.getElementById('aff-topms').style.display='none';
document.getElementById('aff-tabms').style.display='none';
document.getElementById('aff-gm').style.display='none';
//
//
//
//---------------------------
//gestion de "DERNIERE MESURE"
document.getElementById('derniere-mesure').addEventListener('click',function(event){
    document.getElementById('aff-topms').style.display='none';
    document.getElementById('aff-tabms').style.display='none';
    document.getElementById('aff-gm').style.display='none';
    document.getElementById('aff-lm').style.display='block';
//
// Appel API pour last-measure - debut
//
const request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', `https://distorted-louse-3971.dataplicity.io/last-measure`, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const jsonResult = JSON.parse(this.response)

        const d = jsonResult.measureDate.slice(0, 10).split('-');   
        const lib=d[2] +'/'+ d[1] +'/'+ d[0]; 
        const affichageLibelleLm="Dernière mesure du "+lib;
        document.getElementById('aff-libelle-lm').innerHTML=affichageLibelleLm;
        const affichageTemperature="Température : "+jsonResult.temperature+" °C";
        document.getElementById('aff-temperature').innerHTML=affichageTemperature;  
        const affichageHumidite="Humidité : "+jsonResult.humidity+" %hum";
        document.getElementById('aff-humidite').innerHTML=affichageHumidite;
        var affichagePression="Pression : "+jsonResult.pressure+" hPA";
        document.getElementById('aff-pression').innerHTML=affichagePression;

    } else {
        console.log('Erreur ...')
    }
}
// Send request
//
request.send();
//
// Appel API pour last-measure - fin
//
}
);
//
//
//
//---------------------------
//gestion de "TOP MESURES"
document.getElementById('top-mesures').addEventListener('click',function(event){
    document.getElementById('aff-lm').style.display='none';
    document.getElementById('aff-tabms').style.display='none';
    document.getElementById('aff-gm').style.display='none';
    document.getElementById('aff-topms').style.display='block';

// Appel API pour top-humidite - debut
//
const requestth = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
requestth.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/humidity`, true);

requestth.onload = function () {
    if (requestth.status >= 200 && requestth.status < 400) {
        const jsonResult = JSON.parse(this.response)

        const d = jsonResult.measureDate.slice(0, 10).split('-');   
        const lib=d[2] +'/'+ d[1] +'/'+ d[0]; 
        const affichageLibelleLm="Top humidité du "+lib;
        document.getElementById('aff-libelle-th').innerHTML=affichageLibelleLm;
        const affichageTemperature="Température : "+jsonResult.temperature+" °C";
        document.getElementById('aff-temperature-th').innerHTML=affichageTemperature;  
        const affichageHumidite="Humidité : "+jsonResult.humidity+" %hum";
        document.getElementById('aff-humidite-th').innerHTML=affichageHumidite;
        const affichagePression="Pression : "+jsonResult.pressure+" hPA";
        document.getElementById('aff-pression-th').innerHTML=affichagePression;

    } else {
        console.log('Erreur ...')
    }
}
// Send request
//
requestth.send();
//
// Appel API pour top-humidite - fin
//
// Appel API pour top-temperature - debut
//
const requesttt = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
requesttt.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/temperature`, true);

requesttt.onload = function () {
    if (requesttt.status >= 200 && requesttt.status < 400) {
        const jsonResult = JSON.parse(this.response)

        const d = jsonResult.measureDate.slice(0, 10).split('-');   
        const lib=d[2] +'/'+ d[1] +'/'+ d[0]; 
        const affichageLibelleLm="Top température du "+lib;
        document.getElementById('aff-libelle-tt').innerHTML=affichageLibelleLm;
        const affichageTemperature="Température : "+jsonResult.temperature+" °C";
        document.getElementById('aff-temperature-tt').innerHTML=affichageTemperature;  
        const affichageHumidite="Humidité : "+jsonResult.humidity+" %hum";
        document.getElementById('aff-humidite-tt').innerHTML=affichageHumidite;
        const affichagePression="Pression : "+jsonResult.pressure+" hPA";
        document.getElementById('aff-pression-tt').innerHTML=affichagePression;

    } else {
        console.log('Erreur ...')
    }
}
// Send request
//
requesttt.send();
//
// Appel API pour top-temperature - fin
//
// Appel API pour top-pression - debut
//
const requesttp = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
requesttp.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/pressure`, true);

requesttp.onload = function () {
    if (requesttp.status >= 200 && requesttp.status < 400) {
        const jsonResult = JSON.parse(this.response)

        const d = jsonResult.measureDate.slice(0, 10).split('-');   
        const lib=d[2] +'/'+ d[1] +'/'+ d[0]; 
        const affichageLibelleLm="Top pression du "+lib;
        document.getElementById('aff-libelle-tp').innerHTML=affichageLibelleLm;
        const affichageTemperature="Température : "+jsonResult.temperature+" °C";
        document.getElementById('aff-temperature-tp').innerHTML=affichageTemperature;  
        const affichageHumidite="Humidité : "+jsonResult.humidity+" %hum";
        document.getElementById('aff-humidite-tp').innerHTML=affichageHumidite;
        const affichagePression="Pression : "+jsonResult.pressure+" hPA";
        document.getElementById('aff-pression-tp').innerHTML=affichagePression;

    } else {
        console.log('Erreur ...')
    }
}
// Send request
//
requesttp.send();
//
// Appel API pour top-pression - fin
//
}
);
//
//
//
//---------------------------
//gestion de "TABLEAU DES MESURES"
document.getElementById('tab-mesures').addEventListener('click', function (event) {

    document.getElementById('aff-lm').style.display='none';
    document.getElementById('aff-topms').style.display='none';
    document.getElementById('aff-gm').style.display='none';
    document.getElementById('aff-tabms').style.display='block';

    // // recuperation des valeurs a afficher
    // const newDate = "New date";
    // const newTemperature = "30°C";
    // const newHumidite = "40 %hum";
    // const newPression= "50 hPa";
    // //creation d'une nouvelle ligne du tableau
    // const newTR = document.createElement("tr");
    // //creation et valorisation des 4 cellules d'une ligne du tableau
    // const newTDDate = document.createElement("td");
    // newTDDate.innerText = newDate;
    // const newTDTemperature = document.createElement("td");
    // newTDTemperature.innerText = newTemperature;
    // const newTDHumidite = document.createElement("td");
    // newTDHumidite.innerHTML = newHumidite;
    // const newTDPression = document.createElement("td");
    // newTDPression.innerHTML = newPression;
    // //alimentation de la nouvelle ligne par les cellules precedemment crees et valorisees
    // newTR.appendChild(newTDDate);
    // newTR.appendChild(newTDTemperature);
    // newTR.appendChild(newTDHumidite);
    // newTR.appendChild(newTDPression);
    // //insertion dans la page html de la nouvelle ligne du tableau
    // document.getElementById('aff-tableau').appendChild(newTR);

    // Appel API pour tab-mesures - debut
//
const request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=2019-11-07&endDate=2019-11-08`, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const jsonResult = JSON.parse(this.response)
//
for (let i=0 ; i != jsonResult.length ; i++) {
    // recuperation des valeurs a afficher
    const newDateJson = jsonResult[i].measureDate;
    const d=newDateJson.slice(0, 10).split('-');   
    const newDate=d[2] +'/'+ d[1] +'/'+ d[0] + ' ' + newDateJson.substr(11,8);
    const newTemperature = jsonResult[i].temperature;
    const newHumidite = jsonResult[i].humidity;
    const newPression= jsonResult[i].pressure;
    //creation d'une nouvelle ligne du tableau
    const newTR = document.createElement("tr");
    //creation et valorisation des 4 cellules d'une ligne du tableau
    const newTDDate = document.createElement("td");
    newTDDate.innerText = newDate;
    const newTDTemperature = document.createElement("td");
    newTDTemperature.innerText = newTemperature;
    const newTDHumidite = document.createElement("td");
    newTDHumidite.innerHTML = newHumidite;
    const newTDPression = document.createElement("td");
    newTDPression.innerHTML = newPression;
    //alimentation de la nouvelle ligne par les cellules precedemment crees et valorisees
    newTR.appendChild(newTDDate);
    newTR.appendChild(newTDTemperature);
    newTR.appendChild(newTDHumidite);
    newTR.appendChild(newTDPression);
    //insertion dans la page html de la nouvelle ligne du tableau
    document.getElementById('aff-tableau').appendChild(newTR);
}
//   
    } else {
        console.log('Erreur ...')
    }
}
// Send request
//
request.send();
//
// Appel API pour top-pression - fin
}
);
//
//
//
//---------------------------
//gestion de "GRAPHIQUES DES MESURES"
document.getElementById('graph-mesures').addEventListener('click',function(event){
    document.getElementById('aff-lm').style.display='none';
    document.getElementById('aff-topms').style.display='none';
    document.getElementById('aff-tabms').style.display='none';
    document.getElementById('aff-gm').style.display='block';
}
);