<<<<<<< HEAD
const FORM_HTML = `
<form class="form1" action="http://google.com">
    <div class="formtitle">
    <span>Prossiga com a senha</span>
    </div>
    <div class="input nobottomborder">


    <div class="inputcontent">
        <input type="password" id="password" /><br />
    </div>
    </div>

    <div class="buttons">
    <input class="orangebutton" type="button" value="Login" onclick="checkPassword()" />
    </div>
    <span id="form-status"></span>
</form>
`

const HOME_HTML = `
<h3>Bem-vindo ao portal agorinha.</h3>
<p>O Livro do mês é: Autoajuda</p>
`

async function initContent() {
    document.getElementById("content").innerHTML = FORM_HTML
    return true;
}

async function checkPassword() {
    if (document.getElementById('password').value.toUpperCase() == 'SIC AGORINHA CREATUS EST') {
        await alert('Beatus homo qui invenit sapientiam et qui affluit prudentia');
        document.getElementById("content").innerHTML = HOME_HTML
        document.getElementById("form-status").innerHTML = ""
        return true;
    } else {
        document.getElementById("form-status").innerHTML = "Senha Incorreta!"
        return false;
    }
}

// Call Init
initContent();
=======
async function checkPassword() {
    if (document.getElementById('password').value.toUpperCase() == 'SIC AGORINHA CREATUS EST') {
        await alert('Beatus homo qui invenit sapientiam et qui affluit prudentia');
        location.href = "https://google.com";
        return true;
    } else {
        location.href = ('https://letmegooglethat.com/?q=como+hackear+o+agorinha');
        return false;
    }
}
>>>>>>> 6493ba2dd573350afea64e344f8adbfe04f23a26
