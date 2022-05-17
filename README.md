# UI library - NPM package 


### Инструкция, комментарии, и остальные заметки по проекту и настройкам

#### Storybook 

Можно посмотреть:
*отображение компонентов, 
*отдельные страницы наборов компонентов, 
*какие можно передавать аргументы (props)
*интерактивно изменять аргументы из предложенного списка
*увидеть, какой компонент нужно импортировать и как его использовать (в идеале добавить документацию со storybook)

##### Чтобы запустить Storybook локально
1. Скачиваем актуальную версию репозитория
2. npm i - скачает все зависимости, прописанные в package.json
3. npm run storybook

#### Verdaccio (npm-package)
Пока только локальная версия npm package (ToDo: опубликовать npm package или настроить docker container)

##### Чтобы запустить Verdaccio локально
1. npm i -g verdaccio
2. npm config set proxy null
   npm config set https-proxy null 
   npm config set registry http://localhost:4873/ 
3. verdaccio (лучше запустить в отдельном терминале)
4. npm install ui-lib (либо npm install ui-lib@<и тут номер версии, например 1.0.9>)

5. И в конце взаимодействия с verdaccio нужно выполнить эти команды, чтоб вернуть npm в нормальное состояние:
    npm config set proxy null  
    npm config set https-proxy null 
    npm config set registry http://registry.npmjs.org/
