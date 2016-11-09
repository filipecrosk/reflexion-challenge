import Ember from 'ember';
var pluralize = Ember.String.pluralize;

export default Ember.Helper.helper(function([count, word, options]){
  if ( Ember.isNone(word) ){
    return;
  }

  if (count !== 1) {
    count = count || 0;
    word = pluralize(word);
  }

  return ( options !== 'omitCount' ? count + ' ' : '') + word;
});
