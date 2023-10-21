let selection=document.querySelector('.selection')


   async function selectionSort() {
  let ele=document.querySelectorAll('.child-bar')
  let n=ele.length
  for(let i=0;i<n;i++){
     let minindex=i;
     ele[i].style.background = "blue";
     for(let j=i+1;j<n;j++){
        let currj=parseInt(ele[j].style.height);
        ele[j].style.background = "orange";
        await wait(delay);
        // console.log(parseInt(ele[minindex].style.height);
        if(currj<parseInt(ele[minindex].style.height)){
          if(minindex != i) 
               ele[minindex].style.background = "cyan";
          minindex=j;
        }
        else   
          ele[j].style.background = "cyan";
     }
     await wait(delay);
     swap(ele[i],ele[minindex]);
     ele[minindex].style.background = "cyan";
     ele[i].style.background = "green";
  }
}
selection.addEventListener("click",async() => {
     disable();
     await selectionSort();
     enable();
})