const quickSortbtn = document.querySelector(".quick");

const partition = async(ele,l,r) => {
     let i = l - 1;
     ele[r].style.background = "red";

     for(let j = l; j <= r - 1; j++) {
          ele[j].style.background = "yellow";

          await wait(delay);

          if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
               i++;
               swap(ele[i], ele[j]);

               ele[i].style.background = "orange";
               if(i != j) ele[j].style.background = "orange";
               await wait(delay);
          }
          else {
               ele[j].style.background = "pink";
          }
     }
     i++;

     await wait(delay);
     swap(ele[i], ele[r]);

     ele[r].style.background = "pink";
     ele[i].style.background = "green";
     await wait(delay);

     for(let k = 0; k < ele.length ; k++) {
          if(ele[k].style.background != "green")
               ele[k].style.background = "cyan";
     }
          return i;
}

const quickSort = async (ele,l,r) => {
     if(l < r) {
          const pivot = await partition(ele,l,r);
          await quickSort(ele,l,pivot - 1);
          await quickSort(ele,pivot + 1, r);
     }
     else {
          if(l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
               ele[l].style.background = "green";
               ele[r].style.background = "green";
          }
     }
}

quickSortbtn.addEventListener("click", async () => {
     const ele = document.querySelectorAll(".child-bar");
     let r = ele.length - 1;
     let l = 0;
     disable();
     await quickSort(ele, l, r);
     enable();
})
