import Ember from 'ember';

export function formatColor(params/*, hash*/) {
  var toColor = "grey";
  var gs = parseFloat(params[0]);
  if(gs < 0){
    toColor = 'red';
  } else if (gs === 0) {
    toColor = 'yellow';
  } else {
    toColor = 'green';
  }
  return toColor;
}

export default Ember.Helper.helper(formatColor);
