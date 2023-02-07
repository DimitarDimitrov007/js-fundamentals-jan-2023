function nxNMatrix(number){
    let result ="";
    return printRow(number,number,0,result).repeat(number);
 
    function printRow(row,number,col,buff){
        for(row = number; row < number + 1; row++){
            buff = "";
            for(col = 0; col < number; col ++){
                buff += row + " ";
            }
        }

        return `${buff} \n`;
    }
}
console.log(nxNMatrix(7));
