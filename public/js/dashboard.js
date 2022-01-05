console.log('connected to the dashboard js file')

// $('#save').on('click', function (e) {
//     e.preventDefault()

//     const newTodo = {
//         title: $('#title').val(),
//         description: $('#description').val()
//     }

//     fetch('/api/save', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newTodo)
//     }).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         console.log('data from backend after fetch', data)

//         window.location.reload()
//     })
// })