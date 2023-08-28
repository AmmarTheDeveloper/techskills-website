let Searchbar = document.querySelector('.search-input');
let boxes = document.querySelectorAll('.box');
Searchbar.addEventListener('input' , ()=>{
    let searchvalue = Searchbar.value;
    let value = searchvalue.toLowerCase();
    boxes.forEach(box =>{
        let Attr1 = box.getAttribute('data-name').toLowerCase();
        let Attr2 = box.getAttribute('data-name2').toLowerCase();
        if(value == "" || value == null){
            box.style.display = "flex";
        }
        else if(Attr1 == value || Attr2 == value){
            box.style.display = "flex"
        }
        else{
            box.style.display = "none";
        }
    })
})