let sum = 0;
function addToCard(event) {
  sum += 1;
  setElementById("card-count", sum);
  const spanInnerText =
    event.target.parentNode.parentNode.childNodes[3].childNodes[1];
  const spanParsText = parseInt(spanInnerText.innerText);

  const badgetInnerText = getInnerText("total-badget");
  const badgetParsText = parseInt(badgetInnerText);
  const finalBadget = badgetParsText - spanParsText;
  if (finalBadget < 0) {
    alert("Earn more and then buy");
    return;
  }
  setElementById("total-badget", finalBadget);

  const li = document.createElement("li");
  const p = document.createElement("p");
  const destination = event.target.parentNode.parentNode.childNodes[1];
  console.log(destination);
  const destinationInner = destination.innerText;
  p.innerText = `${destinationInner} : $ ${spanParsText}`;

  li.appendChild(p);
  const ul = document.getElementById("ul");
  ul.appendChild(li);

  totalGrandCost("total-cost", spanParsText);
  totalGrandCost("grand-cost", spanParsText);
}

function vehicales(transport) {
  const busPercentage = getInnerText("grand-cost");
  const busParsPercentage = parseInt(busPercentage);
  if (transport === "bus") {
    const finalValue = busParsPercentage + 100;
    setElementById("grand-cost", finalValue);
  } else if (transport === "train") {
    const finalValue = busParsPercentage - 200;
    setElementById("grand-cost", finalValue);
  } else if (transport === "flight") {
    const finalValue = busParsPercentage + 500;
    setElementById("grand-cost", finalValue);
  }
}
