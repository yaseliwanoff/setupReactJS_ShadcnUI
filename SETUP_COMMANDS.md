# Полный список команд для создания проекта

## 🚀 Пошаговое создание проекта React + Vite + Tailwind CSS + Shadcn UI

### 1. Создание проекта React + Vite
```bash
# Создание проекта в новой папке
npm create vite@latest test-react -- --template react

# Переход в папку проекта
cd test-react

# Установка зависимостей
npm install
```

### 2. Установка Tailwind CSS (рекомендуется версия 3.x)
```bash
# Установка стабильной версии Tailwind CSS 3.x
npm install -D tailwindcss@^3.4.0 postcss autoprefixer

# ИЛИ для Tailwind CSS (экспериментальная версия)
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/postcss
```

### 3. Создание конфигурационных файлов

**tailwind.config.js:**
```bash
# Создание файла вручную или с помощью команды
npx tailwindcss init
```

**postcss.config.js:**
```bash
# Создание файла вручную или с помощью команды
npx tailwindcss init -p
```

**jsconfig.json:**
```bash
# Создание файла для import alias вручную
```

### 4. Обновление существующих файлов

**vite.config.js:**
```bash
# Добавление import alias конфигурации
```

**src/index.css:**
```bash
# Замена содержимого на Tailwind директивы
```

### 5. Инициализация Shadcn UI
```bash
# Инициализация Shadcn UI
npx shadcn@latest init

# Выбранные опции:
# - Base color: Neutral
# - Global CSS: src/index.css
# - CSS variables: Yes
# - Import alias: @/*
```

### 6. Установка базовых компонентов
```bash
# Установка основных компонентов Shadcn UI
npx shadcn@latest add button card input label
```

### 7. Удаление ненужных файлов
```bash
# Удаление App.css (так как используем Tailwind CSS)
rm src/App.css
```

### 8. Запуск проекта
```bash
# Запуск в режиме разработки
npm run dev
```

## 🔧 Команды для устранения проблем

### Исправление ошибки PostCSS с Tailwind CSS
```bash
# Установка правильного PostCSS плагина для Tailwind CSS
npm install -D @tailwindcss/postcss

# Обновление postcss.config.js
# Заменить 'tailwindcss': {} на '@tailwindcss/postcss': {}
```

### Исправление ошибки PostCSS (рекомендуемое решение)
```bash
# Удаление Tailwind CSS и установка стабильной версии 3.x
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@^3.4.0 postcss autoprefixer

# Обновление postcss.config.js для версии 3.x
# Использовать 'tailwindcss': {} вместо '@tailwindcss/postcss': {}
```

### Исправление ошибки import alias
```bash
# Создание jsconfig.json
# Добавление конфигурации в vite.config.js
```

### Исправление ошибок PowerShell
```bash
# Вместо: cd test-react && npm run dev
# Использовать:
cd test-react
npm run dev

# Или:
cd test-react; npm run dev
```

## 📦 Все установленные зависимости

### Основные зависимости (dependencies)
```bash
npm install react react-dom
npm install @radix-ui/react-label @radix-ui/react-slot
npm install class-variance-authority clsx lucide-react tailwind-merge
```

### Зависимости разработки (devDependencies)
```bash
npm install -D @vitejs/plugin-react vite
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
# ИЛИ для Tailwind CSS:
# npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
npm install -D eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh
npm install -D @types/react @types/react-dom
npm install -D globals tw-animate-css
```

## 🎯 Команды для дальнейшей разработки

### Добавление новых компонентов Shadcn UI
```bash
# Добавление одного компонента
npx shadcn@latest add button

# Добавление нескольких компонентов
npx shadcn@latest add card input label

# Добавление дополнительных компонентов
npx shadcn@latest add dialog dropdown-menu select textarea
```

### Команды сборки и разработки
```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview

# Проверка кода линтером
npm run lint
```

### Команды управления зависимостями
```bash
# Обновление всех зависимостей
npm update

# Проверка устаревших пакетов
npm outdated

# Аудит безопасности
npm audit

# Исправление проблем безопасности
npm audit fix

# Очистка кэша npm
npm cache clean --force
```

## 📝 Примечания

- Все команды выполнялись в PowerShell на Windows
- Использовалась последняя версия npm
- Проект создавался с использованием JavaScript (не TypeScript)
- **Рекомендуется использовать Tailwind CSS 3.x** для стабильности
- Tailwind CSS версии 4.1 требует отдельный PostCSS плагин и может вызывать проблемы
- Shadcn UI автоматически настраивает CSS переменные и утилиты
- PowerShell не поддерживает оператор `&&`, используйте отдельные команды

## 🚨 Важные моменты

1. **PostCSS плагин:** В Tailwind CSS изменился способ подключения PostCSS плагина
2. **Рекомендуется Tailwind CSS 3.x:** Более стабильная версия с меньшим количеством проблем
3. **Import alias:** Необходимо настроить как в jsconfig.json, так и в vite.config.js
4. **PowerShell:** Не поддерживает оператор &&, нужно использовать отдельные команды
5. **Shadcn UI:** Требует правильной настройки import alias перед инициализацией
6. **CSS переменные:** Shadcn UI требует специальные CSS переменные для правильной работы
