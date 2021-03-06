
/**
 * @reference https://github.com/angus-c/just/blob/master/packages/object-safe-set/index.js
 * @param obj 对象
 * @param propsArg 属性键值
 * @param defaultValue 默认值
 */
function get(obj, propsArg, defaultValue) {
    if (!obj) {
      return defaultValue;
    }

    var props, prop;
    if (Array.isArray(propsArg)) {
      props = propsArg.slice(0);
    }
    if (typeof propsArg == 'string') {
      props = propsArg.split('.');
    }
    if (typeof propsArg == 'symbol') {
      props = [propsArg];
    }
    if (!Array.isArray(props)) {
      throw new Error('props arg must be an array, a string or a symbol');
    }

    while (props.length) {
      prop = props.shift();
      if (!obj) {
        return defaultValue;
      }
      obj = obj[prop];
      if (obj === undefined) {
        return defaultValue;
      }
    }

    return obj;
}

function set(obj, props, value) {
    if (typeof props == 'string') {
      props = props.split('.');
    }
    if (typeof props == 'symbol') {
      props = [props];
    }
    var lastProp = props.pop();
    if (!lastProp) {
      return false;
    }
    var thisProp;
    while ((thisProp = props.shift())) {
      if (typeof obj[thisProp] == 'undefined') {
        obj[thisProp] = {};
      }
      obj = obj[thisProp];
      if (!obj || typeof obj != 'object') {
        return false;
      }
    }
    obj[lastProp] = value;
    return true;
}


