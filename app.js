"use strict";
let typeofLastCharacter = NaN;
let prevClass = document.getElementsByClassName("output")[0].className;
function numberClicked(operator) {
  document.getElementsByClassName("output")[0].className = prevClass;
  if (typeof operator == "string" && typeofLastCharacter == "string") {
    // If operator is clicked then check the last inserted character and replace if it is an operator.
    {
      let prevResult = document.getElementsByClassName("output")[0].value;
      document.getElementsByClassName("output")[0].value =
        prevResult.substring(0, prevResult.length - 1) + operator;
    }
  } else {
    if (
      typeof operator == "string" &&
      document.getElementsByClassName("output")[0].value == ""
    ) {
      document.getElementsByClassName("output")[0].value = 0; // If operator is clicked before any expression perform operations with 0
    }
    document.getElementsByClassName("output")[0].value =
      document.getElementsByClassName("output")[0].value + operator;
    typeofLastCharacter = typeof operator;
  }
}

function clearResultField() {
  document.getElementsByClassName("output")[0].value = "";
  typeofLastCharacter = NaN;
}

function result() {
  if (
    document.getElementsByClassName("output")[0].value.length > 2 &&
    typeofLastCharacter == "number"
  ) {
    document.getElementsByClassName("output")[0].className =
      document.getElementsByClassName("output")[0].className + " result";
    document.getElementsByClassName("output")[0].value = eval(
      document.getElementsByClassName("output")[0].value
    );
  }
}
