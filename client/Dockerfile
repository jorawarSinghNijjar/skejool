# BUILD
FROM node:alpine as builder 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# SERVE
FROM nginx:alpine
COPY --from=builder /app/dist/client/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 8000
# CMD ["nginx", "-g", "daemon off;"]
