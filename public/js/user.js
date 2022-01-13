$('#signupBtn').on('click', function (e) {

    e.preventDefault()

    let userSignup = {
        name: $('#signupName').val(),
        email: $('#signupEmail').val(),
        password: $('#signupPassword').val()
    }

    fetch('/user/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userSignup)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.location.replace('/user/login')
    })
})

$('#loginBtn').on('click', function (e) {

    e.preventDefault()

    let userLogin = {
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
    }

    fetch('/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLogin)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.location.replace('/')
    })
})

$('#logoutBtn').on('click', function (e) {

    e.preventDefault()

    fetch('/user/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.location.replace('/')
    })
})