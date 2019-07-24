//Отличие VAR от LET
function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // та же переменная!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let y = 1;
    if (true) {
      let y = 2;  // другая переменная
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }