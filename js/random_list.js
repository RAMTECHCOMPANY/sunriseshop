var names = ['Shaima Asiri', ' Yasmeen Al-Rashidi', 'Remas Mohammed'];
function shuffleNames() {
    var nameList = document.getElementById("name-list");
    nameList.innerHTML = "";

    var shuffleNames = names.sort(function () {
        return Math.random() - 0.5;
    });

    for (var i = 0; i < shuffleNames.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(shuffleNames[i]));
        nameList.appendChild(li);
    }
}
window.onload = shuffleNames;