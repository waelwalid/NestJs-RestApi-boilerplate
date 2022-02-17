FROM node:14-alpine
LABEL maintainer="Wael Walid <wael.walid91@gmail.com>"
ENV LINUX alpine
WORKDIR /var/www/app

RUN apk add --no-cache --force-refresh \
    curl \
    wget \
    net-tools \
    lsof \
    vim \
    bash \
    python2 \
    tcpdump \
    alpine-sdk \
    busybox-extras

# Create applicatin folder and adjust persmissions
RUN mkdir -p /var/www/app && \
    chown -Rf nobody:nobody /var/www/app
    
EXPOSE 80
# EXPOSE 9229

CMD [ "/usr/local/bin/npm", \
    "--prefix", \
    "/var/www/app", \
    "dev" ]