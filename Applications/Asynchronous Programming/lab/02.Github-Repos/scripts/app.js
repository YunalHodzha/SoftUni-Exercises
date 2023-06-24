function loadRepos() {
	let ul = document.getElementById("repos");
	let input = document.getElementById('username');
	let username = input.value;

	let url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(responce => {
			if (responce.status != 200) {
				throw new Error(`${responce.status} ${responce.statusText}`);
			}
			return responce.json()
		})
		.then(data => {
			data.forEach(element => {
				let li = createLi(element.full_name, element.html_url);
				ul.appendChild(li);
			});
		})
		.catch((e => {
			let li = createLi(e.message);
			ul.appendChild(li);
		}));
}

function createLi(name, url) {
	let li = document.createElement('li');
	let a = document.createElement('a');
	a.textContent = name;
	a.href = url;
	li.appendChild(a);
	return li;
}