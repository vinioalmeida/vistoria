import './chat_bot.css'

export default function Chat_bot(){
    return(
        <main>
            
            <div class="container">
                <h2>Chat Bot</h2>
                <div class="chat-box">
                    <div class="bot-message">Bem-vindo ao Chat Bot! Como posso ajudar?</div>
                </div>
                <form id="chat-form">
                    <div class="input-box">
                        {/* <input type="text" id="user-input" placeholder="Digite sua mensagem..." required> */}
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
