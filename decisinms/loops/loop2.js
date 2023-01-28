//123 321

/// 456 4 + 5 +6 = 15
let no = 123
let temp =0
let rev = 0



//123 true
//12 true
//1
while(no!=0){

        // 123 % 10 -> 3
        //12 % 10  ->2
        //1
    temp= no % 10
    // 0 = 0 * 10 + 3 rev = 3
    //3 = 3 *10 +2  32
    //32 = 32 *10 + 320 +1 321
    
    rev = (rev *10 )+temp
    //123 = 123 / 10 12
    //12 / 10
    no = Math.floor(no/10)
    //1 / 10
}

///12 /2 =6
///12 /5 2.4
//math.floor(12/5) = 2
console.log(rev)

