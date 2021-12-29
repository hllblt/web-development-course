const pre = document.getElementsByTagName("pre")[0];
let htmlCodes = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Balk Kampı Web Dizayn Kursu</title>
        <script src="lesson-1.js" defer></script>
    </head>
    <body>
        <h1>Balk Kampı</h1>
        <h2>Balk Kampı</h2>
        <h3>Balk Kampı</h3>
        <h4>Balk Kampı</h4>
        <h5>Balk Kampı</h5>
        <h6>Balk Kampı</h6>

        <p>
            Hollanda'nın kuzeyindeki bir kamp olan<br />
            Balk Kampı çok güzeldir.
        </p>
        <br />
        <p>Hollanda'nın kuzeyindeki bir kamp olan Balk Kampı çok güzeldir.</p>
        <br />
        <a href="https:/www.google.com">Google'a git.</a>
        <br /><br />
        <a href="https://www.facebook.com">Facebook'a git.</a>
        <br /><br />
        <a href="https://www.youtube.com">Youtube'a git.</a>
        <br /><br />
        <img src="dog.jpg" alt="Köpek Resmi" />
        <img
            src="https://i.pinimg.com/736x/f1/03/2a/f1032aeffa7fc33383308ca511e93c01--black-cats-search.jpg"
            alt="Kedi Resmi"
        />
    </body>
</html>
`;

console.log(htmlCodes);

function thanChanger(htmlCode) {
    let newHtmlCode = ``;
    for (let i = 0; i < htmlCode.length; i++) {
        if (htmlCode[i] == "<") {
            newHtmlCode += `&lt;`;
        } else if (htmlCode[i] == ">") {
            newHtmlCode += `&gt;`;
        } else {
            newHtmlCode += htmlCode[i];
        }
    }
    return newHtmlCode;
}

htmlCodes = thanChanger(htmlCodes);

console.log(htmlCodes);

pre.innerHTML = htmlCodes;
