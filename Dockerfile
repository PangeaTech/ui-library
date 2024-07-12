FROM node:21
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "tailwind-and-storybook"]
EXPOSE 6006
