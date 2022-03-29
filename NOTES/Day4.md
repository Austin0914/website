# Day 4
## [1:51:00~2:10:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&t=6743s)
## [Google Fonts Website](https://fonts.google.com/)
## Html-Structure/CSS-stylesheet import/google font
> html file
```html
<!DOCTYPE html>
<html>
    <head>
        <title>2022/3/14</title>
        <link rel="stylesheet" href="stytles\button.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;500&display=swap" rel="stylesheet">
    </head>
    <body>
        <button class="blog_button">
            LOOOOOOL
        </button>
        <button> abc</button>
    </body>
</html>
```
> CSS file
 
```CSS
.blog_button {
        font-family: 'Barlow', sans-serif;
        font-size: 100px;
        background-color: white;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(15, 131, 160);
        color: rgb(15, 131, 160);
        padding: 20px;
        margin: 20px;
        cursor: pointer;
        transition: background-color 0.35s, color 0.35s,padding 0.5s;
    }

    .blog_button:hover {
        background-color: rgb(15, 131, 160);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
        padding: 100px;
        color: white;
    }

    .blog_button:active {
        opacity: 0.3;
    }
```
## 成果
### web
![image](https://user-images.githubusercontent.com/87524840/158195899-311dcd0c-7a9e-4a3d-a13c-20ee4974c8a7.png)
### Files in Vscode
![image](https://user-images.githubusercontent.com/87524840/158196050-c3104b60-7abd-4bba-b1f8-e32bacf15e51.png)


