var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        load();
        flock();

    }
};

app.initialize();

function load() {
    var ip = document.getElementById("send-ip");
    ip.addEventListener('click', fip);
    var note = document.getElementById("send-note");
    note.addEventListener('click', fnote);
    var name = document.getElementById("send-name");
    name.addEventListener('click', fname);
    var onona = document.getElementById("onona");
    onona.addEventListener('click', flock);

    for (var i = 1; i < 10; i++) {
        var x = document.getElementById("btn-" + i);
        x.addEventListener('click', btnclk);
    }
    var res123 = document.getElementById("reset");
    res123.addEventListener('click', resasd);
}

function fip() {
    var Vname = document.getElementById("name").value;
    var Vloc = document.getElementById("ip").value;
    if (Vname == "" || Vloc == "") {
        alert("Enter name || location");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pr0xy.000webhostapp.com/bekup/ip.php?name=" + Vname + "&loc=" + Vloc, true);
    xhttp.send();
    document.getElementById("ip").value = "";
}

function fnote() {
    var Vname = document.getElementById("name").value;
    var Vnote = document.getElementById("note").value;
    if (Vname == "" || Vnote == "") {
        alert("Enter name || message");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pr0xy.000webhostapp.com/bekup/note.php?name=" + Vname + "&note=" + Vnote, true);
    xhttp.send();

    document.getElementById("note").value = "";
}

function fname() {
    document.getElementById("name").value = "Pr0xY";
}

function flock() {
    document.getElementById("main").style.display = "none";
    document.getElementById("lock").style.display = "block";
}
var pin = [];

function btnclk(e) {
    pin.push(e.target.id[4]);
    document.getElementById("dot-" + pin.length).style.backgroundColor = "white";
    if (pin == "1,2,3,2") {
        document.getElementById("lock").style.display = "none";
        document.getElementById("main").style.display = "block";
    }
    if (pin.length > 3) {
        pin = [];
        for (var i = 1; i < 5; i++) {
            document.getElementById("dot-" + i).style.backgroundColor = "black";
        }
    }
}

function resasd() {
    pin = [];
    for (var i = 1; i < 5; i++) {
        document.getElementById("dot-" + i).style.backgroundColor = "black";
    }
}