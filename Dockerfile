FROM node:carbon as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:carbon
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 80
CMD ["serve", "-l", "80", "-s", "."] 
