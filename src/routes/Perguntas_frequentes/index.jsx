import './pf.css'

export default function Perguntas_frequentes(){
  return(
    <main>
        
        <div class="container__pergs">
            <h2 class="titulo__pergs">Perguntas Frequentes</h2>
            <div class="faq-item">
                <div class="pergunta">1. Como faço para redefinir minha senha?</div>
                <div class="resposta">Você pode redefinir sua senha na página de login, clicando no link "Esqueceu sua senha?" e seguindo as instruções.</div>
            </div>
            <br/>
            <div class="faq-item">
                <div class="pergunta">2. Como posso entrar em contato com o suporte?</div>
                <div class="resposta">Você pode entrar em contato com nosso suporte através do e-mail support@portobikes.com ou pelo telefone (11)96456-7890.</div>
            </div>
            <br/>
            <div class="faq-item">
                <div class="pergunta">3. O que é um selim?</div>
                <div class="resposta">Caso você tenha qualquer dúvida sobre onde fica ou o que é determinada peça de uma bike, pergunte para o nosso chat online, ele irá te orientar.</div>
            </div>
        </div>
        
    </main>
    )
}