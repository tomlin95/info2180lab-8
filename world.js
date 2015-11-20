<HTML>
<HEAD>
<TITLE> Welcome to my site</TITLE></HEAD>
<BODY>
<SCRIPT LANGUAGE="JAVASCRIPT">

<!--
$(document).ready( function() {
    $('#prev').click(function() {
        $.ajax({
            type: 'POST',
            url: 'world.php',
            data: 'id=testdata',
            dataType: 'json',
            cache: false,
            success: function(result) {
                $('#content1').html(result[0]);
            },
        });
    });
});
        <button id="lookup">Lookup</button>
// -->

</SCRIPT>
</BODY>
</HTML>