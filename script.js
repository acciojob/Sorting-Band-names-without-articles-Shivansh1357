//your code here
//your code here
const bandnames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Anthrax', 'The Who'];

function strip(bandname){
  return bandname.replace(/^(a |the |an )/i, '').trim();
}

const sortedbands = bandnames.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const bandlist = document.querySelector('#bands');

for (let i = 0; i < sortedbands.length; i++) {
  const li = document.createElement('li');
  li.textContent = sortedbands[i];
  bandlist.appendChild(li);
}