<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`content-${slug}`, () => {
  return queryCollection('content').path(`/${slug}`).first()
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
  <p class="text-gray-600 mb-8">{{ post.date }}</p>
  <!-- Use ContentRenderer to render the markdown content -->
  <ContentRenderer :value="post" />
</template>
