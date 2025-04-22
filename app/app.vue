<script setup lang="ts">
// Используем режим цвета (темный или светлый) с помощью функции useColorMode
const colorMode = useColorMode()

// Вычисляем цвет в зависимости от текущего режима цвета
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

// Устанавливаем мета-теги и атрибуты для HTML-документа
useHead({
  meta: [
    { charset: 'utf-8' }, // Устанавливаем кодировку страницы
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // Устанавливаем параметры viewport для адаптивности
    { key: 'theme-color', name: 'theme-color', content: color } // Устанавливаем цвет темы в зависимости от режима цвета
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' } // Указываем путь к иконке сайта
  ],
  htmlAttrs: {
    lang: 'en' // Устанавливаем язык документа
  }
})

// Настраиваем SEO-мета-теги
useSeoMeta({
  titleTemplate: '%s - Nuxt UI Pro - SaaS template', // Шаблон заголовка страницы
  ogImage: 'https://saas-template.nuxt.dev/social-card.png', // Изображение для Open Graph
  twitterImage: 'https://saas-template.nuxt.dev/social-card.png', // Изображение для Twitter
  twitterCard: 'summary_large_image' // Формат карточки для Twitter
})

// Загружаем данные навигации асинхронно
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || [] // Преобразуем данные, чтобы получить дочерние элементы для пути '/docs'
})

// Загружаем данные для поиска лениво (только на клиенте)
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false // Указываем, что данные загружаются только на клиенте
})

// Определяем ссылки для навигации
const links = [{
  label: 'Docs', // Название ссылки
  icon: 'i-lucide-book', // Иконка для ссылки
  to: '/docs/getting-started' // Путь для перехода
}, {
  label: 'Pricing',
  icon: 'i-lucide-credit-card',
  to: '/pricing'
}, {
  label: 'Blog',
  icon: 'i-lucide-pencil',
  to: '/blog'
}]

// Предоставляем данные навигации для использования в дочерних компонентах
provide('navigation', navigation)
</script>

<template>
  <UApp>
    <!-- Индикатор загрузки для Nuxt -->
    <NuxtLoadingIndicator />

    <!-- Основной макет приложения -->
    <NuxtLayout>
      <!-- Отображение текущей страницы -->
      <NuxtPage />
    </NuxtLayout>

    <!-- Компонент, который рендерится только на клиенте -->
    <ClientOnly>
      <!-- Компонент для поиска контента -->
      <LazyUContentSearch
        :files="files" 
        shortcut="meta_k" 
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
