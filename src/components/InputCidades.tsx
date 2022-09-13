import { ChangeEvent, useEffect, useState, useContext } from "react"
import { EnderecoContext } from "../provider/EnderecoContext"

export default function () {
    const [cidades, setCidades] = useState([])
    const [loading, setLoading] = useState(true)
    const {uf, cidade, setCidade} = useContext(EnderecoContext)

    async function buscarCidades() {
        setLoading(true)
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setLoading(false)
        setCidades(cidades)
        console.log(cidade)
    }

    useEffect(() => {
        buscarCidades()
    }, [uf])

    const selecionarCidade = (ev:ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }

    return <>
        {loading
            ? <div className="loading">Carregando cidades</div>
            : <select
                onChange={selecionarCidade}
                value={cidade}
            >{cidades.map(({ nome }, idx) => <option key={idx}>{nome}</option>)}</select>
        }
    </>
}
