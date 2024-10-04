FROM node:20.14.0-alpine AS build

COPY . .

RUN apk update && apk upgrade && \
    apk add --no-cache git tzdata

RUN ln -s /usr/share/zoneinfo/Europe/London /etc/localtime

ENV SITE_ROOT="https://engineering.homeoffice.gov.uk/" \
    LANG="en_GB.UTF-8"

RUN npm ci --omit=dev
RUN npm run build

FROM nginx:1.27.2-alpine

COPY --from=build /_site /usr/share/nginx/html
COPY --from=build /nginx/nginx.conf /etc/nginx/nginx.conf

USER 1000

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
