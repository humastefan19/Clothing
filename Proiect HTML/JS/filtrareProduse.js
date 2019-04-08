function crearePar(sir) {
    var par = document.createElement("p")
    var text = document.createTextNode(sir)
    par.appendChild(text)
    par.style.paddingRight = "1%"
    return par;
}

function creareSelector(nr, ob) {
    var sel = document.createElement("select")
    for (i = 0; i < nr; i++) {
        var opt = document.createElement("option")
        opt.innerHTML = ob[i];
        opt.style.background = "rgba(128, 128, 128, .001)"
        sel.appendChild(opt);
    }
    sel.style.outline = "none"
    sel.style.background = "rgba(128, 128, 128, .001)"
    sel.style.border = "2px solid black"
    if(localStorage.getItem("selector"))
    {
        sel.value=localStorage.getItem("selector");
    }
    sel.addEventListener("change", function () {
        var x = sel.value;
        alert(x)
    })
    return sel;
}
function creareInput(nrMax, nrMin) {
    var inpt = document.createElement("INPUT")
    inpt.setAttribute("type", "range")
    inpt.setAttribute("min", nrMin);
    inpt.setAttribute("max", nrMax);
    inpt.setAttribute("value", (nrMax + nrMin) / 2);
    //inpt.style.webkitAppearance = "none"
    inpt.style.outline = "none"
    inpt.style.width = "20%"
    inpt.style.height = "0.5em"
    inpt.style.background = "black"
    if(localStorage.getItem("pret"))
    {
        inpt.value = localStorage.getItem("pret")
    }
    return inpt;
}
function creareForm(nr, ob) {
    var frm = document.createElement("form")
    for (i = 0; i < nr; i++) {
        var inpt = document.createElement("INPUT")
        inpt.setAttribute("type", "radio")
        inpt.setAttribute("name", "marimi")
        inpt.setAttribute("value", ob[i])
        var lb = document.createElement("label")
        var text=document.createTextNode(ob[i])
        lb.appendChild(text)
        frm.appendChild(inpt);
        frm.appendChild(lb);
        if (i != nr - 1) {
            var br = document.createElement("br");
            frm.appendChild(br);
        }

        if(localStorage.getItem("marime"))
        {
            if(localStorage.getItem("marime") == inpt.value)
            {
                inpt.checked=true;
            }
        }

    }
    frm.addEventListener("change", function () {
        for (i = 0; i < frm.length; i++)
            if (frm[i].checked) {
                var x = frm[i].value
                alert(x);
            }
    })
    return frm;
}

function creareCB(nr, ob) {
    var frm = document.createElement("form")
    for (i = 0; i < nr; i++) {
        var inpt = document.createElement("input")
        inpt.setAttribute("type", "checkbox")
        inpt.setAttribute("name", "stare" + i)
        inpt.setAttribute("value", ob[i])
        var lb = document.createElement("label")
        var text=document.createTextNode(ob[i])
        lb.appendChild(text)
        frm.appendChild(inpt);
        frm.appendChild(lb);
        if (i != nr - 1) {
            var br = document.createElement("br");
            frm.appendChild(br);
        }
        if(localStorage.getItem("stare"))
        {
            if(localStorage.getItem("stare") == inpt.value)
            {
                inpt.checked=true;
            }
        }

    }
    frm.addEventListener("change", function () {
        for (i = 0; i < frm.length; i++)
            if (frm[i].checked) {
                var x = frm[i].value
                alert(x);
            }
    })
    return frm;
}

function createButton(str) {
    var but = document.createElement("button")
    but.style.backgroundColor = "rgba(128, 128, 128, .01)"
    but.style.border = "2px solid black"
    but.style.outline = "none"
    but.style.cursor = "pointer"
    but.style.fontSize = "1.5em"
    /*but.style.position="absolute"
    but.style.top="0.5em";
    but.style.left="25em"
    but.style.cssFloat="right"*/
    but.style.marginTop = "2%";
    but.innerHTML = str
    return but;
}

function createText() {
    var frm = document.createElement("form")
    frm.setAttribute("autocomplete", "on");
    var inpt = document.createElement("input")
    inpt.setAttribute("type", "text");
    inpt.setAttribute("name", "tip");
    inpt.id = "inputText"
    inpt.style.backgroundColor = "rgba(128, 128, 128, .01)"
    inpt.style.outline = "none"
    inpt.style.border = "2px solid black"
    frm.appendChild(inpt)
    if(localStorage.getItem("tip"))
    {
        inpt.value=localStorage.getItem("tip")
    }
    inpt.addEventListener("change", function () {
        var x = inpt.value;
        alert(x);
    })
    return frm
}

function creareDivGridItem(tip, URLimag, prt, mrm, str)
{
    var dvGridItem=document.createElement("div");
    var p=crearePar(tip);
    dvGridItem.appendChild(p)
    var img=document.createElement("img")
    img.setAttribute("src", URLimag)
    img.setAttribute("alt", tip)
    img.setAttribute("title", tip+" Marime:"+mrm)
    dvGridItem.appendChild(img)
    var p=crearePar("Pret:"+prt)
    dvGridItem.appendChild(p)
    var p=crearePar("Marime:"+mrm)
    dvGridItem.appendChild(p)
    var p=crearePar("Stare:"+str)
    dvGridItem.appendChild(p)
    dvGridItem.classList.add("grid-item")
    return dvGridItem;
}

function creareTextArea(){
    var textA = document.createElement("textarea")
    textA.id="search"
    textA.style.backgroundColor="rgba(128, 128, 128, .01)"
    textA.style.outline = "none"
    textA.style.border = "2px solid black"
    if(localStorage.getItem("cautare"))
    {
        textA.value=localStorage.getItem("cautare")
    }
    return textA
}

window.onload = function () {
    loadXMLDoc()
    
    var dvFil = document.createElement("div");
    dvFil.style.maxWidth = "100em"
    dvFil.style.height = "20%"
    dvFil.style.border = "2px solid black"
    dvFil.style.marginBottom = "2%"
    dvFil.style.padding = "2%"
    var dvEx = document.getElementById("containertitle")
    dvFil.style.display="flex"
    dvEx.appendChild(dvFil);
    dvCrit=document.createElement("div")
    dvCrit.id="interfataFiltrare"
    dvCrit.style.order="1"
    dvCrit.style.width="50%"
    dvFil.appendChild(dvCrit)
    var tip = ["Tricou", "Pulover", "Jeans", "Pantaloni Scurti", "Camasa", "Jacheta", "Rochi", "Pulover", "Sacou", "Pantaloni", "Fusta", "Bluza", "Ochelari de soare", "Sapca", "Esarfa", "Manusi din piele", "Geanta", "Curea"]
    //Start categorii
    var par = crearePar("Categorie:")
    dvCrit.appendChild(par);
    var cat = ["Toate","Barbati", "Femei", "Accesori"]
    var sel = creareSelector(cat.length, cat)
    sel.id = "categori"
    dvCrit.appendChild(sel);
    sel.onchange = function(){
        localStorage.setItem("selector", sel.value)
    }
    //End categorii
    //Start Cautare
    var textArea = creareTextArea()
    var p1=crearePar("Cautare dupa tip, pret, marime si stare:")
    var p2=crearePar("Model de cautare: Tricou, 40, S, Uzat")
    dvCrit.appendChild(p1);
    dvCrit.appendChild(textArea);
    dvCrit.appendChild(p2)
    textArea.onchange = function(){
        localStorage.setItem("cautare", textArea.value)
    }
    //End Cautare
    //Start tip
    var par = crearePar("Tip:")
    dvCrit.appendChild(par);
    var text = createText();
    text.id = "tip"
    dvCrit.appendChild(text);
    text.onchange = function(){
        localStorage.setItem("tip", text.childNodes[0].value)
    }
    //End tip
    //Start pret
    var par = crearePar("Pret:")
    dvCrit.appendChild(par);
    var inpt = creareInput(100, 15)
    inpt.id = "pret"
    dvCrit.appendChild(inpt)
    var val = crearePar("")
    inpt.oninput = function () {
        val.innerHTML = "Valoare: " + this.value
    }
    inpt.onchange = function(){
        localStorage.setItem("pret", this.value)
    }
    dvCrit.appendChild(val)
    //End pret
    //Start marime
    var mar = ["S", "M", "L", "36", "38", "40"]
    var frm = creareForm(mar.length, mar);
    frm.id = "marime"
    var par = crearePar("Marimi:")
    frm.onchange = function(){
        var op = frm.children
        for(i=0;i<op.length;i++)
        {
            if(op[i].checked == true)
            {
                localStorage.setItem("marime", op[i].value)
            }
        }
    }
    dvCrit.appendChild(par);
    dvCrit.appendChild(frm);
    //End marime
    //Start stare
    var str = ["Uzat", "Nou"]
    var cb = creareCB(str.length, str)
    cb.id = "stare"
    cb.onchange = function(){
        var op = cb.children
        for(i=0;i<op.length;i++)
        {
            if(op[i].checked == true)
            {
                localStorage.setItem("stare", op[i].value)
            }
        }
    }
    var par = crearePar("Stare: ")
    dvCrit.appendChild(par)
    dvCrit.appendChild(cb)
    //End stare
    var but = createButton("Filtrare")
    but.id = "filtrare"
    dvCrit.appendChild(but);
      
    //Start sortare
    var lbl = document.createElement("label")
    lbl.innerHTML = "Sortare dupa: ";
    dvEx.appendChild(lbl);
    var sort = ["Alegeti o optiune","Alfabetic", "Invers Alfabetic", "Pret Descrescator", "Pret Crescator"];
    var srt = creareSelector(sort.length, sort);
    srt.id = "sortare"
    srt.style.marginBottom = "2%";
    dvEx.appendChild(srt);
    //End sortare
    
    //Start pret total
    var dvPret=document.createElement("div")
    dvPret.style.order="2"
    dvPret.style.textAlign="center"
    dvPret.style.width="50%"
    dvPret.style.borderLeft="2px solid black"
    var parafPret=crearePar("Nu este nici un produs selectat")
    parafPret.id="pretTotal"
    parafPret.style.textAlign="center"
    parafPret.style.marginTop="40%"
    parafPret.style.marginLeft="10%"
    parafPret.style.fontSize="25px"
    dvPret.appendChild(parafPret)
    dvFil.appendChild(dvPret)
    //End pret total
    select();
    marireDiv();
    var dvGrid = document.getElementById("grid")
    dvGrid.style.display = "none"
    var dv = document.createElement("div")
    document.body.insertBefore(dv, document.body.childNodes[6])
    var img = document.createElement("img")
    dv.appendChild(img)
    img.src="./PNG/sigla.png"
    var pos = 8;
    dv.style.position="relative";
    dv.style.border="none"
    dv.style.top = "0"
    dv.style.left = pos+"px"
    dv.style.width = "20%"
    img.style.width="100%"
    img.style.margin="none"
    img.style.border = "none"
    var pageWidth = parseInt(getComputedStyle(document.body).width)
    var id=setInterval(function(){ 
        if(pos == pageWidth-250)
        {
            dvGrid.style.display="grid"
            dv.remove();
            clearInterval(id)
        }
        else{
            pos++;
            dv.style.left = pos+"px"
        }
    },1)

}

