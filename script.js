document.addEventListener('DOMContentLoaded', () => {
  Papa.parse('data2.csv', {
    header: true,
    download: true,
    complete: function(results) {
      const movies = results.data.filter(m => m.Name && m.Image);
      const gallery = document.getElementById('gallery');
      const searchInput = document.getElementById('searchInput');
      const genreFilter = document.getElementById('genreFilter');
      const toggleDarkMode = document.getElementById('toggleDarkMode');
      let darkMode = false;

      // استخراج ژانرها و پر کردن فیلتر ژانر
      const genresSet = new Set();
      movies.forEach(movie => {
        try {
          JSON.parse(movie.Genre).forEach(g => genresSet.add(g));
        } catch {}
      });
      Array.from(genresSet).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
      });

      function render(filteredMovies) {
        gallery.innerHTML = '';
        filteredMovies.forEach((movie, index) => {
          const card = document.createElement('div');
          card.className = 'card';
          card.style.animationDelay = `${index * 0.05}s`;

          const img = document.createElement('img');
          img.src = movie.Image;
          img.alt = movie.Name;

          const content = document.createElement('div');
          content.className = 'card-content';

          const title = document.createElement('div');
          title.className = 'card-title';
          title.textContent = movie.Name;

          const genres = document.createElement('div');
          genres.className = 'card-genres';
          try {
            genres.textContent = JSON.parse(movie.Genre).join(', ');
          } catch {
            genres.textContent = movie.Genre;
          }

          const score = document.createElement('div');
          score.className = 'card-score';
          score.textContent = movie.Score;

          content.appendChild(title);
          content.appendChild(genres);
          content.appendChild(score);

          card.appendChild(img);
          card.appendChild(content);
          gallery.appendChild(card);
        });
      }

      function filterMovies() {
        const search = searchInput.value.trim().toLowerCase();
        const genre = genreFilter.value;
        const filtered = movies.filter(movie => {
          const nameMatch = movie.Name.toLowerCase().includes(search);
          let genreMatch = true;
          try {
            genreMatch = genre === '' || JSON.parse(movie.Genre).includes(genre);
          } catch {
            genreMatch = genre === '';
          }
          return nameMatch && genreMatch;
        });
        render(filtered);
      }

      searchInput.addEventListener('input', filterMovies);
      genreFilter.addEventListener('change', filterMovies);

      // حالت تاریک
      toggleDarkMode.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark', darkMode);
        toggleDarkMode.textContent = darkMode ? '☀️ حالت روشن' : '🌙 حالت تاریک';
      });

      render(movies);
    }
  });
});

// حالت تاریک CSS
const darkStyle = document.createElement('style');
darkStyle.textContent = `
  body.dark { background: #181818; color: #eee; }
  body.dark header, body.dark .controls, body.dark .card { background: #232323 !important; color: #eee; }
  body.dark .controls input, body.dark .controls select { background: #232323; color: #eee; border: 1px solid #444; }
  body.dark .controls button { background: #eee; color: #232323; }
  body.dark .controls button:hover { background: #ccc; }
  body.dark .card-title, body.dark .card-genres { color: #eee; }
`;
document.head.appendChild(darkStyle);
