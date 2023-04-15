const form = document.getElementById('form')
const input = document.getElementById('query')
const showInfo = document.getElementById('show-info')

form.addEventListener('submit', (event) => {
	event.preventDefault()

	const search = input.value

	fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
		.then((response) => response.json())
		.then((data) => {
			showInfo.innerHTML = '';

			data.forEach((tvShow) => {
				const article = document.createElement('article');

				const name = document.createElement('h2');
				name.textContent = tvShow.show.name;
				article.appendChild(name);

				const url = document.createElement('a');
				url.href = tvShow.show.url;
				url.target = '_blank';
				url.textContent = tvShow.show.url;
				article.appendChild(url);

				const image = document.createElement('img');
				image.src = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
				image.alt = tvShow.show.name;
				article.appendChild(image);

				const summary = document.createElement('div');
				summary.innerHTML = tvShow.show.summary;
				article.appendChild(summary);

				showInfo.appendChild(article);
			});
		})
		.catch((error) => console.log(error));
});