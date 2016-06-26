goog.provide('sqlparser.test');

goog.require('goog.array');

sqlparser.test = function() {
  return 'hello';
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('sqlparser.test', sqlparser.test);