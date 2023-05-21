
// function mycars(){
//     const cars=['Toyota','Volvo','Ford','Ferari','Nissan']

// for(let i=0;i<cars.length;i++){


//     document.getElementById("Cars").innerHTML=cars[i];
// }

// }

function addCars(){
    const cars=[]
    let inputCars = document.getElementById("Car").value;
    cars.push(inputCars)
    // let table=document.getElementById("mytable")
    // let row=table.insertRow(0)
    // let cell1=row.insertCell(0)
    // let cell2=row.insertCell(1)
    

    for(let i=0;i<cars.length;i++){
        // cell2.innerHTML=cars[i];
        var table=document.createElement("table")
    var tr=table.appendChild("tr");
    var td=tr.appendChild("td")
    td.textContent=cars[i]
    }

}

