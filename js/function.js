document.getElementById('triBtn').addEventListener('click', function(){
   let area = areaType1('triBase', 'triHeight')
   console.log(area);
    
});

document.getElementById('romBtn').addEventListener('click', function(){
    let area = areaType1('romd1', 'romd2')
    console.log(area);
});
document.getElementById('pentaBtn').addEventListener('click', function(){
    let area = areaType1('penta1', 'penta2')
    console.log(area);
});
document.getElementById('recBtn').addEventListener('click', function(){
    let area = areaType2('rec1', 'rec2')
    console.log(area);
});
document.getElementById('paraBtn').addEventListener('click', function(){
    let area = areaType2('para1', 'para2')
    console.log(area);
});
document.getElementById('elliBtn').addEventListener('click', function(){
    const pi = 3.14;
    const a = document.getElementById('elli1').value;
    const b = document.getElementById('elli2').value;
    const area = pi * parseFloat(a) * parseFloat(b);

    console.log(area);
});



function areaType1(id1,id2) {
    const b = document.getElementById(id1).value;
    const h = document.getElementById(id2).value;
    const area = 0.5 * parseFloat(b) * parseFloat(h);
    return area;
}
function areaType2(id1,id2) {
    const w = document.getElementById(id1).value;
    const l = document.getElementById(id2).value;
    const area = parseFloat(w) * parseFloat(l);
    return area;

}