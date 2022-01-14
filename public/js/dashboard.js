$('#newBlogSaveBtn').on('click', function (e) {

    e.preventDefault()

    const newBlogPost = {
        title: $('#newPostTitle').val(),
        body: $('#newPostBody').val(),
        user_id: req.session.user_id
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
        console.log('data from backend after fetch', data)

        window.location.reload()
    })
})