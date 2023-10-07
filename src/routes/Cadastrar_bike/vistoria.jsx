export default function vistoria(){

    const qrcode = (e)=>{
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`qr.codes/pUPYRM`)
        .then((res)=> res.json())
    }

    return(

        <main>
            <h1>dasdasdasd</h1>
        </main>

    )


}