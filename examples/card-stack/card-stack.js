document.addEventListener('DOMContentLoaded', function () {
    var stack;
 
    stack = window.swing.Stack();
 
    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);
 
        targetElement.classList.add('in-deck');
    });
 
    stack.on('throwout', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection, 'direction.');
        $.ajax({
            url: "http://0.0.0.0:5001/ping",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
            }
        }).done(function() {
            console.log("done");
        });
 
        e.target.classList.remove('in-deck');
    });
 
    stack.on('throwin', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown into the stack from the', e.throwDirection, 'direction.');
        e.target.classList.add('in-deck');
    });
 
    setInterval(ajaxCall, 2000); //2000 MS == 2s
 
    function ajaxCall() {
        //do your AJAX stuff here
        // TODO: call
    }
});

function EnterTheRoom() {
    // $.ajax({
    //     url: "http://0.0.0.0:5001/rooms",
    //     type: "GET",
    //     dataType: "json",
    //     contentType: "application/json; charset=utf-8",
    //     success: function (data) {
    //         console.log(data.restaurants);
    //     }
    // });
    var names = ['vitosh','academy','dot','com'];
        var ul = document.createElement('ul');
        ul.className = "stack";
        document.getElementById('viewport').appendChild(ul);
 
        names.forEach(function(name){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML += name;
        });

    var stack;
 
    stack = window.swing.Stack();
 
    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);
 
        targetElement.classList.add('in-deck');
    });
 
    stack.on('throwout', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection, 'direction.');
        $.ajax({
            url: "http://0.0.0.0:5001/ping",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
            }
        }).done(function() {
            console.log("done");
        });
 
        e.target.classList.remove('in-deck');
    });
 
    stack.on('throwin', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown into the stack from the', e.throwDirection, 'direction.');
        e.target.classList.add('in-deck');
    });
 
    setInterval(ajaxCall, 2000); //2000 MS == 2s
 
    function ajaxCall() {
        //do your AJAX stuff here
        // TODO: call
    }
    


}

