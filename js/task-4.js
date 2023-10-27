'use strict';
function getShippingCost(country) {
  let credits = 0;
  switch (country) {
    case 'China':
      credits = 100;
      break;
    case 'Chile':
      credits = 250;
      break;
    case 'Australia':
      credits = 170;
      break;
    case 'Jamaica':
      credits = 120;
    //     break;
    // default: credits = 0;
  }
  if (credits > 0) {
    return `Shipping to ${country} will cost ${credits} credits`;
  } else {
    return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

function createReversedArray() {
  return Array.from(arguments).toReversed();
}

console.log(createReversedArray(1, 2, 3));
