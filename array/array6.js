
var users = ["parth","priya","neha","akshit","raj"]
//akshit
function removeelemet(elm){
    users = users.filter((u)=>{

        ///parth != akshit => true
        ///priya != akshit => true
        ///neha != akshit => true
        //akshit != akshit => false
        ///raj != akshit => true
        return u != elm
    })
    return users
}

users = removeelemet("akshit")
console.log(users)






