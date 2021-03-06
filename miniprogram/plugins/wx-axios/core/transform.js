export default function transform(data, headers, fns) {
    if (!fns) {
        return data;
    }
    if (!Array.isArray(fns)) {
        fns = [fns];
    }
    fns.forEach(function (fn) {
        data = fn(data, headers);
    });
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUyxDQUMvQixJQUFTLEVBQ1QsT0FBWSxFQUNaLEdBQTJDO0lBRTNDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLElBQUksQ0FBQTtLQUNaO0lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdkIsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDWjtJQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1FBQ1osSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1RyYW5zZm9ybWVyIH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShcbiAgZGF0YTogYW55LFxuICBoZWFkZXJzOiBhbnksXG4gIGZucz86IEF4aW9zVHJhbnNmb3JtZXIgfCBBeGlvc1RyYW5zZm9ybWVyW11cbik6IGFueSB7XG4gIGlmICghZm5zKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgIGZucyA9IFtmbnNdXG4gIH1cbiAgZm5zLmZvckVhY2goZm4gPT4ge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKVxuICB9KVxuICByZXR1cm4gZGF0YVxufSJdfQ==