# Ctowl Teste Front-end

Antes de começar, leia os [nossos-valores.md](https://github.com/ctowl-tech/hiring/blob/main/nossos-valores.md) para entender um pouco sobre o que nós priorizamos no desenvolvimento e **faça o seu melhor, pois iremos avaliar o teste como se fosse seu melhor esforço** ;)

Envie o resultado do seu desafio para contato@ctowl.com.br (ele pode ser open source!).
Se possível, faça deploy da sua aplicação em algum serviço como [Netlify](https://www.netlify.com/), [Heroku](https://heroku.com/) ou qualquer outro de sua preferência.

## Objetivo

O objetivo do desafio é validar seus conhecimentos nos seguintes tópicos:

- **JavaScript**: aproveite o desafio para mostrar tudo o que sabe sobre as novas features da linguagem.
- **React**: siga boas práticas e mantenha o código idiomático. Busque utilizar features recentes e se mantenha atento a problemas comuns como re-renders desnecessários.
- **TypeScript**: Opcional. Caso opte por usá-lo, mostre todo o seu domínio.
- **Componentização**
- **CSS**: seja optando por vanilla, pré-processadores ou CSS-in-JS.
- **Testes unitários**
- **Testes end-to-end**

Analisaremos seu teste com base nos critérios acima, então dê um show para que fiquemos impressionados.

## Restrições

1.  **Não é permitido** utilizar frameworks e/ou bibliotecas de UI que não seja o React (como Vue.js ou Angular).
2.  **São permitidas** ferramentas modernas de desenvolvimento como TypeScript, Babel, eslint, webpack, assim como o uso de polyfills (e outras ferramentas para melhorar o suporte a browsers, como Modernizr) e/ou bibliotecas para testes.
3.  **São permitidos** pré-processadores de CSS e/ou ferramentas CSS-in-JS.


## Como Avaliaremos seu Teste Técnico
Sua performance será avaliada com base nos seguintes pontos:

1.  A aplicação funciona conforme o esperado.
2.  Os problemas foram resolvidos com eficiência.
3.  A aplicação é fornecida com comandos de instalação e execução para ambientes de desenvolvimento e de testes.
4.  Você demonstra conhecimento de como testar as partes críticas da aplicação. Não exigimos 100% de cobertura.
5.  A aplicação tem uma estrutura lógica e bem organizada.
6.  O teste acompanha documentação com o raciocínio sobre as decisões tomadas.
7.  O código está documentado e/ou é de fácil leitura.
8.  Segue algum guia de estilo de código padronizado.
9.  Possui um histórico do git (mesmo que breve) com mensagens claras e concisas.
10. Quão inteligível é seu código para um desenvolvedor menos experiente ? (não se esqueça que esse é um dos nossos principais valores)
11. Quão reaproveitável é seu código para outros contextos ? (pense nas demais aplicações e abstrações de uso)


## O Teste
Você vai precisar criar uma carteira de tokens através de um Smart Contract que temos na publicado na blockchain "https://sokol.poa.network".
Sugerimos a utilização do [EthersJS](https://docs.ethers.io/v5/) para interação com a blockchain. 
Abaixo segue o endereço do nosso Smart Contract para conexão:

``` 
const tokenAddress = '0x4915476A7dE2dD521fA379604174307C79c71DFf';
```

## Requisitos
- Use componentização.
- Faça testes unitários e/ou de ponta-a-ponta (end-to-end)
- A wallet deve ser gerada a partir de palavras mnemonicas randomicas.
- Você deve pensar em alguma forma de lidar com os dados sensíveis da carteira no front-end para que o usuário possa assinar transações a partir delas.
- As mnemonic words são totalmente sensíveis. Quem as possuir tem total controle da carteira gerada, então lembre-se de minimizar os riscos para seu usuário pensando em segurança.
- O componente deve poder ser instalado e integrado facilmente com qualquer projeto React através do NPM.
- Use Functional Components ao invés de Classes.
- Encontre uma forma segura de salvar os dados sensiveis da carteira e acessalas quando necessário.
- Dê suporte a multiplos usuários na mesma máquina.

Os possíveis cenários devem ser cobertos e terem soluções implementadas. Não foi desenvolvido layout para isso, pois queremos observar como você lidará com eles:

## Front
O layout proposto para esse componente pode ser visto no link abaixo.

[Link para o layout]() - **Lembrando que a sua aplicação deve seguir o layout pixel by pixel**

## Prazo de entrega
- Sugerimos o prazo de até 30 dias para realização do desafio. Caso não consiga realizar algum dos requisitos, envie-nos mesmo assim que iremos avaliar todos os outros pontos e ficaremos felizes e dar feedbacks e ajudar você no que ficou faltando para que a experiencia seja o mais enriquecedora para ambas as partes, mesmo que por acaso nós não fechemos com você no momento.


