# Ōkami — Web de Servicios Digitales

Sitio web corporativo de **Ōkami**, agencia independiente de Diseño Web y Marketing Digital especializada en dar visibilidad a comercios locales y emprendedores.

---

## 🚀 Características Principales

- **Arquitectura Limpia & SOLID**: Código TypeScript modular, tipado estricto y separación clara de responsabilidades.
- **Componentes Reutilizables (DRY)**: Componente base `BaseCard` unificado para renderizado eficiente de tarjetas de servicio y características.
- **Internacionalización (i18n)**: Módulos dedicados en `src/locales/es.ts` y `src/locales/en.ts` con detección automática de idioma y persistencia en `localStorage`.
- **Carga de Assets Robusta (GitHub Pages Ready)**: Helper de utilidades `getAssetUrl` y configuración relacional en Vite (`base: './'`) que garantizan la carga correcta de imágenes en cualquier subruta o dominio.
- **Modo Claro / Oscuro**: Gestión de tema con persistencia automática en `localStorage`.
- **SPA Navigation**: Navegación interna fluida y rápida utilizando React Router DOM.
- **Cumplimiento Legal (RGPD / LSSI)**: Páginas completas de Aviso Legal, Política de Privacidad, Política de Cookies y banner de consentimiento granular.

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología | Uso |
|-----------|------------|-----|
| **Core UI** | React 19 + TypeScript | Componentes modulares con tipado estricto |
| **Build Tool** | Vite 8 | Servidor dev ultra rápido y bundling optimizado |
| **Enrutamiento** | React Router DOM 7 | Navegación Single Page Application (SPA) |
| **Estilos** | Sass (SCSS Modules) | Estilos encapsulados y responsive |
| **Iconografía** | React Icons | Iconos vectoriales ligeros |
| **Linter** | Oxlint | Análisis estático de código de alto rendimiento |

---

## 📦 Estructura del Proyecto

```text
job/
├── public/                  # Assets estáticos servidos directamente (imágenes, favicon)
│   ├── favicon.png
│   └── images/
│       └── services/        # Imágenes de servicios y secciones en formato WebP
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # BaseCard, ServiceCard, FeatureCard, Hero, ServicesGrid, Features
│   │   └── ui/              # ModalContact, CookieBanner
│   ├── contexts/            # LanguageContext, ThemeContext, ModalContext
│   ├── locales/             # Diccionarios i18n (es.ts, en.ts)
│   ├── pages/               # Home, AboutPage, LegalNoticePage, PrivacyPolicyPage, CookiePolicyPage
│   ├── styles/              # globals.scss (variables CSS y reset)
│   ├── types/               # Definiciones de tipos e interfaces TypeScript
│   ├── utils/               # assetHelper.ts (resolución de URLs para GitHub Pages)
│   ├── App.tsx              # Enrutador principal y proveedores de contexto
│   └── main.tsx             # Punto de entrada de la aplicación
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo con HMR
npm run dev

# Validar tipos TypeScript y compilar para producción
npm run build

# Analizar la calidad del código con Oxlint
npm run lint

# Previsualizar la versión compilada localmente
npm run preview
```

---

## 📤 Despliegue en GitHub Pages

Para publicar este proyecto en **GitHub Pages**:

1. **Subir a GitHub**:
   ```bash
   git add .
   git commit -m "refactor: optimización de código y preparación para GitHub"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Desplegar con GitHub Actions**:
   - En tu repositorio de GitHub, ve a **Settings** > **Pages**.
   - En **Source**, selecciona **GitHub Actions**.
   - GitHub detectará automáticamente el proyecto Vite/React y desplegará la web en `https://TU_USUARIO.github.io/TU_REPOSITORIO/`.

---

## 📄 Licencia

Proyecto corporativo — Todos los derechos reservados © Ōkami.Ltd.