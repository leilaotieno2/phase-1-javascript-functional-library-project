function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i], i);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i], i));
    }
    return result;
  }
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection.length > 0 ? collection[0] : undefined;
    const startingIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startingIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i]);
    }
    return accumulator;
  }
  
  
  
  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, callback) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  function myValues(obj) {
    const values = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  