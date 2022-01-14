$('#newPostSaveBtn').on('click', function (e) {

    e.preventDefault()

    const newBlogPost = {
        title: $('#newPostTitle').val().trim(),
        body: $('#newPostBody').val().trim(),
    }

    fetch('/dashboard', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlogPost)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.location.reload()
    })
})

$('.editPost').on('click', function (e) {

    console.log('edit button clicked!')

})

$('.deletePost').on('click', function (e) {

    fetch('/blogpost/delete/' + $(this).attr('name'), {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log('Data from Backed we got back after we did fetch!', data)

        window.location.reload()
    })
})