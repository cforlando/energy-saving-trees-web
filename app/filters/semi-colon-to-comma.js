export default function() {
  return function(input) {
    if(!input || input === '') {
      return '';
    }
    
    const splitStr = input.split(';');
    return splitStr.join(', ');
  }
};