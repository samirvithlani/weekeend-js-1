function demo(val) {
    
    var x;
  var prmoise = new Promise((reslove, reject) => {
    setTimeout(() => {
      if(val==1){
        reslove("Success");
      }
      else{
        reject("Failed");
      }
    }, 3000);
  });
  console.log(prmoise);

  prmoise
    .then((data) => {
        x = data;
      document.getElementById("print").style.backgroundColor = "green";
    })
    .catch((err) => {
        document.getElementById("print").style.backgroundColor = "red";
    });


    
}
