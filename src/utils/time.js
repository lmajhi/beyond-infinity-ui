export const getSalutation = () => {
  var today = new Date();
  var curHr = today.getHours();
  if (curHr < 12) {
    return "Good Morning.";
  } else if (curHr < 18) {
    return "Good Afternoon.";
  } else {
    console.log("good evening");
    return "Good Evening.";
  }
};
