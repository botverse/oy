// This is a very simple test, and could be made more robust.
// All we do is check for the presence of "http://" or "https://"
// at the start of the string.

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var description = 'Relative links can break (i.e. if recipients are outside the company network) and make your content unavailable to view';

exports['default'] = function (props) {
  if (props.hasOwnProperty('href')) {
    if (!/^(http|https):\/\//.test(props['href'])) {
      return new Error(description);
    }
  }
};

module.exports = exports['default'];