document.addEventListener('DOMContentLoaded', () => {
  let existing = localStorage.getItem("bins");
  
  if (existing) {
    const bin_ids = JSON.parse(existing);
    const container = document.querySelector('#sidebar-items')
    bin_ids.forEach( id => {
      const link = document.createElement('a');
      link.setAttribute('href', `http://requestbin.mohamadelchanti.com/bin/${id}/view`)
      link.innerText = id;
      container.appendChild(link)
    })
  }
})
