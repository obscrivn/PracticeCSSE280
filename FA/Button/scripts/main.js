let count = 0;

function main() {
document.getElementById("plus").onclick = (event) => {
    count +=1;
    updateView();
}
document.getElementById("minus").onclick = (event)=> {
    count -=1;
    updateView();
}
document.getElementById("reset").onclick = (event) =>{
    count=0;
    updateView();
}
function updateView() {
document.getElementById("counter").innerHTML = `Count = ${count}`;
}
}

main();