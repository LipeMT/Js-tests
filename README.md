# Operações entre Vetores

Este projeto implementa várias funções utilitárias para realizar operações entre vetores (arrays) em JavaScript. As funções incluem copiar valores de um vetor para outro, copiar valores em ordem inversa, somar vetores e intercalar elementos entre dois vetores. O projeto também inclui testes unitários para verificar o comportamento dessas funções.

## Funcionalidades

### Funções Implementadas

- **copiarValores(a, b)**: Copia os valores de um vetor `a` para outro vetor `b`. Se `a` for maior que `b`, retorna `a` sem alterar `b`.

- **copiarValoresInverso(a, b)**: Copia os valores de `a` para `b` em ordem inversa. Se `a` for maior que `b`, reverte `a` e o retorna.

- **somarVetores(a, b)**: Soma os elementos correspondentes de dois vetores. Se um vetor for maior que o outro, os elementos restantes do vetor maior são copiados para o resultado.

- **intercalarElementos(a, b)**: Intercala os elementos de dois vetores. Se um vetor for maior que o outro, os elementos restantes do vetor maior são adicionados ao final do vetor resultante.

## Como Usar

### Pré-requisitos

- Node.js instalado
- npm (Node Package Manager)

### Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências (se houver):

    ```bash
    npm install
    ```

1. Este projeto utiliza Jest para testes unitários. Para executar os testes, use o comando:

    ```bash
    npx jest
    ```

### Executando as Funções

Você pode utilizar as funções diretamente importando o módulo:

```javascript
const { copiarValores, copiarValoresInverso, somarVetores, intercalarElementos } = require('./src/index.js');

// Exemplo de uso:
const A = [1, 2, 3];
const B = [10, 20, 30];

const resultado = somarVetores(A, B);
console.log(resultado);  // Saída: [11, 22, 33]
