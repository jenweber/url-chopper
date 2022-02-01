const onClick = () => {
  const val = document.querySelector("#url-input").value
	const tidied = val.split('?')[0];
	navigator.clipboard.writeText(tidied)
}

document.querySelector("#copy-button").addEventListener('click', onClick)