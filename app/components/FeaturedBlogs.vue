<script setup>
const { data: allPosts } = await useAsyncData('content-featured', () =>
  queryCollection('content')
    .where('featured', '=', true)
    .select('title', 'description', 'date', 'path')
    .all()
)
</script>


<template>
  <div class="container mx-auto px-4 py-8">
    <div v-for="post in allPosts" :key="post.id" class="mb-6 p-4 border rounded-lg shadow">
        <h2 class="text-2xl font-semibold">
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </h2>
        <p class="text-gray-600">{{ post.description }}</p>
    </div>
  </div>
</template>