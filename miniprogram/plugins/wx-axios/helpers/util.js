var toString = Object.prototype.toString;
export function isDate(val) {
    return toString.call(val) === '[object Date]';
}
export function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}
export function extend(to, from) {
    for (var key in from) {
        ;
        to[key] = from[key];
    }
    return to;
}
export function deepMerge() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objs.forEach(function (obj) {
        if (obj) {
            Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                if (isPlainObject(val)) {
                    if (isPlainObject(result[key])) {
                        result[key] = deepMerge(result[key], val);
                    }
                    else {
                        result[key] = deepMerge(val);
                    }
                }
                else {
                    result[key] = val;
                }
            });
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUE7QUFFMUMsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUFRO0lBQzdCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxlQUFlLENBQUE7QUFDL0MsQ0FBQztBQUdELE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBUTtJQUNwQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssaUJBQWlCLENBQUE7QUFDakQsQ0FBQztBQUdELE1BQU0sVUFBVSxNQUFNLENBQU8sRUFBSyxFQUFFLElBQU87SUFDekMsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsQ0FBQztRQUFFLEVBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFRLENBQUE7S0FDMUM7SUFDRCxPQUFPLEVBQVcsQ0FBQTtBQUNwQixDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVM7SUFBQyxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOztJQUN0QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRWxDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ2QsSUFBSSxHQUFHLEVBQUU7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQzFCLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEIsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtxQkFDMUM7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFDN0I7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtpQkFDbEI7WUFDSCxDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWw6IGFueSk6IHZhbCBpcyBEYXRlIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsOiBhbnkpOiB2YWwgaXMgT2JqZWN0IHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kPFQsIFU+KHRvOiBULCBmcm9tOiBVKTogVCAmIFUge1xuICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICA7ICh0byBhcyBUICYgVSlba2V5XSA9IGZyb21ba2V5XSBhcyBhbnlcbiAgfVxuICByZXR1cm4gdG8gYXMgVCAmIFVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZSguLi5vYmpzOiBhbnlbXSk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBvYmpzLmZvckVhY2gob2JqID0+IHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gb2JqW2tleV1cbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UodmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzdWx0XG59XG4iXX0=