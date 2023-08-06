
function expandtab(index,val) {
    const total = document.getElementById(val).innerHTML;
    const radtioBtns = document.getElementsByName("checkRadio");
    for (let i = 0; i < radtioBtns.length; i++) {
        const radiobtn = radtioBtns[i]
        const id = "sizeSection" + radiobtn.value;
        const classadd = document.getElementsByClassName("section1");
        const toggle = document.getElementById(id);
        if (radiobtn.checked) {
            for (var j = 0; j < classadd.length; j++) {
                classadd[j].classList.remove("addbgColor");
            }
            
            document.getElementById("TotalVal").innerHTML = total;
            classadd[index].classList.add("addbgColor");
            toggle.style.display = "block";
        } else {
            toggle.style.display = "none";
        }
    }
}