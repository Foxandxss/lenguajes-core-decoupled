# Lenguajes demo

This project is a normal CLI application with SSR support.

Try it with `ng serve` and to generate a production ready build with SSR, `npm run build:ssr` (and try it with `npm run serve:ssr`)

CLI doesn't support Lazy Loading with SSR just yet, if you try to SSR a lazy loaded path, it will give an error but it will rendered by angular normally, so no need of avoiding lazy loading all together, they will work eventually.
