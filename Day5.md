# Day 5
## [2:11:00~2:34:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&list=WL&index=4&t=4381s)
## [Google Search Photo](https://fonts.google.com/)
## CSS display: inline/inline-block/block/image/input box
> html file
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="stytles\button.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;500&display=swap" rel="stylesheet">
        <title>Google Search</title>
        <style>
            .google{
                width: 500px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }
            .Search{
                border-radius: 50px;
                border-width: 0px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 30px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
                padding-left: 30px;
                padding-top: 20px;
                padding-bottom: 20px;
                transition: background-color 0.4s;
                box-shadow: 0px 0px 10px 4px rgba(0,0,0, 0.15);
            }
            .Search:hover{
                background-color: ghostwhite;
            }
        </style>
    </head>
    <body>
        <img class="google" src="https://logos-world.net/wp-content/uploads/2021/04/Google-Search-Logo.png">
        <input class="Search" type="text" placeholder="Search">
    </body>
</html>
```
## 成果
### web
![image](https://user-images.githubusercontent.com/87524840/158598964-54e74dca-33ad-4b9e-ba3b-d6fa6f7c1355.png)


