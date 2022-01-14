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