var student = {
    Fitst_name: "Abdelrahman",
    Last_name : "Enan",
    id : 210302297,
    CGPA : 3.00,
    Bosnain: false,
    Courses: ["CS412", "CS512", "MATH507", "ME607", "MBS501"],
    Drop : function(crs){
        Indx = this.Courses.indexOf(crs);
        if (Indx >= 0) {
            this.Courses.splice(Indx, 1);
        }
        return this.Courses;}
};
function switches(){
    //Just an example of a switch 
    //I don't have a better idea to use it in my code
    switch (level) {
        case 'One':
            title= 'Take a rest.' ;
            break;
        case 'Two':
            title = 'Take Paracetamol' ;
            break;
        case 'Three':
            title = 'Go to the doctor' ;
            break ;
        default :
            title= 'Game ovee';
            break;
    }
}
function IfElseGreeting() {
    var x = document.getElementById("fname").value;
    var Time = new Date().getHours();
    if (Time > 18) {
        greeting = 'Good evening';
    }else if (Time > 12) {
        greeting = 'Good afternoon';
    }else if (Time > 0) {
        greeting= 'Good morning';
    }else {
        greeting = 'Welcome';
    }
    var arr = ["left", "right", "Resume Objective", "Work Experience", "Education", "Languages", "Skills", "Interests"];
    document.getElementById("demo").innerHTML = greeting + ", " + x +". Welocme to my C.V.";
    Content();    
}
function Content(){
    var arr = ["left", "right", "Resume Objective", "Work Experience", "Education", "Languages", "Skills", "Interests"];
    var html = "";
    for (var i = 0; i < arr.length; i++){
        help = "document.getElementById('"+arr[i]+"').scrollIntoView()";
        html += '<a onclick = "'+help+'">'+arr[i]+'</a><br>';
    }
    document.getElementById("demo2").innerHTML = html;                
}
$(document).ready(function(){
    $("input").click(function(){
        $(".imeg").animate({height: '300', opacity: '0.5'}, "slow");
        $(".imeg").animate({width: '300', opacity: '1.0'}, "slow");
        $(".imeg").animate({height: '100', opacity: '0.5'}, "slow");
        $(".imeg").animate({width: '100', opacity: '1.0'}, "slow");
        $(".imeg").animate({width: '200', opacity: '1.0'}, "slow");
        $(".imeg").animate({height: '200', opacity: '1.0'}, "slow");
        });
  });


  jsPanel.create({
    theme: 'dark',
    headerLogo: '<i class="fad fa-home-heart ml-2"></i>',
    headerTitle: 'I\'m a jsPanel',
    headerToolbar: '<span class="text-sm">Just some text in optional header toolbar ...</span>',
    footerToolbar: '<span class="flex flex-grow">You can have a footer toolbar too</span>'+
                   '<i class="fal fa-clock mr-2"></i><span class="clock">loading ...</span>',
    panelSize: {
        width: () => { return Math.min(800, window.innerWidth*0.9);},
        height: () => { return Math.min(500, window.innerHeight*0.6);}
    },
    animateIn: 'jsPanelFadeIn',
    contentAjax: {
        url: 'Enan.html',
        done: (xhr, panel) => {
            panel.content.innerHTML = xhr.responseText;
            Prism.highlightAll();
        }
    },
    onwindowresize: true,
    callback: function(panel) {
        function clock() {
            let time = new Date(),
                hours = time.getHours(),
                minutes = time.getMinutes(),
                seconds = time.getSeconds();
            panel.footer.querySelectorAll('.clock')[0].innerHTML = `${harold(hours)}:${harold(minutes)}:${harold(seconds)}`;
            function harold(standIn) {
                if (standIn < 10) {standIn = '0' + standIn;}
                return standIn;
            }
        }
        setInterval(clock, 1000);
    }
});