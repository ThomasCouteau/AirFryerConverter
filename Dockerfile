# Étape 1 : Construction de l'application Vue avec Vite
FROM node:lts-alpine AS builder

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste de l'application
COPY . .

# Construction de l'application pour la production
RUN npm run build

# Étape 2 : Serveur web pour les fichiers statiques
FROM nginx:alpine

# Copie des fichiers de build dans le dossier par défaut d'nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose le port 80
EXPOSE 80

# Commande de démarrage de nginx
CMD ["nginx", "-g", "daemon off;"]
