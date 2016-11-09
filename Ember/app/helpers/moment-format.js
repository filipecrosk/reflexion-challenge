import Ember from 'ember';
import moment from 'moment';

export default Ember.Helper.helper(function([date, format]){
  if (typeof(date) === "string") {
    if (date === "") {
      date = new Date();
    } else {
      date = moment(date, ["MM/DD/YYYY", "YYYY-MM-DD", "hh:mm:ss"]);
    }
  }
  return moment(date).format(format);
});
