casper.test.begin('web app version on index page is correct', 1, function(test) {
    casper.start('http://162.222.179.184:8888', function() {
        test.assertTextExists('My App deployed via Ansible V5.', 'page body mentions correct app version');
    }).run(function() {
        test.done();
    });
});
