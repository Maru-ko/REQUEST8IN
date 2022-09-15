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

}

document.addEventListener('DOMContentLoaded', () => {
  let buttons = document.querySelectorAll('.create-bin-button');
  Array.prototype.slice.call(buttons).forEach( button => {
    button.addEventListener('click', createBin)
  })
});
