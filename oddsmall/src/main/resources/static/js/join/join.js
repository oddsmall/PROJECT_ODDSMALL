// js 
function checkAll(checkAll){
    const checkboxes = document.getElementsByName("joinCheck");

    checkboxes.forEach((checkbox) => {
        // console.log("들어옴");
        checkbox.checked = checkAll.checked;
    })
}

// jQuery
