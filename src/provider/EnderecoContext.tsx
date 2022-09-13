import { PropsWithChildren, useState, createContext } from "react"

interface Endereco {
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    cep: string,
    setCep: React.Dispatch<React.SetStateAction<string>>
}

export const EnderecoContext = createContext({} as Endereco)

export default function EnderecoContextProvider(props: PropsWithChildren){
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [cep, setCep] = useState("")

    return<>
    
        <EnderecoContext.Provider value = {{uf, setUf, cidade, setCidade, cep, setCep}}>

            {props.children}

        </EnderecoContext.Provider>
    </>
}
