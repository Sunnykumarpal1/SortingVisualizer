let insertion = document.querySelector(".insertion");

async function insertionSort() {
   let ele=document.getElementsByClassName('child-bar');
   ele[0].style.background="green";
   for(let i=1;i<ele.length;i++){
      let curr=ele[i].style.height;
      let j=i-1;
      ele[i].style.background="blue";
      await wait(delay);
      while(j>=0&&(parseInt(ele[j].style.height))>(parseInt(curr))){
        console.log(i+' ');
         ele[j].style.background='blue';
         ele[j+1].style.height=ele[j].style.height;
         j--;
         await wait(delay);
      for(let k=i;k>=0;k--){
        ele[k].style.background="green";
      }
    }
    ele[j+1].style.height=curr;
    ele[i].style.background="green";
   }
}

insertion.addEventListener("click", async () => {
  disable();
  await insertionSort();
  enable();
});
