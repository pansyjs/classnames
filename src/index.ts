export interface ClassArray extends Array<ClassValue> {};

export interface ClassDictionary {
  [id: string]: any;
}

export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

let hasOwn = {}.hasOwnProperty;

function classNames(...classValues: ClassValue[]): string {
  let classes = [];
  for (let i = 0; i < classValues.length; i++) {
    let arg = classValues[i];
    if (!arg) continue;

    let argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      let inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (let key in arg as object) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

export default classNames;
