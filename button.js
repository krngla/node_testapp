
function myFunction(v) {
    if (v.id === "1") {
        document.getElementById("demo").innerHTML = document.getElementById("input_1").value;
    }
    else {
        document.getElementById("demo").innerHTML = v.innerHTML;
    }
    console.log("clicked %s", v.id)
}


function make_button(str, func) {
    var btn = document.createElement("button");
    btn.innerHTML = str;
    btn.className = "button-sidebar";
    if ( typeof make_button.i === 'undefined' ){
        make_button.i = 6
    }
    btn.id = make_button.i++
    btn.addEventListener("click", function() {
        func()
    });
    document.getElementById("sidebar").appendChild(btn);
}

function load_text(tar, str) {
    var txt = document.createElement("p");
    txt.innerHTML = str
    document.getElementById(tar).appendChild(txt);
}

