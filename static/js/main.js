$(function() {

    // Main drag and drop function -- most of this is blatant copy and paste.
    function drop(e) {
        var main = $('#main'),
            content = main.find('.content'),
            instructions = $('.instructions');

        instructions.remove();

        e = (e && e.originalEvent ? e.originalEvent : window.event) || e;

        if (e.preventDefault) {
            e.preventDefault();
        }

        var files = (e.files||e.dataTransfer.files);

        for (var i = 0; i < files.length; i++) {
            (function(i) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    var name = files[i].name,
                        result = event.target.result,
                        html = content.html(),
                        showdown = (new Showdown.converter()),
                        markdown,
                        final;

                    markdown = showdown.makeHtml(result).replace(/--/g, '&mdash;');
                    final = html + '<div class="markdown">' + markdown + '</div>';
                    content.html(final);
                };

                reader.readAsText(files[i]);

          })(i);
        }

        return false;
    }


    // And let's bind drop to the main div...
    var main = $('#main');

    main.bind('dragover', function(){ return false; })
        .bind('drop', drop);

});
