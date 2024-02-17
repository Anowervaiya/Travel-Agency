function setElementById(elementId, value) {
    const elementIdName= document.getElementById(elementId);
    elementIdName.innerText = parseInt(value);
}

function getInnerText(elementId){
    const InnerId = document.getElementById(elementId);
   return InnerId.innerText;
}

// total cost and grand cost 
function totalGrandCost(elementId, spanParsText){
    const totalCost = getInnerText(elementId);
 const totalParsCost= parseInt(totalCost);
 const finalTotalCost = totalParsCost+ spanParsText;
 setElementById(elementId, finalTotalCost);
}