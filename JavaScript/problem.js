let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);

const idx = [4,2,1,5,8];

// reverse order sort
idx.sort((idx1,idx2)=>(idx2-idx1));
console.log(idx);


idx.forEach((item)=>{
    nums = nums.filter((ele,index)=>index!=item);
    console.log(nums);
})


let nums2 = [1,2,3,4,5,6,7,8,9];
idx.forEach((item)=>{
    nums2.splice(item,1);
    console.log(nums2);
})