function foreachTree(data, childrenName = 'children', callback) {
    for (let i = 0; i < data.length; i++) {
        callback(data[i]);
        if (data[i][childrenName] && data[i][childrenName].length > 0) {
            foreachTree(data[i][childrenName], childrenName, callback);
        }
    }
}
