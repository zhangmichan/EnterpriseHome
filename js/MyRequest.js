function MyRequest(method, url, params, onsuccess) {
    const _this = this;

    this.xhr = new XMLHttpRequest();
    this.params = params;

    this.xhr.open(method, url);
    this.xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    MyRequest.prototype.onsuccess = onsuccess;

    this.xhr.onreadystatechange = function () {
        if (_this.xhr.readyState === 4 && _this.xhr.status === 200) {
            onsuccess(_this.xhr);
        }
    };

    MyRequest.prototype.send = function () {
        this.xhr.send(this.params);
    };
}