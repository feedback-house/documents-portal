---
id: avaliacao-desempenho-gestor
title: Avaliação de Desempenho | Gestor
sidebar_label: Gestor
---

## Como faço para responder as avaliações de desempenho do meu time?

O usuário precisa acessar menu Desempenho > Minhas avaliações > aba Solicitações. Todas as solicitações de avaliações de desempenho que foram designadas a você, seja do seu time direto ou demais pares, poderão ser encontrados nessa aba. 

## Como faço para ver quem do meu time ainda não respondeu?

Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  


## Posso responder várias avaliações simulataneamente?

For each request the API will evaluate each area individually and will report errors per area. This means that this API can successfully create or update some areas while rejecting others.

Response example for a request without errors:

## Posso editar uma avaliação ?

Primary keys fields define if areas will be updated or created. In simple terms: If one of the primary keys in the area payload is found in the area database the area will be updated. 

New areas are created only when none of the provided keys is found.

Primary key fields:
- `areaId` - The associated unique Id of this Area.
- `correlation.areaId` - The area employeeId in the context of your company. You can use any key here as long you can control it.

Notes:
- Primary keys are not required, however when no primary keys are defined a new area will be created upon each request.
- Calling a API with the same payload a second time (ie. same keys) will not create a new area, it will update the previously created area.

## Available Fields per Area

The only required fields are `name` and one of the primary key fields; We strongly recommend that you use additional keys to control how areas are created, otherwise this can lead to duplicated areas.

#### `id` [AreaId] 
Unique identification number for this Area. This field is option, if not provided a new unique field will be created.
This field is a *primary key* and should be used whenever this area needs to be updated.

#### `name` [String] 
The area name. This field is required. 

#### `businessDivision` [[BusinessDivisionId]]

Business Division that this Area Belongs. Area can only belong to one Business Division. 

> This field will also be used as **primary key** to detect if areas will be created or updated.
