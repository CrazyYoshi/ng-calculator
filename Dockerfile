# Stage 1 - DEPENDANCIES
FROM node:15.5.1 AS deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --silent --frozen-lockfile 

#Stage 2 - BUILD
FROM node:15.5.1 AS build
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN echo "Based on environment: $environment"
RUN npm run build

# Stage 2 - RUNTIME
FROM nginx:1.17.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]