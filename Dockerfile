FROM node:alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 5000
CMD ["serve", "-l", "5000", "-s", "."] 
