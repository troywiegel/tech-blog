$('.readMore').on('click', function (e) {
    e.preventDefault()
    window.location.replace('/blogpost/' + $(this).attr('name'))
})