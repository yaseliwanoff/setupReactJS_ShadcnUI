# 🔧 Устранение неполадок

## 🚨 Частые проблемы и их решения

### 1. Ошибка PostCSS с Tailwind CSS

**Проблема:**
```
[plugin:vite:css] [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

**Решение 1 (рекомендуется):**
```bash
# Удаление Tailwind CSS 4.1 и установка стабильной версии 3.x
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@^3.4.0 postcss autoprefixer

# Обновление postcss.config.js для версии 3.x
# Использовать 'tailwindcss': {} вместо '@tailwindcss/postcss': {}
```

**Решение 2 (для Tailwind CSS 4.1):**
```bash
# Установка правильного PostCSS плагина для Tailwind CSS 4.1
npm install -D @tailwindcss/postcss

# Обновление postcss.config.js
# Заменить 'tailwindcss': {} на '@tailwindcss/postcss': {}
```

### 2. Ошибка PowerShell с && оператором

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
```

### 3. Ошибка "Missing script: dev"

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

### 4. Shadcn UI компоненты не отображаются

**Проблема:**
Компоненты Shadcn UI не стилизуются или не отображаются

**Решение:**
```bash
# Проверить установку компонентов
npx shadcn@latest add button

# Проверить CSS переменные в src/index.css
# Убедиться, что @tailwind директивы подключены

# Проверить конфигурацию Tailwind CSS
# Убедиться, что кастомные цвета добавлены в tailwind.config.js
```

### 5. Ошибка с зависимостями

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

### 6. Tailwind CSS классы не работают

**Проблема:**
Tailwind CSS классы не применяются к элементам

**Решение:**
```bash
# Проверить, что CSS файл подключен в main.jsx
import './index.css'

# Проверить, что @tailwind директивы есть в index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Пересобрать проект
npm run build
npm run dev
```

### 7. Import alias не работает

**Проблема:**
```
No import alias found in your tsconfig.json file
```

**Решение:**
```bash
# Создание jsconfig.json для JavaScript проектов
# Добавление конфигурации alias в vite.config.js

# Проверить jsconfig.json:
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

# Проверить vite.config.js:
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

## 🔍 Диагностика проблем

### Проверка конфигурации

1. **Проверить версию Tailwind CSS:**
```bash
npm list tailwindcss
```

2. **Проверить PostCSS конфигурацию:**
```bash
cat postcss.config.js
```

3. **Проверить Tailwind конфигурацию:**
```bash
cat tailwind.config.js
```

4. **Проверить CSS файл:**
```bash
cat src/index.css
```

### Проверка в браузере

1. **Открыть Developer Tools (F12)**
2. **Проверить вкладку Console** на наличие ошибок
3. **Проверить вкладку Network** - должен загружаться index.css
4. **Проверить вкладку Elements** - должны применяться Tailwind классы

## 📋 Чек-лист для отладки

- [ ] Node.js версии 18+ установлен
- [ ] npm или yarn установлен
- [ ] Проект клонирован в правильную папку
- [ ] Зависимости установлены (`npm install`)
- [ ] CSS файл подключен в main.jsx
- [ ] @tailwind директивы есть в index.css
- [ ] PostCSS конфигурация правильная
- [ ] Tailwind конфигурация правильная
- [ ] Import alias настроен
- [ ] Shadcn UI компоненты установлены
- [ ] CSS переменные для Shadcn UI добавлены
- [ ] Сервер запускается без ошибок
- [ ] Браузер открывает правильный адрес
- [ ] Нет ошибок в консоли браузера

## 🆘 Если ничего не помогает

1. **Полная переустановка:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Очистка кэша:**
```bash
npm cache clean --force
```

3. **Перезапуск сервера:**
```bash
npm run dev
```

4. **Проверка портов:**
```bash
# Убедиться, что порт 5173 или 5174 свободен
```

5. **Создание нового проекта:**
```bash
# Если все не помогает, создать проект заново
npm create vite@latest my-new-project -- --template react
```

---

**💡 Совет: Всегда проверяйте консоль браузера (F12) для диагностики проблем!**

