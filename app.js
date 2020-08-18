let typeofLastCharacter = NaN;
let prevClass = document.getElementsByClassName("output")[0].className;
let isPeriodUsed = false;
let changedFromOperator = false;
function numberClicked(operator) {
  if (operator == "." && isPeriodUsed) {
    //do nothing if period is used already before operator (+,-,/)
  } else {
    if (operator == ".") {
      isPeriodUsed = true;
    } else if (
      (operator != "." && operator == "*") ||
      operator == "/" ||
      operator == "-" ||
      operator == "+"
    ) {
      isPeriodUsed = false;
      changedFromOperator = true;
    }
    document.getElementsByClassName("output")[0].className = prevClass;
    if (typeof operator == "string" && typeofLastCharacter == "string") {
      // If operator is clicked then check the last inserted character and replace if it is an operator.
      {
        if (changedFromOperator) {
          isPeriodUsed = !isPeriodUsed; //revert if operator is replaced
          changedFromOperator = false;
        }
        let prevResult = document.getElementsByClassName("output")[0].value;
        if (isPeriodUsed)
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
}

function clearResultField() {
  document.getElementsByClassName("output")[0].value = "";
  typeofLastCharacter = NaN;
  isPeriodUsed = false;
}

function result() {
  if (
    document.getElementsByClassName("output")[0].value.length > 2 &&
    typeofLastCharacter == "number"
  ) {
    document.getElementsByClassName("output")[0].className =
      document.getElementsByClassName("output")[0].className + " result";
    var result = eval(
      document
        .getElementsByClassName("output")[0]
        .value.replace(/\b0*(\d+)\b/g, "$1") //replace preceding 0's to avoid octal values
    );
    if (document.getElementsByClassName("output")[0].value.includes(".")) {
      isPeriodUsed = true;
      document.getElementsByClassName("output")[0].value = parseFloat(result);
    } else {
      isPeriodUsed = false;
      document.getElementsByClassName("output")[0].value = result;
    }
  } else if (document.getElementsByClassName("output")[0].value == "") {
    document.getElementsByClassName("output")[0].className =
      document.getElementsByClassName("output")[0].className + " result";
    document.getElementsByClassName("output")[0].value = 0;
  }
}
