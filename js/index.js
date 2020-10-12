const wheel = document.getElementById ('wheel')

wheel.addEventListener('click', function() {
    wheel.style.transform = 'rotate(360deg)'
    wheel.style.transition = '2s'
})