import { Link } from "react-router-dom"

export default function cadastro_bike() {

    return (
        
        <main>
            

            <h2 class="titulo__cadastro">Agora vamos fazer algumas perguntas para facilitar o nosso processo de vistoria, responda corretamente !!!</h2>
            
            <form action="cadastro" name="cadastro" method="get">
                    
                    <label for="p-marca">Marca da bicicleta:</label>
                    <input type="text" name="bicicleta" id="p-bici" autocomplete="off" required autofocus />
                    <label for="p-cor">cor da bicicleta:</label>
                    <input type="text" name="bicicleta" id="p-cor" autocomplete="off" required autofocus />
                    <label for="p-marcha">A bicicleta possui marcha?(s/n):</label>
                    <input type="text" name="bicicleta" id="p-marcha" autocomplete="off" required autofocus />
                    <label for="p-garfo">Sua bicicleta possui um garfo especial?(s/n):</label>
                    <input type="text" name="bicicleta" id="p-garfo"/>
                    
                    
                    <label for="c-data">Data da compra da sua bicicleta:</label>
                    <input type="date" name="data" id="c-data"/>
                    <label for="c-valor">valor estimado da sua bicicleta (em reais):</label> 
                    <input type="valor" name="valor_est" id="c-valor"/>
                    
                    <label for="c-quant_bk">Quantas bicicletas você pretende cadastrar?:</label>
                    <select name="quantidade" id="c-quant_bk">
                        <option value="" disabled selected>Selecione</option>
                        
                        <optgroup label="quantidade">

                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                

                        </optgroup>
                        
                        
                    </select>
                    <label for="c-tipo_bk">Qual é tipo da sua bicicleta?:</label>
                    <select name="tipo_bk" id="c-tipo_bk">
                        <option value="" disabled selected>Selecione</option>
                        
                        <optgroup label="Estrada">

                            <option value="MB">Mountain bike</option>
                            <option value="BC">Bikes de cross-country</option>
                            <option value="BT">Bikes de Trail ou All Mountain</option>
                            <option value="BE">Bikes de enduro</option>
                            <option value="BD">Bikes de downhill</option>
                            <option value="HF">Hardtail x Full Suspension</option>
                            <option value="BS">Estrada (Speed)</option>
                            <option value="BX">BMX</option>

                        </optgroup>
                        <optgroup label="Cidade">
                            


                            <option value="BU">Bicicleta urbana</option>
                            <option value="BP">Bicicleta para passeio</option>
                            <option value="BDS">Bikes dobráveis</option>
                            <option value="BH">Bicicleta elétrica ou híbrida</option>
                            <option value="BI">Bicicleta infantil</option>

                        </optgroup>  
                        
                    </select>
                
                <input type="button" value="Cadastrar" />
                <input type="button" value="Verificar"/>
                <input type="reset" value="Limpar"/>
            </form>
            <Link to="/vistoria" className='botao__cadastro'>Cadastrar</Link>
        </main>
        

    )
}