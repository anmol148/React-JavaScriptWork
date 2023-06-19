// Receive the query result from the main process
require('electron').ipcRenderer.on('query-result', (event, result) => {
    const resultList = document.getElementById('result-list');
  
    // Display the query result on the screen
    result.forEach((row) => {
      const li = document.createElement('li');
      li.textContent = JSON.stringify(row);
      resultList.appendChild(li);
    });
  });
  