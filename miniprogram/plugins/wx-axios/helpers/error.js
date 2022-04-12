var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AxiosError = (function (_super) {
    __extends(AxiosError, _super);
    function AxiosError(message, config, code, response) {
        var _this = _super.call(this, message) || this;
        _this.config = config;
        _this.code = code;
        _this.response = response;
        _this.isAxiosError = true;
        Object.setPrototypeOf(_this, AxiosError.prototype);
        return _this;
    }
    return AxiosError;
}(Error));
export { AxiosError };
export function createError(message, config, code, response) {
    return new AxiosError(message, config, code, response);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7SUFBZ0MsOEJBQUs7SUFLbkMsb0JBQ0UsT0FBZSxFQUNmLE1BQTBCLEVBQzFCLElBQW9CLEVBQ3BCLFFBQXdCO1FBSjFCLFlBTUUsa0JBQU0sT0FBTyxDQUFDLFNBUWY7UUFOQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUV4QixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7O0lBQ25ELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBZ0MsS0FBSyxHQW9CcEM7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FDekIsT0FBZSxFQUNmLE1BQTBCLEVBQzFCLElBQW9CLEVBQ3BCLFFBQXdCO0lBRXhCLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgQXhpb3NFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgaXNBeGlvc0Vycm9yOiBib29sZWFuXG4gIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnXG4gIGNvZGU/OiBzdHJpbmcgfCBudWxsXG4gIHJlc3BvbnNlPzogQXhpb3NSZXNwb25zZVxuICBjb25zdHJ1Y3RvcihcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcsXG4gICAgY29kZT86IHN0cmluZyB8IG51bGwsXG4gICAgcmVzcG9uc2U/OiBBeGlvc1Jlc3BvbnNlXG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuICAgIHRoaXMuY29kZSA9IGNvZGVcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICB0aGlzLmlzQXhpb3NFcnJvciA9IHRydWVcbiAgICAvKiDkuLrkuobop6PlhrMgVHlwZVNjcmlwdCDnu6fmib/kuIDkupvlhoXnva7lr7nosaHnmoTml7blgJnnmoTlnZEgKi9cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXhpb3NFcnJvci5wcm90b3R5cGUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnLFxuICBjb2RlPzogc3RyaW5nIHwgbnVsbCxcbiAgcmVzcG9uc2U/OiBBeGlvc1Jlc3BvbnNlXG4pOiBBeGlvc0Vycm9yIHtcbiAgcmV0dXJuIG5ldyBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVzcG9uc2UpXG59Il19