import Ember from 'ember';

export function getCameo(params/*, hash*/) {
  switch(params[0]){
    case("01"):
      return "Make Public Statement";
    case("02"):
      return "Appeal";
    case("03"):
      return "Express Intent to Cooperate";
    case("04"):
      return "Consult";
    case("05"):
      return "Engage in Diplomatic Cooperation";
    case("06"):
      return "Engage in Material Cooperation";
    case("07"):
      return "Provide Aid";
    case("08"):
      return "Yield";
    case("09"):
      return "Investigate";
    case("10"):
      return "Demand";
    case("11"):
      return "Disapprove";
    case("12"):
      return "Reject";
    case("13"):
      return "Threaten";
    case("14"):
      return "Protest";
    case("15"):
      return "Exhibit Force Posture";
    case("16"):
      return "Reduce Relations";
    case("17"):
      return "Coerce";
    case("18"):
      return "Assault";
    case("19"):
      return "Fight";
    case("20"):
      return "Use Unconventional Mass Violence";
    default:
      return "Unknown";

  }

  return params;
}

export default Ember.Helper.helper(getCameo);
