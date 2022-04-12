var InterceptorManager = (function () {
    function InterceptorManager() {
        this.interceptors = [];
    }
    InterceptorManager.prototype.use = function (resolved, rejected) {
        this.interceptors.push({
            resolved: resolved,
            rejected: rejected
        });
        return this.interceptors.length - 1;
    };
    InterceptorManager.prototype.forEach = function (fn) {
        this.interceptors.forEach(function (interceptor) {
            if (interceptor !== null) {
                fn(interceptor);
            }
        });
    };
    InterceptorManager.prototype.eject = function (id) {
        if (this.interceptors[id]) {
            this.interceptors[id] = null;
        }
    };
    return InterceptorManager;
}());
export default InterceptorManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW50ZXJjZXB0b3JNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0lBRUU7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBQ0QsZ0NBQUcsR0FBSCxVQUFJLFFBQXVCLEVBQUUsUUFBcUI7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckIsUUFBUSxVQUFBO1lBQ1IsUUFBUSxVQUFBO1NBQ1QsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxFQUF5QztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFdBQVc7WUFDbkMsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO2dCQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDaEI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sRUFBVTtRQUNkLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQTtTQUM3QjtJQUNILENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNvbHZlZEZuLCBSZWplY3RlZEZuIH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnXG5cbmludGVyZmFjZSBJbnRlcmNlcHRvcjxUPiB7XG4gIHJlc29sdmVkOiBSZXNvbHZlZEZuPFQ+XG4gIHJlamVjdGVkPzogUmVqZWN0ZWRGblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmNlcHRvck1hbmFnZXI8VD57XG4gIHByaXZhdGUgaW50ZXJjZXB0b3JzOiBBcnJheTxJbnRlcmNlcHRvcjxUPiB8IG51bGw+XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0gW11cbiAgfVxuICB1c2UocmVzb2x2ZWQ6IFJlc29sdmVkRm48VD4sIHJlamVjdGVkPzogUmVqZWN0ZWRGbik6IG51bWJlciB7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucHVzaCh7XG4gICAgICByZXNvbHZlZCxcbiAgICAgIHJlamVjdGVkXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvcnMubGVuZ3RoIC0gMVxuICB9XG5cbiAgZm9yRWFjaChmbjogKGludGVyY2VwdG9yOiBJbnRlcmNlcHRvcjxUPikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLmZvckVhY2goaW50ZXJjZXB0b3IgPT4ge1xuICAgICAgaWYgKGludGVyY2VwdG9yICE9PSBudWxsKSB7XG4gICAgICAgIGZuKGludGVyY2VwdG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBlamVjdChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJjZXB0b3JzW2lkXSkge1xuICAgICAgdGhpcy5pbnRlcmNlcHRvcnNbaWRdID0gbnVsbFxuICAgIH1cbiAgfVxufSJdfQ==