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
      const toast = document.getElementById('toast');
      let darkMode = localStorage.getItem('darkMode') === 'true';
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

      // ژانرها
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

      function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
      }

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
          score.innerHTML = '<i class="fa-solid fa-star"></i> ' + movie.Score;

          // دکمه علاقه‌مندی
          const favBtn = document.createElement('button');
          favBtn.className = 'fav-btn';
          favBtn.innerHTML = favorites.includes(movie.Name) ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
          favBtn.title = 'افزودن به علاقه‌مندی‌ها';
          favBtn.onclick = () => {
            if (favorites.includes(movie.Name)) {
              favorites = favorites.filter(f => f !== movie.Name);
              showToast('از علاقه‌مندی‌ها حذف شد');
            } else {
              favorites.push(movie.Name);
              showToast('به علاقه‌مندی‌ها اضافه شد');
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            render(filteredMovies);
          };

          content.appendChild(title);
          content.appendChild(genres);
          content.appendChild(score);
          content.appendChild(favBtn);

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
      function setDarkMode(on) {
        document.body.classList.toggle('dark', on);
        toggleDarkMode.innerHTML = on ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', on);
      }
      toggleDarkMode.addEventListener('click', () => {
        darkMode = !darkMode;
        setDarkMode(darkMode);
      });
      setDarkMode(darkMode);

      render(movies);
    }
  });
});
