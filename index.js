var data = {
	'a-bxx': {
  	'c d': {
    	"f_b": 1,
      "g-g": ['xx', 'vv']
    }
  },
  'f-c': {
  	'p p': {
    	"x_d": 1,
      "ll-gssd": ['xx', 'vv'],
      "l-l-g-s-s-d": ['xx', 'vv']
    }
  }
};

function fun(obj) {
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(function(key) {
      var newKey = key.replace(/-|\s/g, '_');
      if (newKey !== key) {
        Object.defineProperty(obj, newKey, Object.getOwnPropertyDescriptor(obj, key));
        delete obj[key];
      }
      fun(obj[newKey]);
    });
  }
}

fun(data);

console.log(data);
