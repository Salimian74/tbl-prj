function add() {
        debugger;

        var txtId = document.getElementById('txtid').value;
        var txtName = document.getElementById('txtname').value;
        var txtLastName = document.getElementById('txtlast').value;
        var tblRef = document.getElementById('table').getElementsByTagName('tbody')[0];
        var row = tblRef.insertRow(tblRef.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        //cell1.innerHTML = ;
        cell1.innerHTML = txtId;
        cell2.innerHTML = txtName;
        cell3.innerHTML = txtLastName;
}
function Design1() {
    debugger;
    var d = document.getElementById("table");
    d.className += "D1 ";
    document.getElementById("Dtable").disabled = true;
}
function Design2() {
    var b = document.getElementById("table");
    b.className += "D2";
    document.getElementById("Dtable2").disabled = true;
}
function Design3() {
    var a = document.getElementById("table");
    a.className += " D3";
    document.getElementById("Dtable3").disabled = true;
}

function search1()  {
        debugger;
        var txtId = document.getElementById('txtid').value;
        table = document.getElementById("table").getElementsByTagName('tbody')[0];
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(txtId) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
                }
            }
        }
    
function search2() {
    debugger;
    var txtId = document.getElementById('txtid').value;
    table = document.getElementById("table").getElementsByTagName('tbody')[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(txtId) > -1) {
                tr[i].style.backgroundColor = "Yellow";
                document.getElementById("search2").disabled = true;
            }
        }
    }
}