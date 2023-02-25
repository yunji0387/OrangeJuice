var characters = ["knight", "hunter"];

for (let i = 0; i < characters.length; i++) {
    let hero = characters[i];
    $("."+hero).css({
        'background-image': 'url("images/'+hero+'.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat'
    });
}

// choose character
$(".btn").click(function(e) {
    console.log(e.target.id);
    window.location.href = "board.html";
});

