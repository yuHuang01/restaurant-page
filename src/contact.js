export function makeContactPage(){
    let content = document.getElementById("content");
    let conDiv = document.createElement("div");
        conDiv.id = "conDiv";
        conDiv.style.height = "100%";
        conDiv.style.fontStyle = "italic";
    let opHoursTitle = document.createElement("h2");
        opHoursTitle.textContent = "Nyitvatartás:";
        opHoursTitle.style.marginTop = "80px"
    let opHours = document.createElement("p");
        opHours.textContent = "Hétfő-Vasárnap: 11:00 - 21:00";
    let contactTitle = document.createElement("h2");
        contactTitle.style.marginTop = "50px"
        contactTitle.textContent = "Kapcsolat";
    let locationTitle = document.createElement("h3");
        locationTitle.style.marginTop = "30px"
        locationTitle.textContent = "Cím:";
    let location = document.createElement("p");
        location.textContent = "2600 Vác, Széchenyi utca 18.";
    let phoneNumberTitle = document.createElement("h3");
        phoneNumberTitle.style.marginTop = "30px"
        phoneNumberTitle.textContent = "Telefon:";
    let phoneNumber = document.createElement("p");
        phoneNumber.textContent = "+36 30 623 9553"
    conDiv.appendChild(opHoursTitle)
    conDiv.appendChild(opHours)
    conDiv.appendChild(contactTitle)
    conDiv.appendChild(locationTitle)
    conDiv.appendChild(location)
    conDiv.appendChild(phoneNumberTitle)
    conDiv.appendChild(phoneNumber)
    content.appendChild(conDiv);
}