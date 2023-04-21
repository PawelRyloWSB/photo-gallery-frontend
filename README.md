## Plan

### Project Tracking

To do, every week sync:

Data   |  ETA                 | Notatka            |
-------|----------------------|--------------------|
tydz 1/2 | march v1           | Inicjacja projektu |
tydz 3/4 | march v1           | Stworzenie strony do logowania oraz rejestracji. Utowrznie strony do wyswietlania galerii zdjec                    |
tydz 5/6 | march v1           | Stworzenie formularzu do dodawania nowych zdjec. Polaczenie backendu z frontendem                  |


## Uruchomienie aplikacji w środowisku lokalnym

1. Stworzenie nowego serwera PostgreSQL.
2. Stworzenie nowego użytkownika PostgreSQL z uprawnieniami administratora.
3. Stworzenie nowej bazy danych na serwerze.
4. Sklonowanie repozytorium Backendowego
```
  git clone https://github.com/PawelRyloWSB/photo-gallery-frontend.git
```

5. Instalacja wymaganych paczek
```
yarn install
```

6. Utworzenie pliku .env w głównym folderze projektu i uzupełnienie go o niezbędne dane
```
### Application
PORT=3000
DOMAIN=localhost

### JWT
JWT_SECRET_TOKEN=nzXNzfcY5xTFp22grvl4p1kqYfF7lSc8JNH4I3YQLKxRT0meSyBIGOf9qWw2czsB4kv4KKiBM3F1YEdAl2snjEPjkoV5G6MYoM5bRGIX5gBnB0nmuWgL8EDSgrfyNMflXZ/pk5yIL1lIw5Dp+fhHCGHqaOLHA7B7qklJrR7HBQ2OGPbNNM52xnfMnY9p+dMiyEzItr7M95ogkLOrrtI4r07i+VsiDIt+C5GJti6KiNsc+hU/NrwzViqTJmrCK0MPGBDukqT/2Iwncfdg9869TcmxLjI2tV/D0oC9g7xgvAUlaxUZZoim2WwdwY1bJMXfciOuQ42dQddYZZJjyl/+BQ==
JWT_EXPIRATION_SECRET=3600
JWT_REFRESH_SECRET_TOKEN=qxUPnw4rMMzLOpCGqGLSj9rozp7AFpGg/yzijccDGD2t8tfPrzVSOjKiAIJhoYtVtWaAi0JpcP7NE+ITHZChixZVYynrdR6pXXmT/ddw9nKW3g2ZzVF+aD5QEslKTNg2OqfBhljqy8TTqiEOvgCff27ZHYyXeQP3dI1MnkTsHdAz26WTqopVwVJ2AaAuE2TD3v5Bqmdwvl4xvlIBptOUPHolHX95onrGGgoFsIJOUt5mpKPCCHqhZJis5dNT1uBJ9y8cKE7P/PTnO4GhpmRxF3siDaf5Q7kVZA4OiGQTkhCtg4PLvBAK/uRLo7zbe4QXqjtXH5MGG/hcAQ7XTvcSWA==
JWT_EXPIRATION_REFRESH_SECRET=604800

### Database
DB_HOST=localhost
DB_PORT=<port bazy danych>
DB_NAME=<nazwa bazy danych>
DB_USER=<nazwa użytkownika>
DB_PASSWORD=<hasło użytkownika>
```

7. Uruchomienie serwera backendowego
```
yarn start
```

8. Sklonowanie aplikacji klienckiej
```
git clone https://github.com/PawelRyloWSB/photo-gallery-frontend.git
```

9. Instalacja wymaganych paczek
```
yarn install
```

10. Uruchomienie projektu
```
yarn dev
```

11. Aplikacja powinna być dostępna pod adresem: [http://localhost:5173/](http://localhost:5173/).
