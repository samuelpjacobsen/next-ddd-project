# Next.js DDD Project

Este projeto é uma aplicação Next.js estruturada seguindo os princípios do Domain-Driven Design (DDD).

## Estrutura de diretórios

O projeto segue a estrutura DDD com as seguintes camadas:

### 1. Domínio (Domain)

A camada de domínio contém a lógica de negócios principal e é independente de qualquer framework ou tecnologia específica.

```
/src/domain/
  /users/
    /entities/       # Entidades de domínio (User)
    /value-objects/  # Objetos de valor (Email)
    /repositories/   # Interfaces de repositório
```

### 2. Aplicação (Application)

A camada de aplicação contém os casos de uso da aplicação e orquestra as entidades de domínio.

```
/src/application/
  /users/
    /dtos/          # Data Transfer Objects
    /services/      # Serviços de aplicação
```

### 3. Infraestrutura (Infrastructure)

A camada de infraestrutura implementa interfaces definidas no domínio e fornece serviços técnicos.

```
/src/infrastructure/
  /database/        # Configuração do banco de dados
  /repositories/    # Implementação dos repositórios
```

### 4. Interfaces (Interfaces)

A camada de interfaces contém componentes, páginas e APIs.

```
/src/interfaces/
  /components/      # Componentes React
  /api/             # Rotas de API
```

## Estrutura do Next.js

A aplicação Next.js usa o App Router:

```
/src/app/
  /api/             # Rotas de API
  /users/           # Página de usuários
  page.tsx          # Página inicial
```

## Executando o projeto

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Tecnologias utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- (Simulação de Prisma ORM)

## Padrões implementados

- Domain-Driven Design (DDD)
- Repository Pattern
- Dependency Injection
- Value Objects
- DTOs (Data Transfer Objects)
