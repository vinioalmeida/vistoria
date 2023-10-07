import './login.css'

export default function Login(){
    return(
        <main>  
            <div class="container">
                <h2>Página de Login</h2>
                <form action="processar_login.php" method="post">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required/>

                    <button type="submit">Entrar</button>
                </form>
            </div>        
        </main>

    )
}