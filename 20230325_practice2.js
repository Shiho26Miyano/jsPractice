let counter = 3;
function recur_test(){
    console.log(counter);
    counter = counter - 1;
    if (counter == 0) return;
    recur_test();

}
recur_test();