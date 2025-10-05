// Temayı yükle
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('themeToggle');

// İkonu tema durumuna göre ayarla
function updateThemeIcon() {
  const current = document.documentElement.getAttribute('data-theme');
  const icon = themeToggle.querySelector('i');
  if (current === 'dark') {
    icon.className = 'fas fa-moon'; // Karanlık mod → Ay
  } else {
    icon.className = 'fas fa-sun';  // Açık mod → Güneş
  }
}

// Sayfa yüklendiğinde ikonu ayarla
updateThemeIcon();

// Butona tıklandığında tema değiştir
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon();
});

// Mobil menü
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Arama (basit filtreleme)
const searchInput = document.getElementById('searchInput');
const posts = document.querySelectorAll('.post');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  posts.forEach(post => {
    const title = post.querySelector('h2').textContent.toLowerCase();
    const excerpt = post.querySelector('.excerpt').textContent.toLowerCase();
    const tags = post.getAttribute('data-tags').toLowerCase();
    
    if (title.includes(term) || excerpt.includes(term) || tags.includes(term)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

// Yukarı Çık Butonu
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});