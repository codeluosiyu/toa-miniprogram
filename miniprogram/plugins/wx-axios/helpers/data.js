import { isPlainObject } from './util';
export function transformRequest(data) {
    if (data === void 0) { data = null; }
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}
export function transformResponse(data) {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        }
        catch (e) {
        }
    }
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUV0QyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxXQUFnQjtJQUMvQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDNUI7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFDRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBUztJQUN6QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixJQUFJO1lBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDeEI7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUNYO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhOiBhbnkgPSBudWxsKTogYW55IHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGE6IGFueSk6IGFueSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59Il19