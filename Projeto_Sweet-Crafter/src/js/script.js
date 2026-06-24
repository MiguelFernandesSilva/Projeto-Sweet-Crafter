// Assim como a Home page, vou continuar explicando tudo com comentários

// MENU DROPDOWN
    const gate = document.getElementById('dropdown-wrapper');
    const dropdown = document.querySelector('.dropdown-container');

    let toggle = false; // Essa variável funciona como um interruptor para o click do link
    let hovered = false; // Essa variável vai verificar se o mouse está por cima da área desejada ou não

    // Abrir ao passar o mouse
    gate.addEventListener('mouseenter', () => {
        dropdown.classList.add('opened');
        // Essa função faz com que, ao entrar com o cursor na área do link, o dropdown ganhe a classe "opened", que o faz aparecer
    });

    // Fechar ao tirar o mouse
    gate.addEventListener('mouseleave', () => {
        dropdown.classList.remove('opened');
        // Já essa função remove a classe "opened" quando o cursor sair da área do link
    });

    // Abrir e fechar ao clicar
    gate.addEventListener('click', () => {
        toggle = !toggle; // Ao clicar, o interruptor recebe o inverso de seu valor, então se era falso, vira verdadeiro, e vice-versa

        if (hovered || toggle){
            dropdown.classList.add('opened');
            // Se alguma das condições for verdadeira, o dropdown recebe a classe e fica visivel
        } else {
            dropdown.classList.remove('opened');
            // E se for falsa, ele remove a classe
        }
    });