casper.test.begin('web app version on index page is correct', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTextExists('Hello World! My App deployed via Ansible V6.', 'page body mentions correct app version');
    }).run(function() {
        test.done();
    });
});
