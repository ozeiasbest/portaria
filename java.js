function pesquisa() {
    var busca;
    var filtro;
    var ul;
    var li;
    var a;
    var i;
    busca = document.getElementById("buscar");
    filtro = busca.value.toUpperCase();
    ul = document.getElementById("disponiveis");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
        }


          else {
            li[i].style.display = "none";
        }
    }
}
