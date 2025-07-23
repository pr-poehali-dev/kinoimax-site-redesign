import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const premieres = [
    { date: '23 июля', title: 'Оппенгеймер 2', genre: 'Биография', time: '19:30' },
    { date: '25 июля', title: 'Человек-паук: Новая вселенная', genre: 'Супергерои', time: '20:00' },
    { date: '28 июля', title: 'Дюна: Часть третья', genre: 'Фантастика', time: '18:45' },
    { date: '30 июля', title: 'Джон Уик 5', genre: 'Боевик', time: '21:15' }
  ];

  const newMovies = [
    { title: 'Бегущий по лезвию 2049', year: '2024', rating: '8.8', genre: 'Фантастика' },
    { title: 'Мстители: Секретные войны', year: '2024', rating: '9.1', genre: 'Супергерои' },
    { title: 'Интерстеллар 2', year: '2024', rating: '8.9', genre: 'Фантастика' },
    { title: 'Гладиатор 3', year: '2024', rating: '8.5', genre: 'Драма' }
  ];

  const news = [
    { title: 'Новый трейлер "Дюна: Часть третья" набрал 50 млн просмотров за сутки', time: '2 часа назад' },
    { title: 'Кристофер Нолан анонсировал новый проект после "Оппенгеймера"', time: '5 часов назад' },
    { title: 'Marvel Studios объявили даты выхода фильмов до 2030 года', time: '1 день назад' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-roboto">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Film" size={32} className="text-orange-500" />
            <span className="text-2xl font-bold">КиноПремьеры</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-orange-500 font-medium">Главная</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Фильмы</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Новости</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Календарь <span className="text-orange-500">Премьер</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Не пропустите самые ожидаемые фильмы года. Календарь премьер и новинок кино.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Смотреть календарь
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Трейлеры
            </Button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Календарь Премьер</h2>
            <p className="text-gray-400">Выберите дату, чтобы узнать о премьерах</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calendar */}
            <div className="bg-gray-900 rounded-lg p-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="w-full text-white"
              />
            </div>
            
            {/* Premieres List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Icon name="Star" size={24} className="text-orange-500 mr-2" />
                Премьеры июля
              </h3>
              {premieres.map((premiere, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{premiere.title}</h4>
                        <div className="flex items-center space-x-4 text-gray-400">
                          <span className="flex items-center">
                            <Icon name="Calendar" size={16} className="mr-1" />
                            {premiere.date}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Clock" size={16} className="mr-1" />
                            {premiere.time}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-orange-500 text-black">
                        {premiere.genre}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Movies Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Новинки кино</h2>
            <p className="text-gray-400">Самые свежие фильмы в прокате</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newMovies.map((movie, index) => (
              <Card key={index} className="bg-black border-gray-700 hover:border-orange-500 transition-all hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="aspect-[2/3] bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Film" size={48} className="text-gray-600" />
                  </div>
                  <CardTitle className="text-white text-lg">{movie.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">{movie.year}</span>
                    <div className="flex items-center">
                      <Icon name="Star" size={16} className="text-orange-500 mr-1" />
                      <span className="text-orange-500 font-bold">{movie.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {movie.genre}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Новости кино</h2>
            <p className="text-gray-400">Последние новости из мира кинематографа</p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl text-white font-medium pr-4">{item.title}</h3>
                    <span className="text-gray-400 text-sm whitespace-nowrap">{item.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Film" size={24} className="text-orange-500" />
            <span className="text-xl font-bold">КиноПремьеры</span>
          </div>
          <p className="text-gray-400">© 2024 КиноПремьеры. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;