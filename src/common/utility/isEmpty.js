const hasOwnProperty = Object.prototype.hasOwnProperty;

/*
* false，[], {}为空，返回true
*/
function isEmpty(value) {

  if (!value) {
    return true;
  }

  if (Array.isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ) {
    return !value.length;
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true;
}

export default isEmpty;