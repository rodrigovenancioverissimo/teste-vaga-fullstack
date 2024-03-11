# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm 
RUN pnpm install
COPY . .
RUN pnpm generate
RUN pnpm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm 
RUN pnpm install --prod
COPY prisma prisma
RUN npx prisma generate
EXPOSE 4000
CMD ["pnpm", "start:prod"]
