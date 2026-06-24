// CADASTRO

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
    // Transforma o objeto users em string no JSON, e se falhar, retorna um array vazio
}

function findUserByEmail(email) {
    return getUsers().find(user => user.email === email);
    // Retorna o primeiro email dentro do objeto user que for igual ao email inserido
}

function registerUser(name, email, password) {
    const users = getUsers();
 
    const newUser = {
        name,
        email,
        password
    };
 
    users.push(newUser); // Joga a const user no objeto newUser
    localStorage.setItem('users', JSON.stringify(users)); // Guarda o valor de users e transforma numa string JSON chamada users 
 
    return newUser; // Devolve newUser
}
 
// LOGIN
 
function login(email) {
    localStorage.setItem('loggedInUser', email);
    // Entra na conta através do email, verificando
}
 
function logout() {
    localStorage.removeItem('loggedInUser');
    // Faz a mesma coisa que a função acima, mas remove a conta inteira, não só o email
}
 
function getLoggedInUser() {
    const email = localStorage.getItem('loggedInUser');
    if (!email) {
        return null;
    }
    return findUserByEmail(email) || null;
    // Chama a função findUserByEmail, e se falhar, retorna null
}
 
function isLoggedIn() {
    return getLoggedInUser() !== null;
    // Se estiver logado, deixa a função acima como diferente de null
}