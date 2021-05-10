async function checkPassword() {
    if (document.getElementById('password').value.toUpperCase() == 'SIC AGORINHA CREATUS EST') {
        await alert('Beatus homo qui invenit sapientiam et qui affluit prudentia');
        location.href = "http://google.com";
        return true;
    } else {
        location.href = ('https://letmegooglethat.com/?q=como+hackear+o+agorinha');
        return false;
    }
}