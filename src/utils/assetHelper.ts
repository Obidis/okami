/**
 * Genera la URL adecuada para assets estáticos alojados en el directorio `public/`,
 * asegurando compatibilidad con GitHub Pages y subrutas de despliegue.
 *
 * @param path Ruta del asset (ej: '/images/services/hero.webp' o 'images/services/hero.webp')
 * @returns Ruta resuelta considerando import.meta.env.BASE_URL
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  // Si ya es una URL externa (http/https/data:), retornar tal cual
  if (/^(https?:|data:|\/\/)/i.test(path)) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL;
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${normalizedBase}${cleanPath}`;
};
