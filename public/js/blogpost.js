$('.viewPost').on('click', async function (e) {
    e.preventDefault()
    window.location.replace('/blogpost/' + $(this).attr('name'))
})

$('#newPost').on('click', async function (e) {
    console.log('new post button clicked')
    e.preventDefault()
    window.location.replace('/dashboard/newBlogpost')
})