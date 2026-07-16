# Disparador Estrelar — Plataforma Web

Plataforma web para orquestração e disparo de mensagens via **Evolution API**, desenvolvida para escalar um projeto originalmente criado como extensão de navegador individual (instalada em cada PC) para uma solução centralizada, multi-usuário e multi-tenant.

> 🚧 Projeto em desenvolvimento (V1). Este README descreve o escopo planejado e evolui junto com o código.

## Contexto

O projeto nasceu como uma extensão de navegador (Manifest V3) que permitia a cada consultor conectar uma instância própria via QR Code, criar templates de mensagens com variáveis dinâmicas e disparar mensagens através da Evolution API, integrada ao n8n.

Essa versão está sendo reescrita do zero, manualmente, como uma aplicação web completa — permitindo deploy centralizado, atualização simultânea de todos os usuários e escalabilidade real.

## Objetivo

Criar uma plataforma única, hospedada em VPS própria e containerizada com Docker, que substitua a necessidade de instalar/atualizar a ferramenta em cada máquina individualmente, oferecendo controle de acesso hierárquico e visão consolidada de métricas de disparo.

## Papéis de acesso

| Papel | Permissões |
|---|---|
| **Admin (TI)** | Acesso absoluto: cria e gerencia todos os acessos (gestores e consultores), times e configurações da plataforma. |
| **Gestor** | Acompanha métricas dos consultores do seu time; cria, edita, conecta (QR Code) e exclui instâncias de qualquer consultor sob sua gestão. |
| **Consultor** | Cria, conecta e exclui suas próprias instâncias; acessa o módulo de disparo (templates com variáveis, disparo manual e em massa). |

## Funcionalidades planejadas (V1)

- Autenticação e controle de acesso por papel (Admin / Gestor / Consultor)
- Organização de usuários por **times**
- Gestão de instâncias: criação, conexão via QR Code e exclusão
- Disparo de mensagens com variáveis dinâmicas nos textos
- Disparo manual e disparo em massa
- Integração via webhooks com **n8n**, respondendo o status de cada requisição (mensagens enviadas x não enviadas)
- Dashboard de métricas por consultor/time (visão do gestor e do admin)

## Stack tecnológica

- **Frontend:** React
- **Backend:** Node.js + Express
- **Banco de dados:** *(a definir/preencher)*
- **Mensageria:** Evolution API
- **Automação:** n8n
- **Infraestrutura:** Docker, VPS (Hostinger)
- **Versionamento:** Git / GitHub

## Roadmap

- [ ] Estrutura base do backend (Express + banco de dados)
- [ ] Autenticação e controle de acesso por papel
- [ ] CRUD de usuários, times e instâncias
- [ ] Conexão de instância via QR Code (Evolution API)
- [ ] Módulo de templates com variáveis
- [ ] Disparo manual e em massa
- [ ] Integração de webhooks com n8n
- [ ] Dashboard de métricas
- [ ] Containerização com Docker
- [ ] Deploy em produção na VPS

## Motivação

Este projeto também é um exercício de aprendizado prático: diferente da versão anterior (feita majoritariamente com auxílio de IA), esta reescrita está sendo desenvolvida linha a linha manualmente, com foco em aprender arquitetura de aplicações web, controle de versão, containerização com Docker e deploy em produção.

---

**Status:** Em desenvolvimento · **Versão:** V1 (planejamento/implementação inicial)
