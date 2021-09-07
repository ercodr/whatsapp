const statusPage = document.getElementById('status-page');
const chatsPage = document.getElementById('chats-page');
const callsPage = document.getElementById('calls-page');

const statu = document.getElementById('status');
const chats = document.getElementById('chat');
const call = document.getElementById('call');

window.addEventListener('load', ()=> {
    chatsPage.style.display = 'block';
    statusPage.style.display = 'none';
    callsPage.style.display = 'none';

    chats.style.color = '#e9c46a';
});

chat.addEventListener('click', ()=>{
    chatsPage.style.display = 'block';
    statusPage.style.display = 'none';
    callsPage.style.display = 'none';
    
    chats.style.color = '#e9c46a';
    statu.style.color = '';
    call.style.color = '';
});

statu.addEventListener('click', ()=>{
    statusPage.style.display = 'block';
    chatsPage.style.display = 'none';
    callsPage.style.display = 'none';

    statu.style.color = '#e9c46a';
    call.style.color = '';
    chats.style.color = '';
});

call.addEventListener('click', ()=>{
    callsPage.style.display = 'block';
    chatsPage.style.display = 'none';
    statusPage.style.display = 'none';

    call.style.color = '#e9c46a';
    statu.style.color = '';
    chats.style.color = '';
});

