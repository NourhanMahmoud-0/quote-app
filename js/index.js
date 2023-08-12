var quote =[
    {'quote': "  “  Be the change that you wish to see in the world. ” ",'Author': "― Mahatma Gandhi"},

    {'quote': "  “  So many books, so little time. ” ",'Author': "― Frank Zappa"},

    {'quote': "  “  You only live once, but if you do it right, once is enough. ” ",'Author': "― Mae West"},

    {'quote': "  “  A room without books is like a body without a soul. ” " ,'Author': "― Marcus Tullius Cicero"},

    {'quote': "  “  Be yourself; everyone else is already taken. ” ",'Author': "― Oscar Wilde"},

]

function printQoute(){
    var num = Math.floor(Math.random()*quote.length)
    console.log(num);
    document.getElementById("quote").innerHTML = quote [num].quote;
    document.getElementById("Author").innerHTML = quote[num].Author;
}