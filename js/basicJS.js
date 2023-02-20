/* RUN ON CONSOLE TO CHECK ACTIVITY */
/*--------------------------------- */
console.log('hello from external js file')
// document.getElementById('header-id').style.backgroundColor('red')

const title = document.getElementById('header-id')
title.getAttribute('class')
title.classList
title.classList.add('newClass')
title.classList.remove('oldClassToRemove')
title.setAttribute('textData', 'New content added to show on hover')


