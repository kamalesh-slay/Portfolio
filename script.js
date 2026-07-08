      var rjs_cursor = document.getElementById("rjs_cursor"); //Getting the cursor


        function rjs_show_cursor(e) { //Function to show/hide the cursor
            if (rjs_cursor.classList.contains('rjs_cursor_hidden')) {
                rjs_cursor.classList.remove('rjs_cursor_hidden');
            }
            rjs_cursor.classList.add('rjs_cursor_visible');
        }


        function rjs_mousemove(e) { //Function to correctly position the cursor
            rjs_show_cursor(); //Toggle show/hide

            var rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
            var rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

            var rjs_cursor_x = e.clientX - rjs_cursor_width; //x-coordinate
            var rjs_cursor_y = e.clientY - rjs_cursor_height; //y-coordinate
            var rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
            rjs_cursor.style.transform = rjs_cursor_pos;
        }


        window.addEventListener('mousemove', rjs_mousemove); //Attach an event listener

        const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            const progressBar =
                entry.target.querySelector(".progress-value6");

            if(progressBar){
                progressBar.style.animation =
                    "load6 3s forwards";
            }

        }

    });

},{
    threshold:0.3
});

document.querySelectorAll(".hidden").forEach((el)=>{
    observer.observe(el);
});



window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loader=document.getElementById("preloader");

        loader.classList.add("preloader-hide");

        setTimeout(()=>{

            loader.remove();

        },1200);

    },2500);

});


