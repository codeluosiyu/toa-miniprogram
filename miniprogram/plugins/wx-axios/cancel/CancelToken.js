import Cancel from './Cancel';
var CancelToken = (function () {
    function CancelToken(executor) {
        var _this = this;
        var resolvePromise;
        this.promise = new Promise(function (resolve) {
            resolvePromise = resolve;
        });
        executor(function (message) {
            if (_this.reason) {
                return;
            }
            _this.reason = new Cancel(message);
            resolvePromise(_this.reason);
        });
    }
    CancelToken.prototype.throwIfRequested = function () {
        if (this.reason) {
            throw this.reason;
        }
    };
    CancelToken.source = function () {
        var cancel;
        var token = new CancelToken(function (c) {
            cancel = c;
        });
        return {
            cancel: cancel,
            token: token
        };
    };
    return CancelToken;
}());
export default CancelToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FuY2VsVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYW5jZWxUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUE7QUFNN0I7SUFJRSxxQkFBWSxRQUF3QjtRQUFwQyxpQkFhQztRQVpDLElBQUksY0FBOEIsQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFTLFVBQUEsT0FBTztZQUN4QyxjQUFjLEdBQUcsT0FBTyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO1FBRUYsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFNO2FBQ1A7WUFDRCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pDLGNBQWMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQ2xCO0lBQ0gsQ0FBQztJQUVNLGtCQUFNLEdBQWI7UUFDRSxJQUFJLE1BQWlCLENBQUE7UUFDckIsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBQSxDQUFDO1lBQzdCLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDWixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU87WUFDTCxNQUFNLFFBQUE7WUFDTixLQUFLLE9BQUE7U0FDTixDQUFBO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbmNlbEV4ZWN1dG9yLCBDYW5jZWxlciwgQ2FuY2VsVG9rZW5Tb3VyY2UgfSBmcm9tICcuLi90eXBlcy9pbmRleCdcblxuaW1wb3J0IENhbmNlbCBmcm9tICcuL0NhbmNlbCdcblxuaW50ZXJmYWNlIFJlc29sdmVQcm9taXNlIHtcbiAgKHJlYXNvbj86IENhbmNlbCk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsVG9rZW4ge1xuICBwcm9taXNlOiBQcm9taXNlPENhbmNlbD5cbiAgcmVhc29uPzogQ2FuY2VsXG5cbiAgY29uc3RydWN0b3IoZXhlY3V0b3I6IENhbmNlbEV4ZWN1dG9yKSB7XG4gICAgbGV0IHJlc29sdmVQcm9taXNlOiBSZXNvbHZlUHJvbWlzZVxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPENhbmNlbD4ocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmVcbiAgICB9KVxuXG4gICAgZXhlY3V0b3IobWVzc2FnZSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSlcbiAgICAgIHJlc29sdmVQcm9taXNlKHRoaXMucmVhc29uKVxuICAgIH0pXG4gIH1cblxuICB0aHJvd0lmUmVxdWVzdGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb25cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc291cmNlKCk6IENhbmNlbFRva2VuU291cmNlIHtcbiAgICBsZXQgY2FuY2VsITogQ2FuY2VsZXJcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihjID0+IHtcbiAgICAgIGNhbmNlbCA9IGNcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBjYW5jZWwsXG4gICAgICB0b2tlblxuICAgIH1cbiAgfVxufVxuIl19