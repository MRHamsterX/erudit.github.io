//&quot;
   var
   history = [];
   history[0] = 0;
   history[1] = 1;
   num=1;
   word=document.getElementById("word");
   mean=document.getElementById("mean");
   i = 0;
   l = 0;
    console.log( "ready!" );
    var data = { "words":[
            {
                "name":"<i>Добро пожаловать</i>",
                "adj":"<i>Кликните ></i>",
            },
            {
                "name":"Толерантность",
                "adj":"социологический термин, обозначающий терпимость к иному мировоззрению, образу жизни, поведению и обычаям"
            },
            {
                "name":"Априори",
                "adj":"заранее, предварительно, не опираясь на знание фактов, не проверяя, бездоказательно"
            },
            {
                "name":"Саморефлексия",
                "adj":"филос. самоотражение, самовосприятие, самоосмысление ◆ Жизнь первее и непосредственнее всякой философской рефлексии о ней или её саморефлексии"
            },            
            {
                "name":"Универсум",
                "adj":" в философии — совокупность объектов и явлений в целом, рассматриваемая в качестве единой системы, то есть объективная реальность во времени и пространстве. В общем смысле тождествен термину вселенная"
            },
    ]};
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function write(){
        i=getRandomInRange(1,data.words.length-1);
        history[l]=i;
        // while (i==history[l-1] && l>1){
        //     l--;
        //     i=getRandomInRange(0,data.words.length-1);
        // }
        l++;
        word.innerHTML=data.words[i].name;
        mean.innerHTML= data.words[i].adj;
    }
    $("#forward").click(function(){
        $(".box").fadeOut(200);
        setTimeout(write, 200);
        $(".box").delay(200).fadeIn(200);
    });
    function hist(){
        word.innerHTML=data.words[history[l-2]].name;
        mean.innerHTML= data.words[history[l-2]].adj;
        l--;
    }
    $("#history").click(function(){
        $(".box").fadeOut(200);
        setTimeout(hist, 200);
        $(".box").delay(200).fadeIn(200);
    });
    document.getElementById("word").innerHTML=data.words[0].name;
    document.getElementById("mean").innerHTML= data.words[0].adj;