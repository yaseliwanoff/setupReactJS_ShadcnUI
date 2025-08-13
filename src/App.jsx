import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  const [email, setEmail] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email submitted: ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tailwind CSS Test - React + Vite + Shadcn UI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Если вы видите стилизованный текст, Tailwind CSS работает!
          </p>
        </div>

        {/* Tailwind CSS Test Section */}
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Tailwind CSS Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
              <p className="font-bold">Blue Background</p>
              <p className="text-sm">bg-blue-500</p>
            </div>
            <div className="p-4 bg-green-500 text-white rounded-lg text-center">
              <p className="font-bold">Green Background</p>
              <p className="text-sm">bg-green-500</p>
            </div>
            <div className="p-4 bg-purple-500 text-white rounded-lg text-center">
              <p className="font-bold">Purple Background</p>
              <p className="text-sm">bg-purple-500</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Feature Card 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                Vite
              </CardTitle>
              <CardDescription>
                Молниеносно быстрый инструмент сборки для современной веб-разработки
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vite обеспечивает мгновенный запуск сервера разработки и быструю сборку благодаря ES модулям.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚛️</span>
                </div>
                React
              </CardTitle>
              <CardDescription>
                Библиотека для создания пользовательских интерфейсов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React позволяет создавать интерактивные UI компоненты с декларативным подходом.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🎨</span>
                </div>
                Tailwind CSS
              </CardTitle>
              <CardDescription>
                Utility-first CSS фреймворк для быстрой разработки
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tailwind CSS 3.x предоставляет готовые классы для быстрого создания красивых интерфейсов.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Counter Card */}
          <Card>
            <CardHeader>
              <CardTitle>Интерактивный счетчик</CardTitle>
              <CardDescription>
                Простой пример состояния в React
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {count}
                </div>
                <div className="space-x-2">
                  <Button 
                    onClick={() => setCount(count - 1)}
                    variant="outline"
                  >
                    -1
                  </Button>
                  <Button 
                    onClick={() => setCount(0)}
                    variant="secondary"
                  >
                    Сброс
                  </Button>
                  <Button 
                    onClick={() => setCount(count + 1)}
                  >
                    +1
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Card */}
          <Card>
            <CardHeader>
              <CardTitle>Подписка на новости</CardTitle>
              <CardDescription>
                Получайте уведомления о новых возможностях
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Подписаться
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            ✅ Tailwind CSS работает! Создано с ❤️ используя React, Vite, Tailwind CSS и Shadcn UI
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" size="sm">
              Документация
            </Button>
            <Button variant="outline" size="sm">
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              Поддержка
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
