const run = () => {
    let numArr = [1,2,3,4,5,6,7,8];

    numArr.forEach( ( numA ) => {
        numArr.forEach( (numB ) => {
            console.log(numA, "*",numB,"=",numA*numB);
        });
    });
}