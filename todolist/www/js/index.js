function ajouterTache(){
    const taskName = task.value;

    console.log("HERE")

    if(taskName.trim() == '')
        return;

    const newTask = document.createElement('li');
    
    newTask.innerHTML = taskName;

    $(newTask).on('swipeleft', swipeLeftHandler1);
    $(newTask).on('swiperight', swipeRightHandler1); 
    
    taskListOngoing.append(newTask);

    task.value = '';
    task.focus();

    $(taskListOngoing).listview('refresh');
}

function reinitialiser(){
    taskListDone.innerHTML = '';
    taskListOngoing.innerHTML = '';
}

function swipeLeftHandler1(){
    console.log("swipe left effectué");
    $(this).hide('slow', function(){
        $(this).remove();
        $(taskListOngoing).listview('refresh');
    });
}

function swipeRightHandler1(){
    console.log("swipe right effectué");
    const taskName = $(this).context.textContent;

    const newTask = document.createElement('li');
    
    newTask.innerHTML = taskName;

    $(newTask).on('swipeleft', swipeLeftHandler2);
    $(newTask).on('swiperight', swipeRightHandler2);
    
    taskListDone.append(newTask);

    //removing entry from the previous list
    $(this).hide('slow', function(){
        $(this).remove();
        $(taskListOngoing).listview('refresh');
    });

    $(taskListOngoing).listview('refresh');
    $(taskListDone).listview('refresh');
}

function swipeRightHandler2(){
    console.log("swipe right effectué");
    const taskName = $(this).context.textContent;
    $(this).remove();

    const newTask = document.createElement('li');
    
    newTask.innerHTML = taskName;

    $(newTask).on('swipeleft', swipeLeftHandler1);
    $(newTask).on('swiperight', swipeRightHandler1); 
    
    taskListOngoing.append(newTask);

    task.value = '';
    task.focus();

    $(taskListOngoing).listview('refresh');
}

function swipeLeftHandler2(){
    console.log("swipe left effectué");
    $(this).hide('slow', function(){
        $(this).remove();
        $(taskListDone).listview('refresh');
    });
}
