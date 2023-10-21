import styles from "./tabela.module.css"

export const Tabela = () => {
  return (
    <table>
      <tr>
        <th>IMC</th>
        <th>Classificação</th>
      </tr>
      <tr>
        <td>Abaixo de 18,5</td>
        <td>Abaixo do peso</td>
      </tr>
      <tr>
        <td>18,5 - 24,9</td>
        <td>Peso normal</td>
      </tr>
      <tr>
        <td>25,0 - 29,9</td>
        <td>Sobrepeso</td>
      </tr>
      <tr>
        <td>30,0 - 34,9</td>
        <td>Obesidade grau 1 (moderada)</td>
      </tr>
      <tr>
        <td>35,0 - 39,9</td>
        <td>Obesidade grau 2 (grave)</td>
      </tr>
      <tr>
        <td>Acima de 40,0</td>
        <td>Obesidade grau 3 (mórbida)</td>
      </tr>
    </table>
  )
}
