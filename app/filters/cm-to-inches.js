export default function() {
  return function(input) {
    if(input === null || input === undefined || input === 'undefined') {
      return 'N/A';
    }
    
    const inches = input * 3.9;

    return inches + ' inches'
  }
};