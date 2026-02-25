# DEVOPS Prooject

DevOps Project – dev-obs

  Prosta aplikacja webowa (Node.js + Express) z pełnym pipeline CI/CD na GitHub Actions oraz automatycznym wdrożeniem do Azure App Service.
  Projekt realizuje praktyki DevOps: branching, Pull Request, automatyczne testy, konteneryzację oraz monitoring.

Publiczna aplikacja

  URL produkcyjny:
  https://dev-obs-b6cxehcdb2a0gwd7.polandcentral-01.azurewebsites.net
  
  Dostępne endpointy:
  GET / → zwraca status aplikacji
  GET /products → zwraca przykładową listę produktów

Technologie

  Node.js (Express)
  Jest + Supertest (testy jednostkowe)
  GitHub Actions (CI/CD)
  Docker (konteneryzacja)
  Azure App Service (hosting)
  Azure Application Insights (monitoring)

Uruchomienie lokalne

  1. Klonowanie repozytorium
    git clone https://github.com/michalp030/dev-obs.git
    cd dev-obs
  
  2. Instalacja zależności
    cd app
    npm ci

  3. Uruchomienie aplikacji
    npm start

  4. Uruchomienie testów
    cd app
    npm test

  Testy obejmują:
    sprawdzenie endpointu /
    sprawdzenie endpointu /products
    Raport testów generowany jest w formacie JUnit i wykorzystywany w CI.

CI – Continuous Integration

  Pipeline CI uruchamia się automatycznie przy Pull Request do branch main.
  Zakres CI:
    instalacja zależności (npm ci)
    uruchomienie testów (npm test)
    generowanie raportu JUnit
    budowa obrazu Docker (walidacja Dockerfile)
    
  Plik workflow:
    .github/workflows/ci.yml

CD – Continuous Deployment

  Pipeline CD uruchamia się automatycznie po merge do branch main.
  Zakres CD:
    instalacja zależności
    ponowne uruchomienie testów
    spakowanie aplikacji
    automatyczne wdrożenie do Azure App Service

  Plik workflow:
    .github/workflows/cd.yml

Konteneryzacjia

  Aplikacja posiada Dockerfile umożliwiający budowę obrazu:
    docker build -t dev-obs .
  Budowa obrazu jest automatycznie walidowana w pipeline CI.
    Pliki:
      Dockerfile
      .dockerignore

Monitoring i logi
  Projekt wykrzystuje Azure Application Insights
  Funkcjonalnośći:
    automatyczne zbieranie requestów HTTP
    zbieranie wyjątków
    monitorowanie zależności
    Live Metrics
    
  Telemetry konfigurowana jest poprzez zmienną środowiskową: 
    APPLICATIONINSIGHTS_CONNECTION_STRING
  Kod inicjalizujący telemetry znajduje się w:
    app/src/telemetry.js

Git Workflow
  Projekt wykorzystuje:
    GitHub Issues jako backlog
    GitHub Projects (Kanban)
    Feature branches (feature/...)
    Pull Requests
    Powiązania commitów z issue (Closes #X)


















  
