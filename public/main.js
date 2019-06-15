const socket = io();
const f = document.getElementById('f');
const msgs = document.getElementById('messages');

f.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();

  // Get message 
  socket.emit('chat message', document.getElementById('m').value);

  // Clean the input field
  document.getElementById('m').value = '';
  
  return false;
};

// Display message 
socket.on('chat message', function(msg){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(msg));
  msgs.appendChild(li);
});
