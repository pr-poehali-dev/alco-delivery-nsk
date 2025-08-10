import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const handleTelegramRedirect = () => {
    window.open('https://t.me/givedrink', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-dark-lighter text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-xl font-bold">Premium Delivery</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Премиальная <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">доставка</span> алкоголя
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Изысканный выбор вин, крепких напитков и пива с доставкой на дом в Новосибирске
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleTelegramRedirect}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Заказать в Telegram
            </Button>
            <div className="text-sm text-gray-400">
              18+ Употребление алкоголя вредит здоровью
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-gray-700 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={32} className="text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">Быстрая доставка</h3>
              <p className="text-gray-300">Доставим ваш заказ в течение 30-60 минут по Новосибирску</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gray-700 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">100% качество</h3>
              <p className="text-gray-300">Только оригинальная продукция от проверенных поставщиков</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gray-700 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CreditCard" size={32} className="text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">Удобная оплата</h3>
              <p className="text-gray-300">Наличными курьеру или картой при получении</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="bg-dark-lighter py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Зоны <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">доставки</span>
            </h2>
            <p className="text-xl text-gray-300">Работаем по всем районам Новосибирска</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={20} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Центральный район</h3>
                    <p className="text-gray-300">Доставка 20-30 минут</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={20} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Заельцовский район</h3>
                    <p className="text-gray-300">Доставка 30-45 минут</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={20} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Октябрьский район</h3>
                    <p className="text-gray-300">Доставка 30-45 минут</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={20} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Другие районы</h3>
                    <p className="text-gray-300">По согласованию</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Минимальная сумма заказа</h3>
                <div className="text-4xl font-bold text-primary mb-2">2000₽</div>
                <p className="text-gray-300 mb-6">Бесплатная доставка от 3000₽</p>
                <Button 
                  onClick={handleTelegramRedirect}
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Контакты</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Связаться с нами очень просто</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <p className="text-gray-300">Основной способ заказа</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-300">Ежедневно 18:00 - 02:00</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">География</h3>
              <p className="text-gray-300">Новосибирск и пригороды</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-gray-700 mb-8">
            <h3 className="text-xl font-bold mb-4 text-red-400">⚠️ Важные требования</h3>
            <div className="text-left space-y-2 text-gray-300">
              <p>• Доставка только лицам старше 18 лет</p>
              <p>• При получении необходим паспорт</p>
              <p>• Мы не продаем алкоголь несовершеннолетним</p>
              <p>• Употребление алкоголя вредит вашему здоровью</p>
            </div>
          </div>

          <Button 
            onClick={handleTelegramRedirect}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-dark font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="MessageCircle" className="mr-3" size={28} />
            Перейти в Telegram канал
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-lg font-bold">Premium Delivery</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Premium Delivery. Доставка алкоголя в Новосибирске. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;