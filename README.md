# Free Games
Приложение для поиска бесплатных игр с использованием Free-to-Play Games Database API. В приложение есть возможность сортировки игр по жанру и платформе, а также просмотр информации об игре
# Демо
Посмотреть можно тут: https://bytecd.github.io/free-games/
# Стек технологий
1. React
2. React Router
3. Axios
4. Redux
5. Redux-Saga
# Запуск
Для запуска проекта локально нужно:
1. Установить NodeJS: https://nodejs.org/
2. Клонировать репозиторий: `git clone https://github.com/byteCD/github-db.git`
3. Создать аккаунт на RapidAPI (Напрямую с API работать не получится из-за CORS) и найти Free-to-Play Games Database API
4. В папке client создать файл .env и в нем создать переменную `REACT_APP_API_KEY`, в которую нужно присвоить `X-RapidAPI-Key`
5. Установите необходимые пакеты: `npm install`
6. Запустить проект: `npm start`
7. Открыть его по ссылке: http://localhost:3000 
