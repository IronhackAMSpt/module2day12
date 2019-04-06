var showMessage = function(message) {
  $('#messages').append($('<h2>').html(message.title))
  $('#messages').append($('<p>').html(message.body))
}


document.addEventListener('DOMContentLoaded', () => {

  axios.get('/message/all')
    .then(messages => {
      console.log(messages);
      messages.data.forEach(message => {
        showMessage(message);
      })
    })
    .catch(err => {
      console.log(err);
    })
  
  $('#post-message-form').submit(e => {
    e.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();

    axios.post('/message/add', {
      title: title,
      body: body
    })
    .then(message => {
      showMessage(message.data);
    })
    .catch(err => {
      console.log(err);
    })
  })

  console.log('IronGenerator JS imported successfully!');

}, false);
