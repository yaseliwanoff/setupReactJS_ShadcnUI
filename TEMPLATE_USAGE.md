# Использование как стартового шаблона

## 🎯 Как использовать этот проект

Этот репозиторий можно использовать как готовый стартовый шаблон для новых React проектов с современным стеком технологий.

## 📋 Быстрый старт

### 1. Клонирование репозитория
```bash
# Клонирование в новую папку
git clone [your-repo-url] my-new-project
cd my-new-project

# ИЛИ клонирование в текущую папку
git clone [your-repo-url] .
```

### 2. Обновление информации проекта
```bash
# Редактирование package.json
# Измените следующие поля:
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description"
}
```

### 3. Установка зависимостей
```bash
npm install
```

### 4. Запуск проекта
```bash
npm run dev
```

## 🔄 Настройка для нового проекта

### Обновление метаданных

**package.json:**
```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "author": "Your Name",
  "license": "MIT"
}
```

**index.html:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Project Title</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Очистка стартового кода

**src/App.jsx:**
```jsx
import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Your Project
        </h1>
        <p className="text-center mt-4 text-muted-foreground">
          Start building your amazing application!
        </p>
      </div>
    </div>
  )
}

export default App
```

## 🎨 Настройка дизайна

### Изменение цветовой схемы

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --radius: 0.5rem;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Добавьте свои цвета здесь */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* Добавьте свои цвета для темной темы */
}
```

### Добавление новых компонентов

```bash
# Добавление компонентов по необходимости
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## 📁 Структура для нового проекта

```
my-new-project/
├── public/                 # Статические файлы
├── src/
│   ├── components/         # Ваши компоненты
│   │   ├── ui/            # Shadcn UI компоненты
│   │   └── layout/        # Компоненты макета
│   ├── pages/             # Страницы приложения
│   ├── hooks/             # Кастомные хуки
│   ├── lib/               # Утилиты и конфигурации
│   ├── styles/            # Дополнительные стили
│   ├── App.jsx            # Главный компонент
│   ├── index.css          # Глобальные стили
│   └── main.jsx           # Точка входа
├── .gitignore
├── README.md              # Обновите под ваш проект
└── package.json           # Обновите метаданные
```

## 🚀 Готовые к использованию возможности

### ✅ Что уже настроено:

- **React 19** с последними возможностями
- **Vite 7** для быстрой разработки
- **Tailwind CSS 3.x** с правильной конфигурацией (стабильная версия)
- **Shadcn UI** с базовыми компонентами
- **PostCSS** с Autoprefixer
- **ESLint** для проверки кода
- **Import alias** (@/ для src/)
- **CSS переменные** для темной темы
- **Адаптивный дизайн** готов к использованию

### 🎯 Что можно сразу использовать:

- Красивые UI компоненты из Shadcn UI
- Система цветов и тем
- Адаптивная сетка Tailwind CSS
- Быстрая разработка с Hot Module Replacement
- Оптимизированная сборка для продакшена

## 📝 Рекомендации по разработке

### 1. Организация кода
```bash
# Создайте папки для организации
mkdir src/pages src/hooks src/lib src/styles
```

### 2. Добавление новых зависимостей
```bash
# Для роутинга
npm install react-router-dom

# Для управления состоянием
npm install zustand

# Для HTTP запросов
npm install axios

# Для валидации форм
npm install react-hook-form zod

# Для дополнительных Shadcn UI компонентов
npx shadcn@latest add dialog dropdown-menu select textarea form
```

### 3. Настройка дополнительных инструментов
```bash
# Для тестирования
npm install -D vitest @testing-library/react

# Для типизации (если нужен TypeScript)
npm install -D typescript @types/node
```

## 🔧 Полезные команды для нового проекта

```bash
# Добавление новых страниц
mkdir src/pages/Home src/pages/About

# Создание кастомных хуков
mkdir src/hooks
touch src/hooks/useLocalStorage.js

# Добавление утилит
mkdir src/lib
touch src/lib/utils.js

# Создание компонентов макета
mkdir src/components/layout
touch src/components/layout/Header.jsx
touch src/components/layout/Footer.jsx
```

## 📚 Следующие шаги

1. **Настройте роутинг** (если нужно)
2. **Добавьте управление состоянием** (если нужно)
3. **Настройте API клиент** (если нужно)
4. **Добавьте тесты** (если нужно)
5. **Настройте CI/CD** (если нужно)

## 🎉 Готово!

Теперь у вас есть полностью настроенный проект с современным стеком технологий, готовый для разработки вашего приложения!
