export default function xhr(config) {
    return new Promise(function (resolve, reject) {
        var data = config.data, url = config.url, _a = config.method, method = _a === void 0 ? 'GET' : _a, headers = config.headers, responseType = config.responseType, dataType = config.dataType, timeout = config.timeout, cancelToken = config.cancelToken, filePath = config.filePath, _b = config.name, name = _b === void 0 ? 'file' : _b, formData = config.formData;
        Object.keys(headers).forEach(function (name) {
            if (!data && name.toLowerCase() === 'content-type') {
                delete headers[name];
            }
        });
        var task = Object.create(null);
        if (method === 'UPLOAD') {
            task = wx.uploadFile({
                url: url,
                filePath: filePath,
                name: name,
                formData: formData,
                header: headers,
                timeout: timeout,
                success: function (res) {
                    var response = {
                        data: res.data,
                        status: res.statusCode,
                        statusText: res.errMsg,
                        headers: res.header,
                        config: Object.assign({}, { method: method }, config),
                        cookies: res.cookies
                    };
                    handleResponse(response);
                },
                fail: function (err) {
                    reject({
                        data: {
                            code: -1,
                            message: "网络异常，请稍后重试"
                        },
                        status: -1,
                        statusText: err.errMsg,
                        config: Object.assign({}, { method: method }, config)
                    });
                }
            });
        }
        else {
            task = wx.request({
                url: url,
                method: method,
                data: data,
                header: headers,
                responseType: responseType,
                dataType: dataType,
                timeout: timeout,
                success: function (res) {
                    var response = {
                        data: res.data,
                        status: res.statusCode,
                        statusText: res.errMsg,
                        headers: res.header,
                        config: Object.assign({}, { method: method }, config),
                        cookies: res.cookies
                    };
                    handleResponse(response);
                },
                fail: function (err) {
                    reject({
                        data: {
                            code: -1,
                            message: "网络异常，请稍后重试"
                        },
                        status: -1,
                        statusText: err.errMsg,
                        config: Object.assign({}, { method: method }, config)
                    });
                }
            });
        }
        processCancel();
        function processCancel() {
            if (cancelToken) {
                cancelToken.promise
                    .then(function (reason) {
                    task.abort();
                    reject(reason);
                })
                    .catch(function () { });
            }
        }
        function handleResponse(response) {
            if (response.status >= 200 && response.status < 300) {
                resolve(response);
            }
            else {
                reject(response);
            }
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieGhyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sQ0FBQyxPQUFPLFVBQVUsR0FBRyxDQUFDLE1BQTBCO0lBQ3BELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUN6QixJQUFBLElBQUksR0FBb0gsTUFBTSxLQUExSCxFQUFFLEdBQUcsR0FBK0csTUFBTSxJQUFySCxFQUFFLEtBQTZHLE1BQU0sT0FBckcsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUFFLE9BQU8sR0FBc0YsTUFBTSxRQUE1RixFQUFFLFlBQVksR0FBd0UsTUFBTSxhQUE5RSxFQUFFLFFBQVEsR0FBOEQsTUFBTSxTQUFwRSxFQUFFLE9BQU8sR0FBcUQsTUFBTSxRQUEzRCxFQUFFLFdBQVcsR0FBd0MsTUFBTSxZQUE5QyxFQUFFLFFBQVEsR0FBOEIsTUFBTSxTQUFwQyxFQUFFLEtBQTRCLE1BQU0sS0FBckIsRUFBYixJQUFJLG1CQUFHLE1BQU0sS0FBQSxFQUFFLFFBQVEsR0FBSyxNQUFNLFNBQVgsQ0FBVztRQUN0SSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDL0IsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssY0FBYyxFQUFFO2dCQUNsRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNyQjtRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ25CLEdBQUcsRUFBRSxHQUFhO2dCQUNsQixRQUFRLEVBQUUsUUFBa0I7Z0JBQzVCLElBQUksTUFBQTtnQkFDSixR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QUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDbkQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ2xCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNqQjtRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5pbXBvcnQgeyBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUHJvbWlzZSwgQXhpb3NSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB4aHIoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpOiBBeGlvc1Byb21pc2Uge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgdXJsLCBtZXRob2QgPSAnR0VUJywgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBkYXRhVHlwZSwgdGltZW91dCwgY2FuY2VsVG9rZW4sIGZpbGVQYXRoLCBuYW1lID0gJ2ZpbGUnLCBmb3JtRGF0YSB9ID0gY29uZmlnXG4gICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGlmICghZGF0YSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgdGFzayA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICBpZiAobWV0aG9kID09PSAnVVBMT0FEJykge1xuICAgICAgdGFzayA9IHd4LnVwbG9hZEZpbGUoe1xuICAgICAgICB1cmw6IHVybCBhcyBzdHJpbmcsXG4gICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCBhcyBzdHJpbmcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBoZWFkZXI6IGhlYWRlcnMsXG4gICAgICAgIHRpbWVvdXQsXG4gICAgICAgIHN1Y2Nlc3MocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5VcGxvYWRGaWxlU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuZXJyTXNnLFxuICAgICAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcixcbiAgICAgICAgICAgIGNvbmZpZzogT2JqZWN0LmFzc2lnbih7fSwgeyBtZXRob2QgfSwgY29uZmlnKSxcbiAgICAgICAgICAgIGNvb2tpZXM6IHJlcy5jb29raWVzXG4gICAgICAgICAgfVxuICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKGVycjogYW55KSB7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwi572R57uc5byC5bi477yM6K+356iN5ZCO6YeN6K+VXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IC0xLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogZXJyLmVyck1zZyxcbiAgICAgICAgICAgIGNvbmZpZzogT2JqZWN0LmFzc2lnbih7fSwgeyBtZXRob2QgfSwgY29uZmlnKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgbWluaU1ldGhvZCA9ICdPUFRJT05TJyB8ICdHRVQnIHwgJ0hFQUQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJyB8ICdUUkFDRScgfCAnQ09OTkVDVCdcbiAgICAgIHRhc2sgPSB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwgYXMgc3RyaW5nLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCBhcyBtaW5pTWV0aG9kLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBoZWFkZXI6IGhlYWRlcnMsXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgZGF0YVR5cGUsXG4gICAgICAgIHRpbWVvdXQsXG4gICAgICAgIHN1Y2Nlc3MocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuZXJyTXNnLFxuICAgICAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcixcbiAgICAgICAgICAgIGNvbmZpZzogT2JqZWN0LmFzc2lnbih7fSwgeyBtZXRob2QgfSwgY29uZmlnKSxcbiAgICAgICAgICAgIGNvb2tpZXM6IHJlcy5jb29raWVzXG4gICAgICAgICAgfVxuICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKGVycjogYW55KSB7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwi572R57uc5byC5bi477yM6K+356iN5ZCO6YeN6K+VXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IC0xLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogZXJyLmVyck1zZyxcbiAgICAgICAgICAgIGNvbmZpZzogT2JqZWN0LmFzc2lnbih7fSwgeyBtZXRob2QgfSwgY29uZmlnKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHByb2Nlc3NDYW5jZWwoKVxuICAgIGZ1bmN0aW9uIHByb2Nlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY2FuY2VsVG9rZW4ucHJvbWlzZVxuICAgICAgICAgIC50aGVuKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICB0YXNrLmFib3J0KClcbiAgICAgICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4geyB9KVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogQXhpb3NSZXNwb25zZSk6IHZvaWQge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QocmVzcG9uc2UpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG4iXX0=