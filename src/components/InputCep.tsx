import { KeyboardEvent, useContext } from "react";
import { EnderecoContext } from "../provider/EnderecoContext";

export default function(){

    const {cidade, setCidade, uf, setUf, cep, setCep} = useContext(EnderecoContext)

    function validarCep(valor: string){

        const cepRegex = /^[0-9]{8}$/

        return cepRegex.test(valor)
    }

    const atualizarCep = async (ev: KeyboardEvent<HTMLInputElement>) => {

        if(ev.currentTarget.value.length != 8) return

        if(!validarCep(ev.currentTarget.value)){

            alert("CEP inválido")

            return
        }

        ev.preventDefault()

        setCep(ev.currentTarget.value)

        pesquisarEndereco(ev.currentTarget.value)

    }

    const pesquisarEndereco = async (cep: string) => {

        const requestEndereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const endereco = await requestEndereco.json()

        setUf(endereco.uf)
        setCidade(endereco.localidade)
    }


    return<>

        <input type="text" onKeyUp={atualizarCep} placeholder="Insira o CEP"></input>

    </>
}
