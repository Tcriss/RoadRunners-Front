FROM node:20.11-alpine as build

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build-dev

FROM nginx:stable
COPY --from=build /app/dist/road-runners/browser /usr/share/nginx/html

EXPOSE 80