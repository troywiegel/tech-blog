$('.viewPost').on('click', function (e) {
    e.preventDefault()
    window.location.replace('/blogpost/' + $(this).attr('name'))
})

$('#commentPost').on('click', function (e) {
    console.log('comment post button clicked')
    // e.preventDefault()
    // window.location.replace('/blogpost/' + $(this).attr('name'))
})