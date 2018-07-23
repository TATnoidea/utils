function ajax(method, api, params) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${url}${api}`);
    xhr.onload = function() {
      try {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(new Error(`${this.status}:${this.statusText}`));
        }
      } catch (e) {
        reject(e.message);
      }
    };
    xhr.onerror = function() {
      reject(new Error(`${this.status}:${this.statusText}`));
    };

    if (!params) {
      xhr.send();
    } else {
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(params);
    }
  });
}

export default ajax;