document.window = 'https://devchoice.yvesgurcan.com/list/add?' + Math.floor(Math.random() * 10000);
document.getElementById('unpublished').checked = true;
document.getElementById('episode').value = 'test-' + Math.floor(Math.random() * 10000);
document.getElementById('imageName').value = 'test.jpg';
document.getElementById('username').value = 'gurcan.yves+github@gmail.com';

document.getElementById('submit').click();