async function createBin(event) {
  event.preventDefault();
  let res = await fetch('/', {
    method: 'POST'
  })
  let json = await res.json();
  let newBinId = json.newBin;

  let data = localStorage.getItem('bins')
  if (data) {
    let bins = JSON.parse(data)
    bins.push(newBinId)
    localStorage.setItem('bins', JSON.stringify(bins))
  } else {
    localStorage.setItem('bins', JSON.stringify([newBinId]))
  }
  window.location.href = `http://${location.hostname}/bin/${newBinId}/view`
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('create-bin-button').addEventListener('click', createBin)
});