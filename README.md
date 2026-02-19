# API Booking Restful - Cypress

> Projeto de automação de testes API para um serviço de booking (reserva) usando Cypress.

## Visão geral
- **Objetivo:** Validar endpoints RESTful relacionados a criação, leitura e atualização de reservas (bookings) através de testes automatizados com `cypress`.
- **Stack:** Node.js + Cypress (biblioteca de testes E2E para APIs e UI).

## Estrutura do projeto
- `cypress/` - pasta com os testes e fixtures.
  - `e2e/` - casos de teste:
    - `create-token.cy.js` - cria um token de autenticação
    - `create-booking.cy.js` - cria uma nova reserva
    - `get-booking.cy.js` - consulta reservas existentes
    - `update-booking.cy.js` - atualiza reserva existente
  - `fixtures/` - dados de exemplo, como `payloads-bookings.json` (usado nos testes para criar e validar reservas)
  - `screenshots/` - screenshots gerados pelos testes
  - `support/` - comandos e configuração de suporte do Cypress

## Funcionalidades cobertas pelos testes
- Autenticação / criação de token
- Criação de reservas com payloads válidos
- Recuperação de reservas por ID
- Atualização parcial/total de reservas
- Validação de códigos de status HTTP, formatos de resposta e campos obrigatórios

## Requisitos (pré-requisitos)
- Node.js (recomendado v16+)
- npm (ou yarn)
- Acesso à internet para baixar dependências e, se aplicável, ao endpoint da API testada

## Instalação
1. Clone o repositório (ou copiar os arquivos locais):

```bash
git clone https://github.com/RicardoOliveira89/api-booking-restful-cypress.git
cd api-booking-restful-cypress
```

2. Instale dependências:

```bash
npm install
```

Observação: o `package.json` atual contém `cypress` em `dependencies`.

## Scripts úteis
- `npm test` atualmente é o padrão gerado (sem testes unitários configurados). Para executar Cypress diretamente use os comandos abaixo.

## Executando os testes Cypress

- Abrir o Test Runner (modo interativo):

```bash
npx cypress open
```

- Executar todos os testes em modo headless (terminal):

```bash
npx cypress run
```

Observações:
- Para rodar apenas um spec, use `npx cypress run --spec "cypress/e2e/create-booking.cy.js"`.

## Configurações e variáveis
- Os endpoints, credenciais ou variáveis de ambiente podem ser configurados em `cypress.config.js` ou via `CYPRESS_` env vars. Verifique o arquivo `cypress.config.js` para valores padrão.

## Adicionando novos testes
1. Criar um novo arquivo em `cypress/e2e/` terminando com `.cy.js`.
2. Usar `cy.request()` para chamadas HTTP ou helpers existentes em `support/commands.js`.
3. Adicionar fixtures em `cypress/fixtures/` para dados reutilizáveis. Por exemplo, o arquivo `payloads-bookings.json` contém um array de objetos de reserva e pode ser importado diretamente como default:

```js
import payloads from "../fixtures/payloads-bookings.json"
```

Para acessar apenas o primeiro payload (usado nos testes de get-booking):

```js
cy.createBooking(payloads[0])
```

## Boas práticas e recomendações
- Isolar dados: evitar dependência entre testes; crie e apague dados quando preciso.
- Usar `fixtures` e comandos customizados para evitar duplicação.
- Adicionar validações de esquema JSON quando aplicável.
- Para testes de integração contínua, rodar `npx cypress run` em CI e coletar artifacts (screenshots/videos).

## Troubleshooting
- Se `npx cypress open` falhar, verifique a versão do Node e as permissões locais.
- Caso faltem variáveis de ambiente, exporte com prefixo `CYPRESS_` (ex: `CYPRESS_API_URL`).

## Próximos passos sugeridos
- Adicionar um script `npm run test:e2e` em `package.json` para facilitar execução.
- Configurar GitHub Actions para rodar os testes no CI e publicar resultados.
- Completar o `package.json` com `author` e `description`.

# api-booking-restful

## Observações recentes
- O arquivo `get-booking.cy.js` foi ajustado para importar o fixture `payloads-bookings.json` como default e utilizar apenas o index `[0]` do array para criação e validação de reservas.