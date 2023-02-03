# FROM node:16.16
# WORKDIR /work
# COPY . .
# RUN corepack enable pnpm && pnpm i && pnpm prisma generate && pnpm build

# FROM node:16.16-alpine
# WORKDIR /app
# COPY --from=0 /work/dist/index.js /app/index.js
# COPY --from=0 /work/prisma/schema.prisma /app/schema.prisma
# CMD [ "node", "." ]

FROM node:19.6
WORKDIR /work
COPY . .
RUN corepack enable pnpm && pnpm i && pnpm prisma generate && pnpm build && pnpm pkg dist/index.js