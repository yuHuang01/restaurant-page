export function makeMenuPage(){
    let content = document.getElementById("content");
    let menuDiv = document.createElement("div");
        menuDiv.id = menuDiv;
        menuDiv.style.height = "100%";
        menuDiv.style.paddingRight = '18%';
        menuDiv.style.paddingLeft = '18%';
        menuDiv.style.display = "flex";
        menuDiv.style.flexDirection = "column";
    let img = document.createElement("img");
        img.src = "/image/pizza-ittali.jpeg";
        img.style.width = "100%"
    let question = document.createElement("h2");
        question.textContent = "Mit szeretnél enni?"
    let pizzaDiv = document.createElement("div");
        pizzaDiv.style.width = "100%";
        pizzaDiv.textContent = "Pizzák";
        pizzaDiv.style.fontStyle = "italic"; 
    let pizza1 = document.createElement("div");
        pizza1.className = "onMenu";
    let pizza1img = document.createElement("img");
        pizza1img.src = "/image/pizza1.jpeg";
        pizza1img.style.height = "200px";
    let pizza1text = document.createElement("p");
        pizza1text.textContent = "MARADONA 32 - az isteni Diego nagy kedvence volt Nápolyban ez a szalámis, sonkás és sajtos pizza";
        pizza1text.style.alignSelf = "center"
            pizza1.appendChild(pizza1img);
            pizza1.appendChild(pizza1text);

    let pizza2 = document.createElement("div");
        pizza2.className = "onMenu";
    let pizza2img = document.createElement("img");
        pizza2img.src = "/image/pizza2.jpeg";
        pizza2img.style.height = "200px";
    let pizza2text = document.createElement("p");
        pizza2text.textContent = 'ALOHA 32" - paradicsomos alap, sonka, ananász és mozzarella';
        pizza2text.style.alignSelf = "center";
            pizza2.appendChild(pizza2img);
            pizza2.appendChild(pizza2text);

    let pizza3 = document.createElement("div");
        pizza3.className = "onMenu";
    let pizza3img = document.createElement("img");
        pizza3img.src = "/image/pizza3.jpeg";
        pizza3img.style.height = "200px";
    let pizza3text = document.createElement("p");
        pizza3text.textContent = 'CORN & MORE 32" - paradicsomos alap, sonka, gomba, kukorica és mozzarella'
        pizza3text.style.alignSelf = "center";
            pizza3.appendChild(pizza3img);
            pizza3.appendChild(pizza3text);

            pizzaDiv.appendChild(pizza1);
            pizzaDiv.appendChild(pizza2);
            pizzaDiv.appendChild(pizza3);

    let burgerDiv = document.createElement("div");
        burgerDiv.textContent = "Burgerek";
        burgerDiv.style.fontStyle = "italic";
        burgerDiv.style.width = "100%";
        burgerDiv.style.marginTop = "30px";

    let burger1 = document.createElement("div");
        burger1.className = "onMenu";
    let burger1img = document.createElement("img");
        burger1img.src = "/image/burger1.jpeg"
        burger1img.style.height = "200px"
    let burger1text = document.createElement("p");
        burger1text.textContent = "Vega burger (köret nélkül)"
        burger1text.style.alignSelf = "center";
        burger1.appendChild(burger1img);
        burger1.appendChild(burger1text);

    let burger2 = document.createElement("div");
        burger2.className = "onMenu";
    let burger2img = document.createElement("img");
        burger2img.src = "/image/burger2.jpeg";
        burger2img.style.height = "200px";
    let burger2text = document.createElement("p");
        burger2text.textContent = "Sajtburger (köret nélkül)";
        burger2text.style.alignSelf = "center";
            burger2.appendChild(burger2img);
            burger2.appendChild(burger2text);

    let burger3 = document.createElement("div");
        burger3.className = "onMenu";
    let burger3img = document.createElement("img");
        burger3img.src = "/image/burger3.jpeg";
        burger3img.style.height = "200px";
    let burger3text = document.createElement("p");
        burger3text.textContent = "Dupla Burger (köret nélkül)";
        burger3text.style.alignSelf = "center";
            burger3.appendChild(burger3img);
            burger3.appendChild(burger3text);

            burgerDiv.appendChild(burger1);
            burgerDiv.appendChild(burger2);
            burgerDiv.appendChild(burger3);
    menuDiv.appendChild(img);
    menuDiv.appendChild(question);
    menuDiv.appendChild(pizzaDiv);
    menuDiv.appendChild(burgerDiv);
    content.appendChild(menuDiv);
}
    

