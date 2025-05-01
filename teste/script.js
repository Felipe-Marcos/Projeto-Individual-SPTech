var draggedTask = null;

function addTask() {
  var input = document.getElementById('taskInput');
  var taskText = input.value.trim();

  if (taskText === '') return;

  var task = document.createElement('div');
  task.className = 'task';
  task.draggable = true;
  task.textContent = taskText;

  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function () {
    task.remove();
    atualizarProgresso();
  };

  task.appendChild(deleteBtn);

  task.addEventListener('dragstart', function () {
    draggedTask = task;
  });

  task.addEventListener('dragend', function () {
    draggedTask = null;
  });

  document.getElementById('todo').appendChild(task);
  input.value = '';
  atualizarProgresso();
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  if (draggedTask) {
    event.target.closest('.task-list').appendChild(draggedTask);
    atualizarProgresso();
  }
}

function atualizarProgresso() {
  var total = document.querySelectorAll('.task').length;
  var concluidas = document.querySelectorAll('#done .task').length;
  var porcentagem = total > 0 ? (concluidas / total) * 100 : 0;

  document.getElementById('progressBar').style.width = porcentagem + '%';
  document.getElementById('progressText').textContent = `${concluidas}/${total} concluídas`;
}

function adicionarVideo() {
    var fileInput = document.getElementById('videoFile');
    var file = fileInput.files[0];
 
    if (!file) {
      alert("Selecione um arquivo de vídeo.");
      return;
    }
 
    var url = URL.createObjectURL(file);
 
    var video = document.createElement('video');
    video.src = url;
    video.controls = true;
 
    document.getElementById('listaVideos').appendChild(video);
    fileInput.value = ''; // limpa o input
  }