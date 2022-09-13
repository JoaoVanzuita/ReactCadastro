import InputCep from "../components/InputCep";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import EnderecoContextProvider from "../provider/EnderecoContext";

export default function() {

    return(
        <EnderecoContextProvider>
          <div className="titulo"><h1>Cadastro: Dados de endereço</h1></div>

          <InputEstados/>
          <InputCidades/>
          <InputCep/>

        </EnderecoContextProvider>
    )
}
