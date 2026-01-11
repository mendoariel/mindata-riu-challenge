# Dockerfile para desarrollo con Angular (última versión)
FROM node:20-alpine

# Instalar Angular CLI globalmente (última versión)
RUN npm install -g @angular/cli@latest

# Establecer el directorio de trabajo
WORKDIR /app

# Exponer el puerto 4200
EXPOSE 4200

# Crear script de entrada que instala dependencias automáticamente
RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'export NG_CLI_ANALYTICS=ci' >> /entrypoint.sh && \
    echo 'ng analytics off 2>/dev/null || true' >> /entrypoint.sh && \
    echo 'echo "Verificando dependencias..."' >> /entrypoint.sh && \
    echo 'if [ ! -d "node_modules" ] || [ ! -f "node_modules/.package-lock.json" ]; then' >> /entrypoint.sh && \
    echo '  echo "Instalando dependencias (esto solo ocurre la primera vez)..."' >> /entrypoint.sh && \
    echo '  npm install' >> /entrypoint.sh && \
    echo '  echo "Dependencias instaladas correctamente"' >> /entrypoint.sh && \
    echo 'else' >> /entrypoint.sh && \
    echo '  echo "Dependencias ya instaladas"' >> /entrypoint.sh && \
    echo 'fi' >> /entrypoint.sh && \
    echo 'echo "Iniciando servidor de desarrollo..."' >> /entrypoint.sh && \
    echo 'exec "$@"' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll", "2000"]
