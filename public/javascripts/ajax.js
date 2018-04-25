$(function(){
    $("#intext").val("")
    $("#proc").click(function(){
      var dotSpec = $("#intext").val()
      var html = "<div id=\"graph\" style=\"text-align: center;\"></div>\n"
      html += "<script>\n"
      html += "var mygraph = \`" + dotSpec + "\`\n"
      html += "d3.select(\"#graph\").graphviz()\n"
      html += ".fade(false)\n"
      html += ".renderDot(mygraph)\n"
      html += "</script>"

      $("#resultado").append(html)
    })

    $("#limpa").click(function(){
        $("#resultado").children().remove()
    })

    $("#novo").click(function(){
        $("#intext").val("")
    })
})

    