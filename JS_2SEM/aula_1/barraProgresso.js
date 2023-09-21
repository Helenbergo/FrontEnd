function animarBarraProgresso()
{
    //Declarando as variáveis e atribuindo os valores através dos elementos da DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://images.pexels.com/photos/3548379/pexels-photo-3548379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
        }
        else
        {
            progresso++;
            barra.css("width", progresso + "%");
        }
    },30);
}