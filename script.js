// ============================================================
// 📚 BASE DE DATOS DE PROYECTOS
// ============================================================
// Para agregar un nuevo proyecto, simplemente añade un objeto
// más al array. Los campos son:
//   - title: título del proyecto
//   - author: nombre del estudiante
//   - category: 'diseno' | 'informatica' | 'otros'
//   - description: breve descripción
//   - image: ruta a la miniatura (en carpeta /thumbnails)
//   - url: enlace a la página web del estudiante
// ============================================================

const proyectos = [
    {
        title: "Trabajos artísticos",
        author: "Sofia Alvarez",
        category: "diseno",
        description: "Portfolio audiovisual y gráfico",
        image: "thumbnails/proyecto1.jpg",
        url: "proyectos/sofia-alvarez/index.html"  // ← Ruta local
    },
    {
        title: "Portfolio Personal Óscar Picone",
        author: "Jesus Suarez",
        category: "diseno",
        description: "Portfolio personal",
        image: "thumbnails/proyecto2.jpg",
        url: "proyectos/jesus-suarez/index.html"  // ← Ruta local
    },
    {
        title: "MemePods",
        author: "Sofia Alvarez",
        category: "otros",
        description: "Podcast sobre memes",
        image: "thumbnails/proyecto3.jpg",
        url: "proyectos/sofia-podcast/index.html"  // ← Ruta local
    },
    {
        title: "Portfolio Fotográfico",
        author: "Paola Leon",
        category: "diseno",
        description: "Portfolio fotografico sobre la naturaleza y sus habitantes",
        image: "thumbnails/proyecto4.jpg",
        url: "proyectos/paola-leon/index.html"  // ← Ruta local
    },
    {
        title: "Portfolio Personal Tomas Wassouf",
        author: "Tomas Wassouf",
        category: "otros",
        description: "Portfolio profesional y artistico",
        image: "thumbnails/proyecto5.jpg",
        url: "proyectos/tomas-wassouf/index.html"  // ← Ruta local
    },
    {
        title: "Galeria de productos",
        author: "Josefina Di Leo",
        category: "indumentaria",
        description: "Portal de venta de indumentaria y accesorios",
        image: "thumbnails/proyecto6.jpg",
        url: "proyectos/josefina-dileo/index.html"  // ← Ruta local
    },
    {
        title: "Portfolio personal Katherine Ledesma",
        author: "Katherine Ledesma",
        category: "otros",
        description: "Portfolio profesional y artistico",
        image: "thumbnails/proyecto7.jpg",
        url: "proyectos/katherine-ledesma/index.html"  // ← Ruta local
    },
    {
        title: "Portfolio Fotográfico",
        author: "Maria de los Angeles Canaza Julian",
        category: "diseno",
        description: "Portfolio fotografico sobre la naturaleza y sus habitantes",
        image: "thumbnails/proyecto8.jpg",
        url: "proyectos/angeles-canaza/index.html"  // ← Ruta local
    },
    {
        title: "Podcast sobre cambio climatico",
        author: "Alejandra Pena",
        category: "otros",
        description: "Podcast sobre cambio climatico",
        image: "thumbnails/proyecto9.jpg",
        url: "proyectos/alejandra-pena/index.html"  // ← Ruta local
    }
];

// ============================================================
// 🎨 RENDERIZADO DE LA GALERÍA
// ============================================================

const grid = document.getElementById('projectsGrid');

function renderProyectos(lista) {
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-soft); padding: 2rem;">No hay proyectos en esta categoría.</p>';
        return;
    }
    
    lista.forEach((proyecto, index) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.category = proyecto.category;
        
        card.innerHTML = `
            <div class="project-card__image">
                <img src="${proyecto.image}" alt="Miniatura de ${proyecto.title}" loading="lazy">
                <div class="project-card__overlay">
                    <span class="project-card__visit">Ver proyecto →</span>
                </div>
            </div>
            <div class="project-card__info">
                <span class="project-card__category">${getCategoriaLegible(proyecto.category)}</span>
                <h3 class="project-card__title">${proyecto.title}</h3>
                <p class="project-card__author">por ${proyecto.author}</p>
                <p class="project-card__description">${proyecto.description}</p>
                <a href="${proyecto.url}" class="project-card__link">
    Ver proyecto →
</a>
            </div>
        `;
        
        // Click en la tarjeta abre el link
        card.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
        window.location.href = proyecto.url;  // Navega en la misma pestaña
    }
});

        
        grid.appendChild(card);
    });
}

function getCategoriaLegible(cat) {
    const categorias = {
        'diseno': 'Diseño Web',
        'informatica': 'Informática',
        'otros': 'Otros'
    };
    return categorias[cat] || cat;
}

// ============================================================
// 🔍 SISTEMA DE FILTROS
// ============================================================

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Actualizar botón activo
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        if (filter === 'all') {
            renderProyectos(proyectos);
        } else {
            const filtrados = proyectos.filter(p => p.category === filter);
            renderProyectos(filtrados);
        }
    });
});

// ============================================================
// 🚀 INICIALIZACIÓN
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    renderProyectos(proyectos);
});