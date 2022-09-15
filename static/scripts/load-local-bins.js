document.addEventListener('DOMContentLoaded', async () => {
  let existing = localStorage.getItem("bins");
  
  if (existing) {
    let bin_ids = JSON.parse(existing);
    let res = await fetch(`https://${location.hostname}/verifybins`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bin_ids)
    })

    bin_ids = await res.json(); 
    localStorage.setItem("bins", JSON.stringify(bin_ids));
    const container = document.querySelector('#sidebar-items')
    bin_ids.forEach(id => {
      const link = document.createElement('a');
      link.setAttribute('href', `http://${location.hostname}/bin/${id}/view`)
      link.innerText = id;
      container.appendChild(link)
    })
  }
})
