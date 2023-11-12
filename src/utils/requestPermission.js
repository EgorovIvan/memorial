export default function() {
    return new Promise(function(resolve, reject) {
      const permissionResult = Notification.requestPermission(function(result) {
        // Поддержка устаревшей версии с функцией обратного вызова.
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    })
      .then(function(permissionResult) {
        return permissionResult === 'granted'
      });
}
