export const getColor = (percentage) => {
  /* 1 - 40; // #C41E3A cardinal red
  41 - 75; // amber #FFBF00
  76 - 100; // green #5BC60B 
  */
  const intergerPercentage = parseInt(percentage);
  if (intergerPercentage < 40) {
    return "#C41E3A";
  } else if (intergerPercentage < 76) {
    return "#FFBF00";
  } else return "#5BC60B";
};
