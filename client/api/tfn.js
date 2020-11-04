'use strict';

function getTFN() {
  return fetch('/api/tfn').then((response) => response.json());
}

export { getTFN };
