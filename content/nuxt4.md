---
title: Nuxt 4 Markdown Blog Tutorial
description: A step-by-step tutorial on building a markdown blog with Nuxt 4 and @nuxt/content.
date: 2024-06-20
featured: true
---

## Introduction to Nuxt 4 and @nuxt/content
Nuxt 4 is a powerful framework for building Vue.js applications, and `@nuxt/content` is a module that allows you to write content in Markdown and use it in your Nuxt applications. This tutorial will guide you through the process of setting up a Nuxt 4 project and creating a markdown blog.

## Setting Up Your Nuxt 4 Project
To get started, you need to have Node.js installed on your computer. You can download it from the official website: [nodejs.org](https://nodejs.org/). Once you have Node.js installed, you can create a new Nuxt 4 project by running the following command in your terminal:
```bash
npx nuxi init my-nuxt4-blog
```
Navigate to the project directory and install the dependencies:
```bash
cd my-nuxt4-blog
npm install
```
## Installing @nuxt/content
Next, you need to install the `@nuxt/content` module. You can do this by running the following command:
```bash
npm install @nuxt/content
```
After installing the module, you need to add it to your `nuxt.config.ts` file:
```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
})
```