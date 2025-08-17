import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');
  
  // КАСКО параметры
  const [kaskoParams, setKaskoParams] = useState({
    carBrand: '',
    carModel: '',
    carYear: '2023',
    enginePower: '',
    carValue: '',
    driverAge: '30',
    drivingExperience: '10',
    region: 'Москва',
    driversCount: '1',
    policyTerm: '1',
    vinNumber: '',
    stateNumber: '',
    isCredit: false,
    kaskoAnnualCost: ''
  });

  const insuranceCompanies = [
    { name: 'Прогресс страхование', osago: true, kasko: true, maxTerm: 5 },
    { name: 'Ингосстрах', osago: true, kasko: true, maxTerm: 5 },
    { name: 'РЕСО-Гарантия', osago: true, kasko: true, maxTerm: 5 },
    { name: 'АльфаСтрахование', osago: true, kasko: true, maxTerm: 5 },
    { name: 'Согласие', osago: true, kasko: true, maxTerm: 5 },
    { name: 'ВСК', osago: true, kasko: true, maxTerm: 5 },
    { name: 'Ренессанс Страхование', osago: true, kasko: true, maxTerm: 5 },
    { name: 'Тинькофф Страхование', osago: true, kasko: true, maxTerm: 1 },
    { name: 'Росгосстрах', osago: true, kasko: true, maxTerm: 1 }
  ];

  const calculateKaskoPrice = (company: any) => {
    if (kaskoParams.kaskoAnnualCost && kaskoParams.kaskoAnnualCost !== '') {
      return parseInt(kaskoParams.kaskoAnnualCost);
    }
    const basePrice = Math.floor(Math.random() * 50000) + 30000;
    const termMultiplier = company.maxTerm >= parseInt(kaskoParams.policyTerm) ? 1 : 1;
    return basePrice * termMultiplier;
  };

  const currentDate = new Date();
  const cabinetNumber = `С/А 15315-25`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" className="text-primary" size={32} />
                <h1 className="text-2xl font-bold text-primary">RiaAvto</h1>
              </div>
              <Badge variant="secondary" className="text-sm">
                Платформа-агрегатор страхования
              </Badge>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div>Платформа CRM "RIA-Avto" Страховой кабинет № {cabinetNumber}</div>
              <div>Агент Шубин А.С. Волоколамское шоссе 120</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-transparent border-none h-12 w-full justify-start">
              <TabsTrigger value="main" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                Главная
              </TabsTrigger>
              <TabsTrigger value="osago" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                ОСАГО Автострахование
              </TabsTrigger>
              <TabsTrigger value="kasko" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                КАСКО Автострахование
              </TabsTrigger>
              <TabsTrigger value="info" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                Информация
              </TabsTrigger>
              <TabsTrigger value="params" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                Параметры
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Главная страница */}
          <TabsContent value="main" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Платформа-агрегатор страхования RiaAvto
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Оформление автострахования по ВИН номеру или гос. номеру автомобиля
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>Дата: {currentDate.toLocaleDateString('ru-RU')}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Кабинет № {cabinetNumber}</span>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Users" className="text-primary" />
                  <span>Наши страховые партнёры</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {insuranceCompanies.map((company, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-lg mb-2">{company.name}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-center space-x-2">
                            {company.osago && <Badge variant="outline">ОСАГО</Badge>}
                            {company.kasko && <Badge variant="outline">КАСКО</Badge>}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-center text-blue-800">
                    Все предоставляемые страховые предложения от всех указанных страховых компаний 
                    актуальны только через официального партнера «Ria-Avto» и действие их предложений 
                    составляет один рабочий день.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ОСАГО */}
          <TabsContent value="osago" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="FileText" className="text-primary" />
                  <span>ОСАГО Автострахование</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {insuranceCompanies.filter(c => c.osago).map((company, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-4 text-center">
                        <h3 className="font-semibold mb-2">{company.name}</h3>
                        <Badge variant="secondary">ОСАГО доступно</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="AlertTriangle" className="text-yellow-600" />
                    <h3 className="font-semibold text-yellow-800">Уведомление</h3>
                  </div>
                  <p className="text-yellow-800">
                    Оформление ОСАГО временно приостановлено на платформе-агрегатора в связи с техническими работами.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* КАСКО */}
          <TabsContent value="kasko" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Параметры расчета</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                      <h4 className="font-semibold text-sm">Основные параметры автомобиля:</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Марка:</span> {kaskoParams.carBrand || 'Не указана'}</p>
                        <p><span className="font-medium">Модель:</span> {kaskoParams.carModel || 'Не указана'}</p>
                        <p><span className="font-medium">Год выпуска:</span> {kaskoParams.carYear}</p>
                        <p><span className="font-medium">ВИН номер:</span> {kaskoParams.vinNumber || 'Не указан'}</p>
                        <p><span className="font-medium">Гос. номер:</span> {kaskoParams.stateNumber || 'Не указан'}</p>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="isCredit">Автомобиль в кредите</Label>
                      <Select value={kaskoParams.isCredit ? 'true' : 'false'} onValueChange={(value) => setKaskoParams({...kaskoParams, isCredit: value === 'true'})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="false">Нет, в собственности</SelectItem>
                          <SelectItem value="true">Да, в кредите</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="policyTerm">Срок полиса</Label>
                      <Select value={kaskoParams.policyTerm} onValueChange={(value) => setKaskoParams({...kaskoParams, policyTerm: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 год</SelectItem>
                          <SelectItem value="2">2 года</SelectItem>
                          <SelectItem value="3">3 года</SelectItem>
                          <SelectItem value="4">4 года</SelectItem>
                          <SelectItem value="5">5 лет</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button className="w-full">
                      <Icon name="Calculator" className="mr-2" size={16} />
                      Пересчитать
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Предложения по КАСКО</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {insuranceCompanies.filter(c => c.kasko).map((company, index) => {
                        const price = calculateKaskoPrice(company);
                        const canIssueForTerm = company.maxTerm >= parseInt(kaskoParams.policyTerm);
                        
                        return (
                          <Card key={index} className={`border-2 ${canIssueForTerm ? 'border-gray-200' : 'border-gray-100 opacity-60'}`}>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="font-semibold text-lg">{company.name}</h3>
                                  <div className="space-y-1">
                                    <p className="text-2xl font-bold text-primary">
                                      {price.toLocaleString('ru-RU')} ₽
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      Срок: {kaskoParams.policyTerm} {parseInt(kaskoParams.policyTerm) === 1 ? 'год' : 'лет'}
                                    </p>
                                    {!canIssueForTerm && (
                                      <Badge variant="destructive">
                                        Максимум {company.maxTerm} {company.maxTerm === 1 ? 'год' : 'лет'}
                                      </Badge>
                                    )}
                                    {(company.name === 'Ренессанс Страхование' || company.name === 'Тинькофф Страхование' || company.name === 'Росгосстрах') && (
                                      <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300">
                                        Только на 1 год с пролонгацией
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <Button 
                                  disabled={!canIssueForTerm}
                                  className="min-w-[100px]"
                                >
                                  Оформить
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-center text-blue-800">
                          Данные предложения действуют только через официального партнера «Риа-Авто», сроком действия предложений один рабочий день.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Для оформления КАСКО на несколько лет потребуется:</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>паспорт страхователя</li>
                          <li>СТС или ПТС автомобиля</li>
                          <li>водительские удостоверения допущенных лиц</li>
                          <li>информация о комплектации и охранных системах</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Информация */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Правила оформления ОСАГО и КАСКО</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Icon name="FileText" className="mr-2 text-primary" />
                    ОСАГО
                  </h3>
                  <p className="text-gray-700">
                    Полис ОСАГО оформляется на срок, превышающий один год, так как такой вариант страхования 
                    не предусмотрен действующим законодательством, а именно Правилами ОСАГО и Федеральным 
                    законом «Об ОСАГО» № 40-ФЗ. Клиенту придётся ежегодно пролонгировать «автогражданку».
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Icon name="Shield" className="mr-2 text-primary" />
                    КАСКО
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Полис КАСКО оформление и сроки действия договора КАСКО не установлен законодательством, 
                      поэтому страховые компании вправе оформлять многолетние договоры, в том числе на три, 
                      четыре и пять лет.
                    </p>
                    <p>
                      Единый оформление полиса КАСКО на 3-5 лет, то заключается один договор, в котором 
                      фиксируются условия и, как правило, прописывается стоимость по годам. Подходит как 
                      новых автомобилей, так и автомобилей с пробегом, особенно при покупке у дилеров или 
                      в рамках различных кредитных программы.
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Icon name="Phone" className="mr-2 text-primary" />
                    Наши контакты
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <Icon name="Phone" className="mr-2" size={16} />
                      8 800 600-52-53
                    </p>
                    <p className="flex items-center">
                      <Icon name="Mail" className="mr-2" size={16} />
                      info@sa-progress.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Параметры */}
          <TabsContent value="params" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки параметров</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="carBrand">Марка автомобиля</Label>
                    <Input
                      id="carBrand"
                      value={kaskoParams.carBrand}
                      onChange={(e) => setKaskoParams({...kaskoParams, carBrand: e.target.value})}
                      placeholder="Toyota, BMW, Lada..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="carModel">Модель</Label>
                    <Input
                      id="carModel"
                      value={kaskoParams.carModel}
                      onChange={(e) => setKaskoParams({...kaskoParams, carModel: e.target.value})}
                      placeholder="Camry, X5, Vesta..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="carYear">Год выпуска</Label>
                    <Input
                      id="carYear"
                      value={kaskoParams.carYear}
                      onChange={(e) => setKaskoParams({...kaskoParams, carYear: e.target.value})}
                      placeholder="2023"
                    />
                  </div>
                  <div>
                    <Label htmlFor="enginePower">Мощность двигателя</Label>
                    <Input
                      id="enginePower"
                      value={kaskoParams.enginePower}
                      onChange={(e) => setKaskoParams({...kaskoParams, enginePower: e.target.value})}
                      placeholder="л.с."
                    />
                  </div>
                  <div>
                    <Label htmlFor="driverAge">Возраст водителя</Label>
                    <Input
                      id="driverAge"
                      value={kaskoParams.driverAge}
                      onChange={(e) => setKaskoParams({...kaskoParams, driverAge: e.target.value})}
                      placeholder="30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="drivingExperience">Стаж вождения</Label>
                    <Input
                      id="drivingExperience"
                      value={kaskoParams.drivingExperience}
                      onChange={(e) => setKaskoParams({...kaskoParams, drivingExperience: e.target.value})}
                      placeholder="10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="region">Регион</Label>
                    <Select value={kaskoParams.region} onValueChange={(value) => setKaskoParams({...kaskoParams, region: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Москва">Москва</SelectItem>
                        <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
                        <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                        <SelectItem value="Новосибирск">Новосибирск</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="driversCount">Количество водителей</Label>
                    <Select value={kaskoParams.driversCount} onValueChange={(value) => setKaskoParams({...kaskoParams, driversCount: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 водитель</SelectItem>
                        <SelectItem value="2">2 водителя</SelectItem>
                        <SelectItem value="3">3 водителя</SelectItem>
                        <SelectItem value="unlimited">Без ограничений</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="kaskoAnnualCost">Ежегодная стоимость КАСКО (₽)</Label>
                    <Input
                      id="kaskoAnnualCost"
                      value={kaskoParams.kaskoAnnualCost}
                      onChange={(e) => setKaskoParams({...kaskoParams, kaskoAnnualCost: e.target.value})}
                      placeholder="Например: 45000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Если указано, эта сумма будет использована для всех компаний</p>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Icon name="Save" className="mr-2" size={16} />
                  Сохранить параметры
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Онлайн-платформа для страховых агентов. Официальный партнер Ria-Avto. 
            Лицензия № 0062246523. Вся представленная на сайте информация носит исключительно 
            информационный характер и не является публичной офертой, определяемой положениями 
            Статьи 437 Гражданского кодекса Российской Федерации.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;