function validEmail(str) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(str)) {
    return true;
  } else {
    return false;
  }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
