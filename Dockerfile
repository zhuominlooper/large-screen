FROM nginx
COPY dist/ /usr/share/nginx/html/large-screen
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf