// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

const n = 6;
for(let i=n-1; i >= 0; i--) {
    console.log(' '.repeat(i) + "#".repeat(n-i))
}