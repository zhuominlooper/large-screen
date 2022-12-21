FROM nginx
COPY dist/ /usr/share/nginx/html/large-screen
COPY bin/default.conf /etc/nginx/conf.d/default.conf
COPY bin/nginx.conf /etc/nginx/nginx.conf