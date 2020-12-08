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
2.  A aplicação é fornecida com comandos de instalação e execução para ambientes de desenvolvimento e de testes.
3.  A aplicação tem uma estrutura lógica e bem organizada.
4.  O teste acompanha documentação com o raciocínio sobre as decisões tomadas.
5.  O código está documentado e/ou é de fácil leitura.
6.  Segue algum guia de estilo de código padronizado.
7.  Possui um histórico do git (mesmo que breve) com mensagens claras e concisas.
8.  Como lidou com os dados sensíveis do usuário. Quais medidas de segurança foram implementadas?


## O Teste
Você vai precisar criar uma carteira de tokens através de um Smart Contract que temos na publicado na blockchain "https://sokol.poa.network". Após gerada a carteira, crie um usuário através da API apenas com os dados necessários para enviarmos fundos para carteira futuramente.
Sugerimos a utilização do [EthersJS](https://docs.ethers.io/v5/) para interação com a blockchain. 

## Requisitos

- Use componentização.
- Você deve certificar-se que o usuário salvou as palavras mnemonicas. 
- Faça testes unitários e/ou de ponta-a-ponta (end-to-end)
- Lide com os dados sensíveis da carteira do usuário no localstorage para que ele possa assinar futuras transações.
- Considere que mais de um usuário poderá ter uma carteira no mesmo aparelho.


Os possíveis cenários devem ser cobertos e terem soluções implementadas. Não foi desenvolvido layout para isso, pois queremos observar como você lidará com eles:
- Demora de respostas da API;
- Timeout da API;
- Usuário estar offline;

## Front
Você tem total liberdade no layout do componente e suas derivações. Seja criativo e objetivo.

Você consumirá uma API já existente no endereço abaixo. Em seguida há uma especificação simplificada dela.

`https://ctowl-hiring.herokuapp.com/users`


| Parâmetro        | Obrigatório? | Tipo          | Descrição                                                                              |
|------------------|--------------|---------------|----------------------------------------------------------------------------------------|
| `doc`            | Sim          | `string`      | CPF ou CNPJ.                                                                           |
| `password`       | Sim          | `string`      | Senha do usuário                                                                       |
| `wallet`         | Sim          | `object`      | Informações públicas da carteira.				                           |



### Exemplo Criando uma Wallet usando EthersJS

```javascript
import ethers from 'ethers 

const newWallet = await ethers.Wallet.createRandom();
const provider = new ethers.providers.JsonRpcProvider('https://sokol.poa.network');
const walletInstance = await newWallet.connect(provider);

```

### Exemplo informando períodos

```bash
$ curl --request POST \
  --url `https://ctowl-hiring.herokuapp.com/users` \
  --header 'content-type: application/json' \
  --data '{
	"name": "user_name",
	"password": "password",
	"wallet": {
	  ...
	}
}'

```

### Simulando Timeout, Internal Server Error e Delay de resposta

Para **Timeout** basta executar a request post passando `timeout` através da query string, exemplo:
`https://ctowl-hiring.herokuapp.com/users?timeout`

Para **Internal Server Error** basta executar a request post passando `internalError` através da query string, exemplo:
`https://ctowl-hiring.herokuapp.com/users?internalError`

Para **Delay de resposta**, que pode ser usado como simulador de conexão lenta, basta executar a request post passando `delay`, e informando o tempo do delay em milissegundos, exemplo:
`https://ctowl-hiring.herokuapp.com/users?delay=tempoEmMilissegundos`


## Prazo de entrega
- Sugerimos o prazo de até 30 dias para realização do desafio. Caso não consiga realizar algum dos requisitos, envie-nos mesmo assim que iremos avaliar todos os outros pontos e ficaremos felizes e dar feedbacks e ajudar você no que ficou faltando para que a experiencia seja o mais enriquecedora para ambas as partes, mesmo que por acaso nós não fechemos com você no momento.




