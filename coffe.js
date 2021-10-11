
function myB() {
  var breackFn  = $("#breakF").val() * 15
  var brunchFn  = $("#brunchF").val() * 25
  var icefn = $("#ice").val() * 5
   var sandwichfn = $("#sand").val() * 7
  var res = $("<div id ='b'></div>")
  res.text("your bill is " + (breackFn + brunchFn + icefn + sandwichfn ) + "DT")
  res.appendTo('body')
  $('.breakfast').hide()
  $('.brunch').hide()
  $('.icedrink').hide()
  $('.sandwich').hide()
  if($("#breakF").val()!== ''){
    $('<img src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/7/6/076c3fe209_117550_petit-dej-ideal.jpg">').appendTo('body')
  }
   if($("#brunchF").val()!== ''){
    $('<img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/16/17/a1/img-20200927-232636-largejpg.jpg">').appendTo('body')
  }
  if($("#ice").val()!== ''){
    $('<img src="https://thumbs.dreamstime.com/z/colorful-cold-drinks-plastic-cups-ice-dark-background-86654419.jpg">').appendTo('body')
  }
  if($("#sand").val()!== ''){
    $('<img src="https://img.mesrecettesfaciles.fr/2019-07/sandwichauthon-16509-1000x500.jpg">').appendTo('body')
  }

   $('body').css("background-image", 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Abstract-background-white-12.jpg/2560px-Abstract-background-white-12.jpg"')
}




