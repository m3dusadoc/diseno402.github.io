/* ============================================
   VALENTINA RÍOS - PORTFOLIO
   Lógica de las 3 secciones
   ============================================ */

// ==========================================
// 1. DATOS DE PRODUCTOS
// ==========================================
const productos = [
    // INDUMENTARIA
    {
        id: 1,
        nombre: "Remera 'Luz y Sombra'",
        precio: 14990,
        precioAnterior: null,
        categoria: "indumentaria",
        tipo: "remeras",
        imagen: "https://acdn-us.mitiendanube.com/stores/920/457/products/mini-bag-cute-bordo-2-ba78cdee8c9d91e46517440472347405-1024-1024.webp",
        descripcion: "Remera oversize en algodón 100% orgánico con diseño fotográfico exclusivo impreso en serigrafía. La imagen 'Luz y Sombra' fue capturada por Valentina en su serie 'Claroscuro Porteño'. Edición limitada de 100 unidades.",
        talles: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 2,
        nombre: "Buzo 'Capas del Tiempo'",
        precio: 29990,
        precioAnterior: 38990,
        categoria: "indumentaria",
        tipo: "buzos",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
        descripcion: "Buzo de felpa francesa con capucha y bolsillo canguro. Estampado frontal con fotografía intervenida digitalmente. Interior afelpado ultra suave. Corte relajado unisex.",
        talles: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 3,
        nombre: "Camisa 'Texturas Urbanas'",
        precio: 22990,
        precioAnterior: null,
        categoria: "indumentaria",
        tipo: "camisas",
        imagen: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        descripcion: "Camisa de lino premium con estampado sublimado inspirado en texturas de muros de Buenos Aires. Cuello clásico, puños ajustables y corte recto. Perfecta para un look artístico y sofisticado.",
        talles: ["S", "M", "L", "XL"],
        destacado: false
    },
    // OBJETOS 3D
    {
        id: 4,
        nombre: "Lámpara 'Geometría Líquida'",
        precio: 34990,
        precioAnterior: null,
        categoria: "objetos3d",
        tipo: "decoracion",
        imagen: "https://i.etsystatic.com/20559101/r/il/d717be/3379464506/il_570xN.3379464506_mznl.jpg",
        descripcion: "Lámpara de diseño impresa en 3D con PLA biodegradable. Forma orgánica inspirada en el movimiento del agua. Incluye kit LED de bajo consumo. Pieza única firmada por la artista. Altura: 28cm.",
        talles: ["ÚNICO"],
        destacado: true
    },
    {
        id: 5,
        nombre: "Maceta 'Vórtex'",
        precio: 12990,
        precioAnterior: 16990,
        categoria: "objetos3d",
        tipo: "decoracion",
        imagen: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
        descripcion: "Maceta de diseño paramétrico impresa en resina ecológica. Textura espiral que genera juegos de luz y sombra. Incluye plato base. Ideal para suculentas y plantas pequeñas. Diámetro: 15cm.",
        talles: ["ÚNICO"],
        destacado: false
    },
    {
        id: 6,
        nombre: "Aros 'Prisma Fotográfico'",
        precio: 8990,
        precioAnterior: null,
        categoria: "objetos3d",
        tipo: "accesorios",
        imagen: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        descripcion: "Aros geométricos impresos en 3D con resina translúcida. Diseño inspirado en prismas fotográficos. Livianos y hipoalergénicos con gancho de acero quirúrgico. Cada par es único debido al proceso de impresión.",
        talles: ["ÚNICO"],
        destacado: false
    },
    {
        id: 7,
        nombre: "Escultura 'Memoria Fragmentada'",
        precio: 54990,
        precioAnterior: null,
        categoria: "objetos3d",
        tipo: "arte",
        imagen: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80",
        descripcion: "Pieza de arte contemporáneo impresa en 3D con tecnología SLA de alta resolución. Inspirada en la serie fotográfica 'Rostros del Abandono'. Firmada y numerada. Edición de 25 unidades. Altura: 35cm.",
        talles: ["ÚNICO"],
        destacado: true
    },
    {
        id: 8,
        nombre: "Porta Retrato 'Marco Infinito'",
        precio: 15990,
        precioAnterior: null,
        categoria: "objetos3d",
        tipo: "decoracion",
        imagen: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
        descripcion: "Porta retrato de diseño minimalista con efecto de marco infinito. Impreso en PLA negro mate con acabado premium. Soporta fotos de 10x15cm y 13x18cm. Base estable con detalle en cobre.",
        talles: ["ÚNICO"],
        destacado: false
    }
];

// ==========================================
// 2. DATOS DE GALERÍA
// ==========================================
const galeriaItems = [
    { id: 1, tipo: "foto", categoria: "viajes", titulo: "Amanecer en Salta", imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80", size: "wide" },
    { id: 2, tipo: "foto", categoria: "ferias", titulo: "Feria Masticar 2025", imagen: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 3, tipo: "foto", categoria: "viajes", titulo: "Calles de Lisboa", imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80", size: "tall" },
    { id: 4, tipo: "video", categoria: "ferias", titulo: "Behind the scenes - Expo Diseño", video: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 5, tipo: "foto", categoria: "viajes", titulo: "Desierto de Atacama", imagen: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 6, tipo: "foto", categoria: "ferias", titulo: "Stand en Feria Arte BA", imagen: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 7, tipo: "foto", categoria: "viajes", titulo: "Montañas de Patagonia", imagen: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=1200&q=80", size: "wide" },
    { id: 8, tipo: "foto", categoria: "ferias", titulo: "Workshop Impresión 3D", imagen: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 9, tipo: "video", categoria: "viajes", titulo: "Roadtrip por el Norte", video: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1527163065740-47d8399c9a4b?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 10, tipo: "foto", categoria: "viajes", titulo: "Bosques de Bariloche", imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 11, tipo: "foto", categoria: "ferias", titulo: "Público en Galería", imagen: "https://images.unsplash.com/photo-1577720580479-7d839d829c7e?auto=format&fit=crop&w=1200&q=80", size: "" },
    { id: 12, tipo: "foto", categoria: "viajes", titulo: "Ruinas de Cafayate", imagen: "https://images.unsplash.com/photo-1518632327079-089e4994f021?auto=format&fit=crop&w=1200&q=80", size: "tall" }
];

// ==========================================
// 3. UTILIDADES
// ==========================================
function formatearPrecio(precio) {
    return '$' + precio.toLocaleString('es-AR');
}

function detectarPagina() {
    const path = window.location.pathname.split('/').pop();
    if (path === 'tienda.html' || path === '') return 'tienda';
    if (path === 'galeria.html') return 'galeria';
    return 'portfolio';
}

// ==========================================
// 4. TIENDA - LÓGICA
// ==========================================
function inicializarTienda() {
    const container = document.getElementById('products-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!container) return;

    function renderProductos(filtro = 'todos') {
        let lista = productos;
        if (filtro === 'indumentaria') lista = productos.filter(p => p.categoria === 'indumentaria');
        if (filtro === 'objetos3d') lista = productos.filter(p => p.categoria === 'objetos3d');
        if (filtro === 'destacados') lista = productos.filter(p => p.destacado);

        if (lista.length === 0) {
            container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem;">No hay productos en esta categoría.</p>';
            return;
        }

        container.innerHTML = lista.map(prod => {
            const precioAntiguo = prod.precioAnterior
                ? `<span class="product-price-old">${formatearPrecio(prod.precioAnterior)}</span>`
                : '';
            const badge = prod.destacado ? '<span class="product-badge">Destacado</span>' : '';

            return `
                <article class="product-card" data-id="${prod.id}">
                    <div class="product-image-wrapper">
                        ${badge}
                        <img src="${prod.imagen}" alt="${prod.nombre}" class="product-image" loading="lazy">
                    </div>
                    <div class="product-info">
                        <p class="product-category">${prod.categoria === 'objetos3d' ? 'Objeto 3D · ' + prod.tipo : 'Indumentaria · ' + prod.tipo}</p>
                        <h3 class="product-name">${prod.nombre}</h3>
                        <div class="product-price-row">
                            <span class="product-price">${formatearPrecio(prod.precio)}</span>
                            ${precioAntiguo}
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => mostrarDetalle(parseInt(card.dataset.id)));
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProductos(btn.dataset.filter);
        });
    });

    renderProductos();
}

function mostrarDetalle(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    document.querySelector('.shop-hero')?.classList.add('hidden');
    document.querySelector('.shop-filters')?.closest('.section')?.classList.add('hidden');
    document.querySelector('.products-grid')?.closest('.section')?.classList.add('hidden');

    const precioAntiguo = prod.precioAnterior
        ? `<span class="detail-price" style="text-decoration:line-through;color:var(--text-muted);font-size:1.3rem;">${formatearPrecio(prod.precioAnterior)}</span>`
        : '';

    const talles = prod.talles.map((t, i) =>
        `<button class="detail-size-btn ${i === 0 ? 'selected' : ''}">${t}</button>`
    ).join('');

    const detail = document.createElement('section');
    detail.className = 'product-detail-view';
    detail.id = 'detail-view';
    detail.innerHTML = `
        <div class="container">
            <button class="btn-back" id="btn-volver">← Volver</button>
            <div class="detail-layout">
                <div class="detail-image-container">
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="detail-image">
                </div>
                <div class="detail-info">
                    <p class="detail-category">${prod.categoria === 'objetos3d' ? 'Objeto 3D · ' + prod.tipo : 'Indumentaria · ' + prod.tipo}</p>
                    <h1 class="detail-name">${prod.nombre}</h1>
                    <div class="detail-price-row">
                        <span class="detail-price">${formatearPrecio(prod.precio)}</span>
                        ${precioAntiguo}
                    </div>
                    <p class="detail-description">${prod.descripcion}</p>
                    <p class="detail-section-title">${prod.talles[0] === 'ÚNICO' ? 'Presentación' : 'Talle'}</p>
                    <div class="detail-sizes">${talles}</div>
                    <button class="btn-add-cart" id="btn-add">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    `;

    document.querySelector('main').appendChild(detail);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('btn-volver').addEventListener('click', () => {
        detail.remove();
        document.querySelector('.shop-hero')?.classList.remove('hidden');
        document.querySelector('.shop-filters')?.closest('.section')?.classList.remove('hidden');
        document.querySelector('.products-grid')?.closest('.section')?.classList.remove('hidden');
    });

    detail.querySelectorAll('.detail-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            detail.querySelectorAll('.detail-size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    document.getElementById('btn-add').addEventListener('click', function() {
        this.textContent = '✓ Agregado';
        this.style.background = '#4a7c59';
        setTimeout(() => {
            this.textContent = 'Agregar al Carrito';
            this.style.background = '';
        }, 2000);
    });
}

// ==========================================
// 5. GALERÍA - LÓGICA
// ==========================================
function inicializarGaleria() {
    const container = document.getElementById('gallery-container');
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    if (!container) return;

    function renderGaleria(filtro = 'todos') {
        let lista = galeriaItems;
        if (filtro !== 'todos') lista = galeriaItems.filter(i => i.categoria === filtro);

        container.innerHTML = lista.map(item => {
            const sizeClass = item.size ? item.size : '';
            const content = item.tipo === 'video'
                ? `<img src="${item.poster}" alt="${item.titulo}"><div class="play-icon">▶</div>`
                : `<img src="${item.imagen}" alt="${item.titulo}" loading="lazy">`;

            return `
                <div class="gallery-item ${sizeClass}" data-id="${item.id}" data-tipo="${item.tipo}">
                    ${content}
                    <div class="gallery-overlay">
                        <p class="gallery-item-title">${item.titulo}</p>
                        <p class="gallery-item-cat">${item.categoria}</p>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => abrirLightbox(parseInt(item.dataset.id)));
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGaleria(btn.dataset.filter);
        });
    });

    renderGaleria();
}

function abrirLightbox(id) {
    const item = galeriaItems.find(i => i.id === id);
    if (!item) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox active';
    lightbox.id = 'lightbox';

    const content = item.tipo === 'video'
        ? `<video controls autoplay src="${item.video}" poster="${item.poster}"></video>`
        : `<img src="${item.imagen}" alt="${item.titulo}">`;

    lightbox.innerHTML = `
        <button class="lightbox-close" id="lightbox-close">✕</button>
        <div class="lightbox-content">
            ${content}
            <p class="lightbox-caption">${item.titulo}</p>
        </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    const cerrar = () => {
        lightbox.remove();
        document.body.style.overflow = '';
    };

    document.getElementById('lightbox-close').addEventListener('click', cerrar);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) cerrar();
    });
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') {
            cerrar();
            document.removeEventListener('keydown', esc);
        }
    });
}

// ==========================================
// 6. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const pagina = detectarPagina();

    if (pagina === 'tienda') inicializarTienda();
    if (pagina === 'galeria') inicializarGaleria();

    // Marcar nav activa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) link.classList.add('active');
    });
});