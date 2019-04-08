var sum = 0;
function select() {
    var dvGridItem = document.getElementsByClassName("grid-item")
    var pretTot = document.getElementById("pretTotal")
    for (i = 0; i < dvGridItem.length; i++) {

        dvGridItem[i].addEventListener("click", function () {
            var copii = this.children;
            if (this.classList.contains("selected") == true) {
                this.classList.remove("selected")
                this.classList.add("grid-item")
                var pret = copii[2].innerHTML.split(":")
                var pret1 = pret[1].split(" ")
                sum -= parseInt(pret1[0])
            }
            else {
                this.classList.add("selected")
                this.classList.remove("grid-item")
                var pret = copii[2].innerHTML.split(":")
                var pret1 = pret[1].split(" ")
                sum += parseInt(pret1[0])
            }
            pretTot.innerHTML = "Pretul produselor selectate este: " + sum
            if (sum == 0) {
                pretTot.innerHTML = "Nu exista nici un produs selectat"
            }
        })
    }
    setInterval(function () {

        var dvGridItemS = document.getElementsByClassName("selected")
        var i = 0;
        while (i != dvGridItemS.length) {
            var copii = dvGridItemS[i].children;
            if (dvGridItemS[i].classList.contains("selected") == true) {

                dvGridItemS[i].classList.add("grid-item")
                var pret = copii[2].innerHTML.split(":")
                var pret1 = pret[1].split(" ")
                sum -= parseInt(pret1[0])
                dvGridItemS[i].classList.remove("selected")
            }
            pretTot.innerHTML = "Pretul produselor selectate este: " + sum
            if (sum == 0) {
                pretTot.innerHTML = "Nu exista nici un produs selectat"
                
            }
        }
    }, 30000)


}

function filtrare(produse) {
    var but = document.getElementById("filtrare")
    but.addEventListener("click", function () {
        var dvGrid = document.getElementById("grid")
        dvGrid.remove()
        dvGrid = document.createElement("div")
        dvGrid.id = "grid"
        document.body.insertBefore(dvGrid, document.body.childNodes[5])
        var sel = document.getElementById("categori")
        var produseDeFiltrat = new Array
        for (var i = 0; i < produse.length; i++) {
            var produs = produse[i].children
            if (sel.value == "Toate") {
                produseDeFiltrat.push(produse[i])
            }
            if (sel.value == produs[0].innerHTML) {
                produseDeFiltrat.push(produse[i])
            }
        }
        var textA = document.getElementById("search")
        if (textA.value) {
            var constrangeri = textA.value.split(",")
            if (constrangeri[0]) {
                var i = 0;
                while (i < produseDeFiltrat.length) {
                    var child = produseDeFiltrat[i].children
                    if (constrangeri[0] != child[1].innerHTML) {
                        produseDeFiltrat.splice(i, 1)
                    }
                    else {
                        i++;
                    }
                }
            }
            if (constrangeri[1]) {
                for (var i = 0; i < produseDeFiltrat.length; i++) {
                    var chil = produseDeFiltrat[i].children
                    if (parseInt(constrangeri[1]) < parseInt(chil[3].innerHTML)) {
                        produseDeFiltrat.splice(i, 1)
                        i = 0;
                    }
                }
            }
            if(constrangeri[2])
            {
                var j = 0;
                while (j < produseDeFiltrat.length) {
                    var chil = produseDeFiltrat[j].children
                    if (constrangeri[2] != chil[4].innerHTML) {
                        produseDeFiltrat.splice(j, 1)
                    }
                    else {
                        j++;
                    }
                }
            }
            if(constrangeri[3])
            {
                var j = 0;
                while (j < produseDeFiltrat.length) {
                var chil = produseDeFiltrat[j].children
                if (constrangeri[3] != chil[5].innerHTML) {
                    produseDeFiltrat.splice(j, 1)
                }
                else {
                    j++;
                }
            }
            }
        }
        var text = document.getElementById("inputText")
        if (text.value) {
            var i = 0;
            while (i < produseDeFiltrat.length) {
                var child = produseDeFiltrat[i].children
                if (text.value != child[1].innerHTML) {
                    produseDeFiltrat.splice(i, 1)
                }
                else {
                    i++;
                }
            }
        }
        var pret = document.getElementById("pret")
        var mean = parseInt((parseInt(pret.min) + parseInt(pret.max)) / 2) + 1
        if (pret.value != mean) {
            for (var i = 0; i < produseDeFiltrat.length; i++) {
                var chil = produseDeFiltrat[i].children
                if (pret.value < parseInt(chil[3].innerHTML)) {
                    produseDeFiltrat.splice(i, 1)
                    i = 0;
                }
            }
        }

        var marim = document.getElementById("marime")
        var chilmarim = marim.children
        for (i = 0; i < chilmarim.length; i = i + 3) {
            if (chilmarim[i].checked) {
                var j = 0;
                while (j < produseDeFiltrat.length) {
                    var chil = produseDeFiltrat[j].children
                    if (chilmarim[i].value != chil[4].innerHTML) {
                        produseDeFiltrat.splice(j, 1)
                    }
                    else {
                        j++;
                    }
                }
            }
        }

        var uzura = document.getElementById("stare")
        var str = uzura.children
        if (str[0].checked == false && str[3].checked != false) {
            var j = 0;
            while (j < produseDeFiltrat.length) {
                var chil = produseDeFiltrat[j].children
                if (str[3].value != chil[5].innerHTML) {
                    produseDeFiltrat.splice(j, 1)
                }
                else {
                    j++;
                }
            }
        }
        else if (str[0].checked != false && str[3].checked == false) {
            var j = 0;
            while (j < produseDeFiltrat.length) {
                var chil = produseDeFiltrat[j].children
                if (str[0].value != chil[5].innerHTML) {
                    produseDeFiltrat.splice(j, 1)
                }
                else {
                    j++;
                }
            }
        }


        if (produseDeFiltrat.length != 0) {
            for (i = 0; i < produseDeFiltrat.length; i++) {
                var child = produseDeFiltrat[i].children
                dvGrid.appendChild(creareDivGridItem(child[1].innerHTML, child[2].innerHTML, child[3].innerHTML, child[4].innerHTML, child[5].innerHTML))
            }
        }
        else {
            var p = crearePar("Nu exista produsele dorite")
            dvGrid.appendChild(p)
        }
        select()
        marireDiv()
        setTimeout(function () {
            sel.value = "Toate"
            localStorage.setItem("selector", "Toate")
            textA.value=""
            localStorage.setItem("cautare","")
            text.value = "";
            localStorage.setItem("tip", "")
            pret.value = mean
            localStorage.setItem("pret", null)
            for (i = 0; i < chilmarim.length; i = i + 3) {
                if (chilmarim[i].checked == true) {
                    chilmarim[i].checked = false;
                }
            }
            localStorage.setItem("marime", null)
            if (str[0].checked == true) {
                str[0].checked = false;
            }
            if (str[3].checked == true) {
                str[3].checked = false
            }
            localStorage.setItem("stare", null)
        }, 30000)
    })

}

function sortare(produse) {
    var sortareP = document.getElementById("sortare")
    sortareP.addEventListener("change", function () {
        var dvGrid = document.getElementById("grid")
        dvGrid.remove()
        dvGrid = document.createElement("div")
        dvGrid.id = "grid"
        document.body.insertBefore(dvGrid, document.body.childNodes[5])
        var produseDeFiltrat = new Array
        if (sortareP.value == "Alfabetic") {

            for (var i = 0; i < produse.length; i++)
                for (var j = i + 1; j < produse.length; j++) {
                    if (produse[i].childNodes[3].innerHTML > produse[j].childNodes[3].innerHTML) {
                        produse[i].parentNode.insertBefore(produse[j], produse[i])

                    }
                }
        }
        else if (sortareP.value == "Invers Alfabetic") {
            for (var i = 0; i < produse.length; i++)
                for (var j = i + 1; j < produse.length; j++) {
                    if (produse[i].childNodes[3].innerHTML < produse[j].childNodes[3].innerHTML) {
                        produse[i].parentNode.insertBefore(produse[j], produse[i])

                    }
                }
        }
        else if (sortareP.value == "Pret Crescator") {
            for (var i = 0; i < produse.length; i++)
                for (var j = i + 1; j < produse.length; j++) {
                    if (parseInt(produse[i].childNodes[7].innerHTML) > parseInt(produse[j].childNodes[7].innerHTML)) {
                        produse[i].parentNode.insertBefore(produse[j], produse[i])

                    }
                }
        }
        else if (sortareP.value == "Pret Descrescator") {
            for (var i = 0; i < produse.length; i++)
                for (var j = i + 1; j < produse.length; j++) {
                    if (parseInt(produse[i].childNodes[7].innerHTML) < parseInt(produse[j].childNodes[7].innerHTML)) {
                        produse[i].parentNode.insertBefore(produse[j], produse[i])
                    }
                }
        }
        for (var i = 0; i < produse.length; i++) {
            produseDeFiltrat.push(produse[i])
        }
        for (i = 0; i < produseDeFiltrat.length; i++) {
            var child = produseDeFiltrat[i].children
            dvGrid.appendChild(creareDivGridItem(child[1].innerHTML, child[2].innerHTML, child[3].innerHTML, child[4].innerHTML, child[5].innerHTML))
        }
        select()
        marireDiv()
    })


}

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "XML/produse.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    var xmlDoc;
    xmlDoc = xml.responseXML;
    produse = xmlDoc.getElementsByTagName("produs");
    filtrare(produse)
    sortare(produse)
    window.onkeydown = function (e) {
        var cod = e.charCode ? e.charCode : e.keyCode;
        //var tasta=String.fromCharCode(cod);
        var dvGrid = document.getElementById("grid")
        dvGrid.remove()
        dvGrid = document.createElement("div")
        dvGrid.id = "grid"
        document.body.insertBefore(dvGrid, document.body.childNodes[5])
        var produseDeFiltrat = new Array
        for (i = 0; i < produse.length; i++) {
            var produs = produse[i].children
            if (produs[1].innerHTML.charCodeAt(0) == cod) {
                produseDeFiltrat.push(produse[i])
            }
        }
        if (produseDeFiltrat.length != 0) {
            for (i = 0; i < produseDeFiltrat.length; i++) {
                var child = produseDeFiltrat[i].children
                dvGrid.appendChild(creareDivGridItem(child[1].innerHTML, child[2].innerHTML, child[3].innerHTML, child[4].innerHTML, child[5].innerHTML))
            }
        }
        else {
            var p = crearePar("Nu exista produsele dorite")
            dvGrid.appendChild(p)
        }
    }

}

function marireDiv() {
    var dvGrid = document.getElementById("grid")
    var dvGridItem = dvGrid.children
    for (i = 0; i < dvGridItem.length; i++) {
        dvGridItem[i].addEventListener("mouseenter", function () {
            var dvClone = document.createElement("div")
            dvClone = this.cloneNode(true);
            this.onmousemove = function (e) {
                dvClone.style.position = "absolute"
                dvClone.style.left = (e.pageX + document.body.scrollLeft + document.documentElement.scrollLeft) + "px"
                dvClone.style.top = (e.pageY + document.body.scrollLeft + document.documentElement.scrollLeft) + "px"
                dvClone.style.width = "30%"
                dvClone.style.backgroundColor = "grey"

            }
            this.appendChild(dvClone)
        })
        dvGridItem[i].addEventListener("mouseleave", function () {
            this.removeChild(this.lastChild);
        })
    }
}


