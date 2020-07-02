
/******** FAQ Body JS ********/
let common = function() {
    document.getElementById("payment").style.display="none";
    document.getElementById("delivery").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("refunds").style.display="none";
    document.getElementById("productAndStock").style.display="none";
    document.getElementById("account").style.display="none";

    document.getElementById("payColor").style.color="black";
    document.getElementById("delColor").style.color="black";
    document.getElementById("ordColor").style.color="black";
    document.getElementById("refColor").style.color="black";
    document.getElementById("pdtColor").style.color="black";
    document.getElementById("accColor").style.color="black";
  }

  let pay = function()  {
    common();
    document.getElementById("payment").style.display="block";
    document.getElementById("payColor").style.color="grey";
  }

  let del = function()  {
    common();
    document.getElementById("delivery").style.display="block";
    document.getElementById("delColor").style.color="grey";
  }

  let ord = function()  {
    common();
    document.getElementById("orders").style.display="block";
    document.getElementById("ordColor").style.color="grey";
  }

  let ref = function()  {
    common();
    document.getElementById("refunds").style.display="block";
    document.getElementById("refColor").style.color="grey";
  }

  let pdStk = function()  {
    common();
    document.getElementById("productAndStock").style.display="block";
    document.getElementById("pdtColor").style.color="grey";
  }

  let acc = function()  {
    common();
    document.getElementById("account").style.display="block";
    document.getElementById("accColor").style.color="grey";
  }