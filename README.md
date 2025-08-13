# React + Vite + Tailwind CSS 4.1 + Shadcn UI

Современный стартовый шаблон для React проектов с использованием Vite, Tailwind CSS 4.1 и Shadcn UI.

## 🚀 Технологии

- **React 19** - Библиотека для создания пользовательских интерфейсов
- **Vite 7** - Молниеносно быстрый инструмент сборки
- **Tailwind CSS 4.1** - Utility-first CSS фреймворк
- **Shadcn UI** - Красивые и доступные компоненты
- **PostCSS** - Инструмент для обработки CSS
- **Autoprefixer** - Автоматическое добавление вендорных префиксов

## 📦 Быстрый старт

```bash
# Клонирование репозитория
git clone [your-repo-url]
cd test-react

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Проект будет доступен по адресу: http://localhost:5173

## 🏗️ Полный процесс создания проекта с нуля

### 1. Создание проекта React + Vite

```bash
# Создание проекта в текущей директории
npm create vite@latest . -- --template react

# ИЛИ создание в новой папке
npm create vite@latest my-project -- --template react
cd my-project

# Установка зависимостей
npm install
```

### 2. Установка и настройка Tailwind CSS 4.1

```bash
# Установка Tailwind CSS и PostCSS
npm install -D tailwindcss postcss autoprefixer

# Установка отдельного PostCSS плагина для Tailwind CSS 4.1
npm install -D @tailwindcss/postcss
```

### 3. Создание конфигурационных файлов

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js:**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**jsconfig.json:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 4. Настройка Vite для import alias

**vite.config.js:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### 5. Обновление CSS файла

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Инициализация Shadcn UI

```bash
# Инициализация Shadcn UI
npx shadcn@latest init

# Выбор опций:
# - Base color: Neutral
# - Global CSS: src/index.css
# - CSS variables: Yes
# - Import alias: @/*
```

### 7. Установка базовых компонентов Shadcn UI

```bash
# Установка основных компонентов
npx shadcn@latest add button card input label

# Дополнительные компоненты (по необходимости)
npx shadcn@latest add dialog dropdown-menu select textarea
```

## 📁 Структура проекта

```
test-react/
├── public/                 # Статические файлы
├── src/
│   ├── components/
│   │   └── ui/            # Shadcn UI компоненты
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── label.jsx
│   ├── lib/
│   │   └── utils.js       # Утилиты Shadcn UI
│   ├── App.jsx            # Главный компонент
│   ├── index.css          # Tailwind CSS директивы
│   └── main.jsx           # Точка входа
├── .gitignore
├── index.html
├── jsconfig.json          # Конфигурация import alias
├── package.json
├── postcss.config.js      # Конфигурация PostCSS
├── tailwind.config.js     # Конфигурация Tailwind CSS
├── vite.config.js         # Конфигурация Vite
└── README.md
```

## 🎨 Особенности

- ✅ Современный стек разработки (React 19 + Vite 7)
- ✅ Tailwind CSS 4.1 с новым PostCSS плагином
- ✅ Красивый UI с Shadcn UI компонентами
- ✅ Адаптивный дизайн для всех устройств
- ✅ Поддержка темной темы
- ✅ Интерактивные элементы
- ✅ Оптимизированная производительность
- ✅ Import alias для удобного импорта
- ✅ Готовые компоненты для быстрой разработки

## 🔧 Команды разработки

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview

# Проверка кода линтером
npm run lint

# Добавление нового Shadcn UI компонента
npx shadcn@latest add [component-name]
```

## 🚨 Устранение неполадок

### Ошибка PostCSS с Tailwind CSS 4.1

**Проблема:**
```
[plugin:vite:css] [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

**Решение:**
```bash
# Установка правильного PostCSS плагина для Tailwind CSS 4.1
npm install -D @tailwindcss/postcss

# Обновление postcss.config.js
# Заменить 'tailwindcss': {} на '@tailwindcss/postcss': {}
```

**Альтернативное решение (рекомендуется):**
```bash
# Удаление Tailwind CSS 4.1 и установка стабильной версии 3.x
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@^3.4.0 postcss autoprefixer

# Обновление postcss.config.js для версии 3.x
# Использовать 'tailwindcss': {} вместо '@tailwindcss/postcss': {}
```

### Ошибка import alias

**Проблема:**
```
No import alias found in your tsconfig.json file
```

**Решение:**
```bash
# Создание jsconfig.json для JavaScript проектов
# Добавление конфигурации alias в vite.config.js
```

### Ошибка "Missing script: dev"

**Проблема:**
```
npm error Missing script: "dev"
```

**Решение:**
```bash
# Убедиться, что вы находитесь в правильной директории
cd test-react

# Проверить наличие package.json
ls package.json

# Переустановить зависимости
npm install

# Проверить скрипты в package.json
npm run
```

### Ошибка PowerShell с && оператором

**Проблема:**
```
Лексема "&&" не является допустимым разделителем операторов в этой версии.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyValidatedErrorId : InvalidEndOfLine
```

**Решение:**
```bash
# Использовать отдельные команды
cd test-react
npm run dev

# Или использовать ;
cd test-react; npm run dev

# Или использовать отдельные команды в PowerShell
cd test-react
npm run dev
```

### Компоненты Shadcn UI не отображаются

**Проблема:**
Компоненты не стилизуются или не отображаются

**Решение:**
```bash
# Проверить установку компонентов
npx shadcn@latest add button

# Проверить CSS переменные в src/index.css
# Убедиться, что @tailwind директивы подключены
```

### Ошибка с зависимостями

**Проблема:**
```
npm ERR! peer dep missing
```

**Решение:**
```bash
# Очистка кэша npm
npm cache clean --force

# Удаление node_modules и package-lock.json
rm -rf node_modules package-lock.json

# Переустановка зависимостей
npm install
```

## 📝 Полезные команды

```bash
# Обновление всех зависимостей
npm update

# Проверка устаревших пакетов
npm outdated

# Аудит безопасности
npm audit

# Исправление проблем безопасности
npm audit fix

# Добавление новых Shadcn UI компонентов
npx shadcn@latest add [component-name]

# Просмотр доступных компонентов
npx shadcn@latest add --help
```

## 🎯 Использование как стартового шаблона

1. **Клонируйте репозиторий:**
   ```bash
   git clone [your-repo-url] my-new-project
   cd my-new-project
   ```

2. **Обновите package.json:**
   - Измените `name` на название вашего проекта
   - Обновите `version` если необходимо

3. **Установите зависимости:**
   ```bash
   npm install
   ```

4. **Начните разработку:**
   ```bash
   npm run dev
   ```

## 📚 Дополнительные ресурсы

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [PostCSS Documentation](https://postcss.org/)

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для получения дополнительной информации.

---

**Создано с ❤️ для упрощения разработки React приложений с современным стеком технологий.**
