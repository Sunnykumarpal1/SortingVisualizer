let mergebtn = document.querySelector(".merge");

async function mergeSort(ele,left, right) {
    if(left >= right)
    return;
     else {
          let mid = parseInt((left + right)/2);
          await mergeSort(ele,left,mid);
          await mergeSort(ele,mid + 1, right);
          await merge(ele,left,mid,right);    
     }
}

async function merge(ele,low,mid,high) {
     let n1 = mid - low + 1;
     let n2 = high - mid;
     let left = new Array(n1);
     let right = new Array(n2);

     for(let i = 0; i < n1; i++) {
          await wait(delay);

          ele[low+i].style.background = "orange";
          left[i] = ele[low+i].style.height;
     }
     for(let i = 0; i < n2; i++) {
          await wait(delay);
          ele[mid + 1 + i].style.background = "yellow";
          right[i] = ele[mid + 1 + i].style.height;
     }

     await wait(delay);
     let i = 0, j = 0, k = low;
     while(i < n1 && j < n2) {
          await wait(delay);

          if(parseInt(left[i]) <= parseInt(right[j])) {
               if((n1 + n2) === ele.length)
                    ele[k].style.background = "green";
               else 
                    ele[k].style.background = "lightgreen";

               ele[k].style.height = left[i];
               i++;
               k++;
          }
          else {
               if((n1 + n2) === ele.length)
                    ele[k].style.background = "green";
               else 
                    ele[k].style.background = "lightgreen";

               ele[k].style.height = right[j];
               j++;
               k++;
          }
     }
     while(i < n1) {
               await wait(delay);     
               if((n1 + n2) === ele.length)
                    ele[k].style.background = "green";
               else 
                    ele[k].style.background = "lightgreen";

               ele[k].style.height = left[i];
               i++;
               k++;
     }
     while(j < n2){
               await wait(delay);
               if((n1 + n2) === ele.length)
                    ele[k].style.background = "green";
               else 
                    ele[k].style.background = "lightgreen";

               ele[k].style.height = right[j];
               j++;
               k++;
     }
     for(let t=left;t<=right;t++){
        console.log(ele[t]);
    }
}


mergebtn.addEventListener("click", async () => {
     let ele = document.querySelectorAll('.child-bar');
     let left = 0;
     let right = ele.length -1;
     console.log(`left: ${left} || right: ${right}`);
     disable();
     await mergeSort(ele,left,right);
     enable();
})