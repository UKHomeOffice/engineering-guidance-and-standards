FROM node:20.8.1-alpine AS build

COPY . .

RUN apk update && apk upgrade && \
    apk add --no-cache git

RUN npm ci --omit=dev
RUN npm run build

FROM nginx:1.25.2-alpine

COPY --from=build /_site /usr/share/nginx/html
COPY --from=build /nginx/nginx.conf /etc/nginx/nginx.conf

USER 1000

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
