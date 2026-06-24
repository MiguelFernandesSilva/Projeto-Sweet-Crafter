// Arquivo exclusivo de redimensionamento de Páginas

// CONTATOS
function socialMedia(index){
    switch (index){
        case 0:
            window.open('https://www.instagram.com/', '_blank');
            break;
        case 1: 
            window.open('https://www.facebook.com/?locale=pt_BR', '_blank');
            break;
        case 2:
            window.open('https://web.whatsapp.com/', '_blank');
            break;
        case 3:
            window.open('https://mail.google.com/mail/u/0/', '_blank');
            break;
        default:
            return;
            break;
    };
};