Сделать:

1. Типизация в Reducers
2. Обернуть все функции в useCallbacks и компоненты в React.memo

Поррядок выполнения самопроверочной работы "Счётчик"
Успокоительное: Всё, что надо сделать, мы уже делали в TodoList!
План действий (путь молодого дракона):

1. Создаём новый проект
   (create-react-app --template typescript)
2. Верстаем внешний вид минимально
   (внешний вид - пофиг, но структура должна быть)
3. Дробим на подкомпоненты
   (табло, кнопки...Как минимум один уровень вложенности должен быть,
   больше - по желанию.)    IMPORTANT!!!
4. Создаём локальный стэйт и
   отображаем его (useState, props) IMPORTANT!!!
5. Пишем функции и передаём вглубь на кнопки
   (callbacks, onClick) IMPORTANT!!!

Минимально норм, если всё работает.

6. Дорабатываем кнопки (делаем дизэйблы по условию:
   <button disabled={условие=>boolean}>Add</button> )
7. Дорабатываем табло
   (меняем цвет: <div className={условие=>string}></div>)

Максимально норм.

!!!7a. Обязательно поднять ручку!!! IMPORTANT!!!

8*. Для продвинутых (не обязательно):
кнопку реализовать как один универсальный компонент и
использовать два раза с разными значениями props

Йоу!!! Ты - высший красавчик :)
... или красотка :)))


