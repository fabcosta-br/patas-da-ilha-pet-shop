# 🐾 Patas da Ilha - Pet Shop
## Landing Page Responsiva | Projeto Acadêmico

---

## 📋 Sumário Executivo

**Patas da Ilha - Pet Shop** é uma landing page responsiva desenvolvida como Projeto Extra da etapa **Primeiros Passos** do **Programa Carreira Tech**, iniciativa vinculada à **SCTEC**, **SENAI**, **FAPESC** e **ACATE**, na trilha de **Desenvolvimento Front-End e Back-End**.

O projeto foi elaborado com o objetivo de consolidar conhecimentos introdutórios em **HTML**, **CSS**, **JavaScript** e organização de documentação técnica. A proposta consistiu na criação de uma página para um pet shop fictício, estruturada como um cartão de visitas digital da marca, com apresentação de serviços, diferenciais e pontos de contato.

**Autor:** Fabiano Rodrigo Costa  
**Programa:** Carreira Tech - SCTEC, FAPESC, SENAI e ACATE  
**Trilha:** Desenvolvimento Front-End e Back-End  
**Natureza:** Projeto acadêmico de prática orientada  
**Versão:** 1.5 final  
**Publicação online:** https://fabcosta-br.github.io/patas-da-ilha-pet-shop/

---

## 1. 🎓 Contexto Acadêmico do Desafio

Conforme a proposta do desafio, o estudante deve desenvolver uma **landing page funcional e responsiva** para um pet shop real ou fictício, com identidade visual própria, uso de HTML, CSS, JavaScript e documentação.

Nesta entrega, a landing page foi organizada para:

- apresentar a marca de forma clara e visualmente coerente;
- destacar serviços e diferenciais do pet shop;
- disponibilizar canais de contato e formulário funcional na camada de front-end;
- aplicar fundamentos de estruturação semântica, estilização, interatividade básica e documentação.

O desafio também solicita que a documentação contenha:

- identificação do projeto e do autor;
- descrição das etapas de desenvolvimento;
- guia rápido de execução local.

---

## 2. 🎯 Requisitos do Desafio e Implementação no Projeto

| Ponto solicitado no desafio | Aplicação no projeto |
|---|---|
| **Identidade visual e tipografia** | Criação de Marca exclusiva para a landing page, com logotipo, iconografia, fotos, padronização de espaçamentos e grid, uso de família tipográfica Poppins (Google Fonts), paleta de cores primárias, secundárias e de suporte, fundo claro para legibilidade e clareza (Light Mode). Criação de linguagem própria e tom de voz acolhedora para a marca "Patas da Ilha - Pet Shop". Definição de Público-Alvo e Proto-personas para uso em CTA com foco local (Grande Florianópolis e Região). |
| **Seção de destaque** | Header fixo, hero com imagem principal, card sobreposto e chamadas para ação voltadas ao contato. |
| **Seção sobre** | Bloco institucional com texto de apresentação e indicadores numéricos em layout com Grid. |
| **Seção de serviços** | Seis cards com ícones SVG locais, descrição breve e estrutura responsiva. |
| **Seção de contato e interatividade** | Lista de contatos com ícones locais e formulário com validação básica em JavaScript. |
| **Documentação** | README em Markdown com contexto do projeto, organização dos arquivos, execução local e alinhamento com o desafio. |

---

## 3. 🏗️ Arquitetura e Organização do Projeto

### Estrutura de arquivos

```text
patas-da-ilha-pet-shop-v1.5/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── img/
    │   ├── agendamento-rapido.jpg
    │   ├── ambiente-seguro.jpg
    │   ├── equipe-especializada.jpg
    │   ├── hero-pet.jpg
    │   └── screenshot.jpg
    └── icons/
        ├── bath.svg
        ├── bone.svg
        ├── brand-instagram.svg
        ├── brand-whatsapp.svg
        ├── building-store.svg
        ├── calendar.svg
        ├── favicon.svg
        ├── heart.svg
        ├── mail.svg
        ├── map-pin.svg
        ├── message.svg
        ├── paw.svg
        ├── phone-call.svg
        ├── report-medical.svg
        ├── shopping-bag.svg
        ├── stethoscope.svg
        ├── user.svg
        └── vaccine.svg
```

### Decisões de organização

- **HTML5 semântico:** uso de `header`, `main`, `section`, `article`, `nav`, `form` e `footer` para estruturar a página.
- **CSS centralizado em um único arquivo:** organização por blocos temáticos, com variáveis em `:root`, Grid, Flexbox e media queries.
- **JavaScript vanilla:** interações do menu mobile e validação básica do formulário sem dependências externas.
- **Recursos visuais locais:** favicon, logo e ícones SVG armazenados em `assets/icons/`, evitando dependência de bibliotecas externas para esses elementos.

---

## 4. 🔧 Especificações Técnicas

### Linguagens utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

Essas linguagens foram utilizadas em conjunto para atender à proposta da landing page responsiva e interativa descrita no desafio.

### Tamanho dos arquivos

| Arquivo | Tamanho aproximado |
|---|---|
| `index.html` | 17,2 KB |
| `style.css` | 15,3 KB |
| `script.js` | 4,3 KB |
| `README.md` | 15,3 KB |

Os valores acima correspondem aos arquivos em desenvolvimento local e podem variar conforme compressão do servidor ou atualizações futuras.

### Compatibilidade com navegadores (Browser Support)

O projeto foi organizado para execução em navegadores modernos com suporte a:

- HTML5 semântico;
- CSS Grid e Flexbox;
- CSS variables;
- JavaScript ES6;
- SVG local para favicon e ícones.

Exemplos de navegadores compatíveis com esse conjunto de recursos:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

### Recursos de acessibilidade

O projeto incorpora recursos alinhados a boas práticas de acessibilidade, como:

- estrutura semântica de conteúdo;
- `skip-link` para navegação direta ao conteúdo principal;
- uso de `label` associado aos campos do formulário;
- estados de foco visíveis;
- uso de atributos ARIA em elementos de navegação;
- contraste visual entre texto e fundo em elementos principais da interface.

---

## 5. 📐 Componentes e Seções da Landing Page

### Header

- logo com ícone SVG local;
- navegação principal com links internos;
- botão de chamada para ação;
- menu mobile acionado por JavaScript em telas menores.

### Hero

- título principal da página;
- texto de apoio da proposta da marca;
- dois botões de ação;
- imagem principal com card flutuante sobreposto.

### Sobre

- apresentação institucional do pet shop;
- texto de contexto sobre a proposta da marca;
- indicadores numéricos apresentados em cards.

### Serviços

- seis cards com ícones SVG locais;
- títulos curtos e descrições objetivas;
- organização responsiva com Grid.

### Diferenciais

- três cards com imagem;
- ícone posicionado antes do título de cada card;
- texto curto explicando o diferencial apresentado.

### Contato

- lista de contatos com ícones visuais;
- formulário com campos de nome, e-mail, telefone e mensagem;
- validação básica realizada na camada de front-end.

### Footer

- bloco final com identificação do projeto e autoria.

---

## 6. 🚀 Guia de Instalação e Execução

### Pré-requisitos

- navegador moderno;
- todos os arquivos do projeto mantidos na mesma estrutura de pastas;
- conexão com a internet para carregamento da fonte externa do Google Fonts.

### Execução local

1. Baixe ou extraia a pasta do projeto.
2. Verifique se os arquivos `index.html`, `style.css`, `script.js` e a pasta `assets/` estão presentes.
3. Abra o arquivo `index.html` diretamente no navegador.

Opcionalmente, a página também pode ser executada por um servidor local simples, caso o ambiente do usuário disponha dessa ferramenta.

### Visualização online

A versão publicada da landing page pode ser acessada em:

https://fabcosta-br.github.io/patas-da-ilha-pet-shop/

Esse endereço permite visualizar e interagir com a página em ambiente online, sem depender da execução local.

---

## 7. 📊 Alinhamento com os Critérios de Avaliação

Conforme o desafio, a correção considera três frentes principais: **documentação**, **linguagens utilizadas** e **desenvolvimento/codificação**.

### Documentação

Este README foi estruturado para apresentar:

- identificação do projeto e do autor;
- contexto acadêmico da atividade;
- organização dos arquivos;
- descrição das seções da landing page;
- instruções de execução local e visualização online.

### Linguagens utilizadas

O projeto utiliza:

- HTML para a estrutura da página;
- CSS para estilização, layout responsivo e padronização visual;
- JavaScript para interatividade básica do menu e validação do formulário.

### Desenvolvimento e codificação

A implementação buscou responder ao escopo do desafio por meio de:

- landing page funcional voltada a um pet shop fictício;
- organização semântica do conteúdo;
- responsividade em diferentes larguras de tela;
- uso de cards, imagens, ícones SVG e elementos de contato;
- formulário funcional na camada de front-end.

---

## 8. 📚 Referências Técnicas

As referências abaixo apoiaram a construção do projeto e a revisão desta documentação:

- Enunciado do desafio extra do curso `Introdução à Programação Front-End e Back-End`
- Edital do Programa SCTEC - Carreira Tech: https://sctec.scti.sc.gov.br/wp-content/uploads/sites/8/2026/03/001_SCTEC_2_Edital_Carreira_Tech_Onda_2_1-1.pdf
- Página oficial da trilha Desenvolvimento de Software: https://sctec.scti.sc.gov.br/trilha-desenvolvimento-de-software/
- MDN Web Docs: https://developer.mozilla.org/
- W3C Web Standards: https://www.w3.org/
- WCAG 2.1 Quick Reference: https://www.w3.org/WAI/WCAG21/quickref/
- Google Fonts - Poppins: https://fonts.google.com/specimen/Poppins
- GitHub Docs - About README files: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes
- Google Developer Documentation Style Guide: https://developers.google.com/style

---

## 9. 💼 Formação e Desenvolvimento Contínuo

Este projeto foi desenvolvido como parte da rotina de estudos de **Fabiano Rodrigo Costa** na trilha de **Desenvolvimento Front-End e Back-End** do Programa Carreira Tech.

Além das atividades do curso, a evolução do projeto também dialoga com práticas de:

- leitura de documentação técnica;
- refinamento de HTML, CSS e JavaScript;
- organização de arquivos e versionamento;
- publicação e acompanhamento de projetos em repositórios web.

Links de acompanhamento profissional:

- LinkedIn: https://www.linkedin.com/in/fabianorodrigocosta/
- GitHub: https://github.com/fabcosta-br

---

## 10. 📝 Notas Finais

Esta documentação acompanha a versão **1.5 final** da landing page **Patas da Ilha - Pet Shop**, preparada como material de apoio à submissão acadêmica do desafio extra da trilha.

O projeto também está disponível em ambiente publicado para consulta e navegação:

https://fabcosta-br.github.io/patas-da-ilha-pet-shop/

**Data da revisão do README:** 28 de abril de 2026  
**Versão da documentação:** 1.5 final  
**Status do material:** documentação revisada para submissão acadêmica
