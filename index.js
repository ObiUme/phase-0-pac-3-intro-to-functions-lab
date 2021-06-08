function shout(string) {
    return string.toUpperCase();
}
shout("hello");

function whisper(string) {
    return string.toLowerCase();
}
whisper('HELLO');

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    switch (string) {
        case 'hello'.toLowerCase() :
            return 'I can\'t hear you!';
            break;
        case 'hello'.toUpperCase() :
            return 'YES INDEED!';
            break;
        case 'I love you, Grandma.' :
            return 'I love you, too.';
            break;
    }
}
