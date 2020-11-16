let Path='./img/'; // Deklarer variabler og giver den navnet Path
let ImgAry = new Array ('','img-bridge.jpg','img-leaves.jpg','Overlay-hero.jpg','Overlay-tree.jpg','Overlay-treeroot.jpg'); //Du laver et array og henter billeder

function Swap(obj, id){ //Deklarer funktion, og bruger Swap funktionen fra html. 
    let i=obj.selectIndex; 
    if (i<1){ return; }
   document.getElementById(id).src = Path + ImgAry[i];
}