# Ōkami — Web de Servicios Digitales

Sitio web corporativo de **Ōkami**, agencia independiente de Diseño Web y Marketing Digital especializada en ayudar a comercios locales y emprendedores a ganar visibilidad en internet.

## 🎯 Propósito del Proyecto

Este proyecto fue desarrollado para:
- **Presentar los servicios** de Ōkami de forma clara y profesional
- **Captar leads** mediante un formulario de contacto integrado
- **Generar confianza** mostrando metodología, casos de uso y propuesta de valor
- **Cumplir normativa legal** (RGPD, LSSI) con páginas de Aviso Legal, Política de Privacidad y Política de Cookies
- **Soportar multiidioma** (español/inglés) con detección automática del navegador

## 🛠️ Tecnologías Aplicadas

| Categoría | Tecnología | Versión | Uso |
|-----------|------------|---------|-----|
| **Frontend Framework** | React | 19.2.7 | Librería principal de UI, componentes funcionales y hooks |
| **Lenguaje** | TypeScript | 6.0.2 | Tipado estático para mayor robustez y mantenimiento |
| **Build Tool** | Vite | 8.1.1 | Servidor de desarrollo rápido, HMR y build optimizado |
| **Routing** | React Router DOM | 7.18.2 | Navegación SPA entre páginas (Home, About, Legal, etc.) |
| **Estilos** | Sass (SCSS) | 1.102.0 | CSS modular con variables, mixins y nesting |
| **Iconos** | React Icons | 5.7.0 | Iconografía consistente (Feather, Material, etc.) |
| **Linting** | Oxlint | 1.71.0 | Linter ultrarrápido basado en Oxc (Rust) |
| **Internacionalización** | Contexto propio | — | Sistema i18n ligero con `localStorage` y detección de navegador |
| **Gestión de Estado** | React Context | — | Theme (claro/oscuro), Modal, Language providers |

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, ServicesGrid, Features, ServiceCard, FeatureCard
│   └── ui/              # ModalContact, CookieBanner
├── contexts/            # LanguageContext, ThemeContext, ModalContext
├── pages/               # Home, AboutPage, LegalNoticePage, PrivacyPolicyPage, CookiePolicyPage
├── types/               # Interfaces TypeScript (ServiceItem, FeatureItem, etc.)
├── styles/              # globals.scss (variables, reset, utilidades)
├── App.tsx              # Rutas y providers globales
└── main.tsx             # Punto de entrada
```

## 🌐 Servicios que Presenta

1. **Web Profesional** — Diseño responsive, claridad y conversión
2. **Ficha de Google** — Perfil de Empresa optimizado para Maps y búsqueda local
3. **Posicionamiento SEO** — Estrategia keywords, contenido y autoridad
4. **Dominio y Hosting** — Infraestructura segura, rápida y gestionada
5. **5 Cuentas de Correo** — Email corporativo @tudominio
6. **Mantenimiento** — Soporte técnico y actualizaciones continuas

## ⚙️ Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (Vite + HMR)
npm run build    # Build de producción (TypeScript + Vite)
npm run lint     # Análisis estático con Oxlint
npm run preview  # Previsualización del build final
```

## 🚀 Despliegue

El build de producción genera archivos estáticos en `/dist` listos para servirse en:
- Netlify, Vercel, Cloudflare Pages
- Cualquier hosting estático (Nginx, Apache, AWS S3 + CloudFront)
- Servidor propio con Node/Express sirviendo `dist/`

## 📄 Páginas Legales Incluidas

- **Aviso Legal** — Datos identificativos, condiciones de uso, propiedad intelectual, responsabilidad, legislación aplicable (España/Madrid)
- **Política de Privacidad** — Responsable, datos recogidos, finalidad, legitimación, conservación, destinatarios, derechos ARCO
- **Política de Cookies** — Qué son, tipos (técnicas, analíticas GA, publicidad Google Ads), detalle, gestión y desactivación
- **Banner de Cookies** — Consentimiento granular (necesarias / analíticas / publicitarias) con persistencia en `localStorage`

## 🌍 Internacionalización

- **Idiomas**: Español (por defecto) e Inglés
- **Detección automática**: `navigator.language` al primer acceso
- **Persistencia**: Preferencia guardada en `localStorage` (`okami-lang`)
- **Cobertura**: 100% de strings UI, servicios, características, legales y formularios

## 🎨 Características UX/UI

- **Mobile-First** — Diseño responsive desde 320px
- **Modo oscuro/claro** — Toggle persistente con `prefers-color-scheme`
- **Accesibilidad** — Semántica HTML5, focus visible, contraste, ARIA en modales
- **Performance** — Imágenes WebP, lazy loading, code-splitting por rutas
- **SEO Ready** — Meta tags dinámicos, estructura heading correcta, sitemap-ready

## 📝 Licencia

Proyecto privado — Todos los derechos reservados © Ōkami.Ltd
