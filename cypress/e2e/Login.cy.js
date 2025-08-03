describe('Проверка авторизации', function () {

   
   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type(`german@dolnikov.ru`); // Ввели верный логин
        cy.get('#pass').type(`iLoveqastudio1`); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })

   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#forgotEmailButton').click(); // Нажал забыли пароль
        cy.get('#mailForgot').type(`german@dolnikov.ru`); // Ввел почту для востановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю текст
        cy.get('#messageHeader').should('be.visible'); // Текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })


   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type(`german@dolnikov.ru`); // Ввели верный логин
        cy.get('#pass').type(`iLoveqastudio8`); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })

   it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type(`germa@dolnikov.ru`); // Ввели не верный логин
        cy.get('#pass').type(`iLoveqastudio1`); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })


it('Проверка, что в логине нет @ ', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type(`germandolnikov.ru`); // Ввели логин без @
        cy.get('#pass').type(`iLoveqastudio1`); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })

   it('Проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт

        cy.get('#mail').type(`GerMan@Dolnikov.ru`); // Ввели логин 
        cy.get('#pass').type(`iLoveqastudio1`); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })
})

