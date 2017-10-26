//excluir coluna
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var r = confirm('Deseja realmente excluir?');
    if (r == true) {
        document.getElementById("table").deleteRow(i);
    }
}