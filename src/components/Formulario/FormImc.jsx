import { useState } from "react"
import styles from "./formImc.module.css"

export const FormImc = () => {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [imc, setImc] = useState(null)
  const [mostarCondicao, setMostrarCondicao] = useState(false)

  const handleInputAltura = (evento) => {
    setAltura(evento.target.value)
  }
  const handleInputPeso = (evento) => {
    setPeso(evento.target.value)
  }

  const calcularIMC = () => {
    if (altura > 0 && peso > 0) {
      const imcCalculado = peso / (altura * altura)
      setImc(imcCalculado.toFixed(2))
      setMostrarCondicao(true)
    } else {
      setImc(null)
    }
  }

  const condicaoIMC = (imc) => {
    if (imc < 18.5) {
      return `Abaixo do peso`
    } else if (imc > 18.5 && imc < 24.9) {
      return `Peso normal`
    } else if (imc > 25 && imc < 29.0) {
      return `Sobrepeso`
    } else if (imc > 30 && imc < 34.9) {
      return `Obesidade grau 1 (moderada)`
    } else if (imc > 35 && imc < 39.9) {
      return `Obesidade grau 2 (grave)`
    } else {
      return `Obesidade grau 3 (mórbida)`
    }
  }

  return (
    <>
      <form>
        <div className={styles.containerForm}>
          <label htmlFor="altura">Digite sua altura: </label>
          <input
            type="number"
            id="altura"
            placeholder="Altura"
            value={altura}
            onChange={handleInputAltura}
          />
        </div>
        <div className={styles.containerForm}>
          <label htmlFor="peso">Digite o seu peso: </label>
          <input
            type="number"
            id="peso"
            placeholder="Peso"
            value={peso}
            onChange={handleInputPeso}
          />
        </div>
      </form>
      <div className="calculo">
        <button onClick={calcularIMC}>Calcular</button>
        {imc && <p>Calculo IMC: {imc}</p>}
      </div>
      <div className="condicao">
        {mostarCondicao && <h2>Condição: {condicaoIMC(imc)} </h2>}
      </div>
    </>
  )
}
