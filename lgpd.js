let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';
let lgpdHtml = `
<div class="lgpd">

        <div class="lgpd--left">

            Nós utilizamos cookie para melhorar sua experiêcia do usuário.<br/>
            Para conferir detalhadamente todos cookies, leia nossa <a href="">política de privacidade</a>.

        </div>

        <div class="lgpd--right">

            <button>OK</button>

        </div>

    </div>

    <link rel="stylesheet" href="assets/css/template.css">
`;

let lsContent = localStorage.getItem('lgpd');
if (!lsContent) {
    document.body.innerHTML += lgpdHtml;
    
    let lgpdArea = document.querySelector('.lgpd');
    let lgdpButton = lgpdArea.querySelector('button');

    lgdpButton.addEventListener('click', async ()=>{
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if(json.error != '') {
            let id = '456'; // json.id;
            localStorage.setItem('lgpd', id);
        }

    });
}