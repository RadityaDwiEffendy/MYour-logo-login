


function login(){
    document.getElementById('firstname').style.display = 'none'
    document.getElementById('start').style.display = 'none'
    document.getElementById('login').style.display = 'block'
    document.getElementById('free1').style.display = 'none'
    document.getElementById('welcome').style.display = 'block'
    document.getElementById('email1').style.display = 'block'
    document.getElementById('pass1').style.display = 'block'
    document.getElementById('email').style.display = 'none'
    document.getElementById('pass').style.display = 'none'

}

function signup(){
    document.getElementById('firstname').style.display = 'block'
    document.getElementById('start').style.display = 'block'
    document.getElementById('login').style.display = 'none'
    document.getElementById('free1').style.display = 'block'
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('email1').style.display = 'none'
    document.getElementById('pass1').style.display = 'none'
    document.getElementById('email1').style.display = 'block'
    document.getElementById('pass1').style.display = 'block'
}


function start(){
    var namadepan = document.getElementById('nama').value
    var namabelakang = document.getElementById('last').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value

    if(namadepan !='' && namabelakang != '' && email != '@gmail.com' && pass != '12345'){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Akun anda telah di simpan',
            showConfirmButton: false,
            timer: 1500
          })
    }else if(pass == '12345'){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'password kurang kuat',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function Login(){
    var email = document.getElementById('email1').value
    var pass = document.getElementById('pass1').value

    if(email == 'raditya@gmail.com' && pass == 'raditya'){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'correct',
            showConfirmButton: false,
            timer: 1500

        })

        setTimeout(()=>{
            location.href = "https://www.ovagames.com/"
        },1500)

    }else if(email != 'raditya@gmail.com'){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'invalid email',
            showConfirmButton: false,
            timer: 1500
          })
    }else if(pass != 'raditya'){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Wrong password',
            showConfirmButton: false,
            timer: 1500
          })
    }
}
