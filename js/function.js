let serial = 0;
// for blog post
document.getElementById('blogBtn').addEventListener('click', function(){
    window.location.href = './blog.html';  
});




document.getElementById('triBtn').addEventListener('click', function(){
    serial ++;
   let area = areaType1('triBase', 'triHeight')
   displayData("Triangle", area);
  
});
document.getElementById('recBtn').addEventListener('click', function(){
    serial ++;
    let area = areaType2('rec1', 'rec2')
    displayData("Rectangle", area);
  

});
document.getElementById('paraBtn').addEventListener('click', function(){
    serial ++;
    let area = areaType2('para1', 'para2')
    displayData("Parallelogram", area);
  

});

document.getElementById('romBtn').addEventListener('click', function(){
    serial ++;
    let area = areaType1('romd1', 'romd2')
    displayData("Rhombus", area);
  
    

});
document.getElementById('pentaBtn').addEventListener('click', function(){
    serial ++;
    let area = areaType1('penta1', 'penta2')
    displayData("Pentagon", area);
  

});

document.getElementById('elliBtn').addEventListener('click', function(){
    serial ++;
    const pi = 3.14;
    const a = document.getElementById('elli1').value;
    const b = document.getElementById('elli2').value;
    const area = pi * parseFloat(a) * parseFloat(b);
    displayData("Ellipse", area);
});

function areaType1(id1,id2) {
    const b = document.getElementById(id1).value;
    const h = document.getElementById(id2).value;
    
    if (b == "" || h == "" || b <= 0 || h <= 0) {
      alert("Please enter a positive number for both the base and height.");
      return; // Return nothing if there is an error.
    }
  
    const area = 0.5 * parseFloat(b) * parseFloat(h);
    return area;
  }


//function for calculating the area of rectangle & Parallelogram
function areaType2(id1,id2) {
    const w = document.getElementById(id1).value;
    const l = document.getElementById(id2).value;
    if (w == "" || l == "" || w <= 0 || l <= 0) {
         alert("please enter any positive number");
         return;
      }
    const area = parseFloat(w) * parseFloat(l);
    return area;

}

// common function to display data
function displayData(name, area) {
    if (area === undefined) {
        return;
      }
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td>${area.toFixed(2)} cm²</td>
      <td><button class="btn w-32 bg-sky-600 text-xs">Convert to m<sup>2</sup></button>
      </td>
      
    `;
    container.appendChild(tr);

}

function getRandomColor() {
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    


