import { isPlainObject, deepMerge } from './util';
function normalizeHeaderName(headers, normalizedName) {
    if (!headers) {
        return;
    }
    Object.keys(headers).forEach(function (name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name];
            delete headers[name];
        }
    });
}
export function processHeaders(headers, data) {
    normalizeHeaderName(headers, 'Content-Type');
    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8';
        }
    }
    return headers;
}
export function flattenHeaders(headers, method) {
    var methodLower = method.toLowerCase();
    if (!headers) {
        return headers;
    }
    headers = deepMerge(headers.common || {}, headers[methodLower] || {}, headers);
    var methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'trace', 'connect', 'common'];
    methodsToDelete.forEach(function (method) {
        delete headers[method];
    });
    return headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFHakQsU0FBUyxtQkFBbUIsQ0FBQyxPQUFZLEVBQUUsY0FBc0I7SUFDL0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUFFLE9BQU07S0FBRTtJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7UUFDL0IsSUFBSSxJQUFJLEtBQUssY0FBYyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxjQUFjLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEYsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyQjtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUNELE1BQU0sVUFBVSxjQUFjLENBQUMsT0FBWSxFQUFFLElBQVM7SUFDcEQsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBQzVDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQTtTQUMzRDtLQUNGO0lBQ0QsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUNELE1BQU0sVUFBVSxjQUFjLENBQUMsT0FBWSxFQUFFLE1BQWM7SUFDekQsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLE9BQU8sQ0FBQTtLQUNmO0lBQ0QsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRTlFLElBQU0sZUFBZSxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUV6RyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtRQUM1QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBkZWVwTWVyZ2UgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBNZXRob2QgfSBmcm9tICcuLi90eXBlcy9pbmRleCdcblxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzOiBhbnksIG5vcm1hbGl6ZWROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiB9XG4gIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSBoZWFkZXJzW25hbWVdXG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXVxuICAgIH1cbiAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVycyhoZWFkZXJzOiBhbnksIGRhdGE6IGFueSk6IGFueSB7XG4gIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpXG4gIGlmIChpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgaWYgKGhlYWRlcnMgJiYgIWhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSB7XG4gICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgfVxuICB9XG4gIHJldHVybiBoZWFkZXJzXG59XG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkhlYWRlcnMoaGVhZGVyczogYW55LCBtZXRob2Q6IE1ldGhvZCk6IGFueSB7XG4gIGNvbnN0IG1ldGhvZExvd2VyID0gbWV0aG9kLnRvTG93ZXJDYXNlKClcbiAgaWYgKCFoZWFkZXJzKSB7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuICBoZWFkZXJzID0gZGVlcE1lcmdlKGhlYWRlcnMuY29tbW9uIHx8IHt9LCBoZWFkZXJzW21ldGhvZExvd2VyXSB8fCB7fSwgaGVhZGVycylcblxuICBjb25zdCBtZXRob2RzVG9EZWxldGUgPSBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJywgJ3Bvc3QnLCAncHV0JywgJ3RyYWNlJywgJ2Nvbm5lY3QnLCAnY29tbW9uJ11cblxuICBtZXRob2RzVG9EZWxldGUuZm9yRWFjaChtZXRob2QgPT4ge1xuICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF1cbiAgfSlcblxuICByZXR1cm4gaGVhZGVyc1xufSJdfQ==