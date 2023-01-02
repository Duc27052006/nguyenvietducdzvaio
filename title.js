var text = ["Graph - e ", "Graph - e m ", "Graph - e m p ", "Graph - e m p f ", "Graph - e m p f a ", "Graph - e m p f a k ", "Graph - e m p f a k e ", "Graph - e m p f a k e d ", "Graph - e m p f a k e d ", "Graph - e m p f a k e ", "Graph - e m p f a k ", "Graph - e m p f a ", " Graph - e m p f ", " Graph - e m p ", " Graph - e m ",  "Graph - e "];
var counter = 0;
var inst = setInterval(change, 650);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
