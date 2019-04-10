

const dataThemes =['tt0896986', 'tt0097240', 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951', 'tt0082176', 'tt0350258', 'tt2626962', 'tt0111693', 'tt0113540', 'tt0180093', 'tt0113627', 'tt2205401', 'tt0099685', 'tt0221027', 'tt0120669', 'tt0390221', 'tt0080360']:

function socialMovie () {dataThemes.map( function(item) {
    fetch('https://www.omdbapi.com/?i='+ item + '&apikey=6e2550ac')
      .then(res => res.json())
      .then(data => {