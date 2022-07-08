const onClick = function() {
  const val = document.querySelector("#url-input").value
	const tidied = val.split('?')[0];
	navigator.clipboard.writeText(tidied)
	this.innerHTML = 'Copied!'
	setTimeout(() => this.innerHTML = 'Click to copy the nice URL', 2000)
}

document.querySelector("#copy-button").addEventListener('click', onClick)