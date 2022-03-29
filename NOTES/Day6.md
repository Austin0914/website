# Day 6
## [2:35:00~2:47:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&list=WL&index=4&t=4381s)
## Html div
> html file
```html
<!DOCTYPE html>
<html>
    <head>
        <title>MY HERO ACADMEIA</title>
        <link rel="stylesheet" href="stytles\button.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;500&display=swap" rel="stylesheet">
        <style>
            p{
                font-family: 'Barlow', sans-serif;
                font-size: 20px;
            }
            .previous{
                width: 300px;
                height: 300px;
                object-fit: cover;
                border-width: 5px;
                border-radius: 20px;
                border-style:solid ;
                border-color: #5DEF60;
                transition: width 0.5s,height 0.5s;
            }
            .previous:hover{
                width: 330px;
                height: 330px;
            }
            .Search-bar{
                border-radius: 50px;
                border-width: 0px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 30px;
                margin-top: 30px;
                width: 20%;
                padding-left: 30px;
                padding-top: 20px;
                padding-bottom: 20px;
                transition: background-color 0.4s;
                box-shadow: 0px 0px 10px 4px rgba(0,0,0, 0.15);
                align-items: left;
            }
            .author{
                display: inline;
            }
            .box{
                width: 350px;
                display: inline-block;
                margin: 10px;
            }
            .img{
                width: 20%;
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
        </style>
    </head>
    <body>
        <img class="img"src="https://logos-world.net/wp-content/uploads/2021/09/My-Hero-Academia-Logo-2016-present.png">
        <input class="Search-bar" type="text" placeholder="Search">
        <div class="box">
            <img class="previous" src="1.jpeg">
            <p class="author">
                Midoriya Izuku
            </p>
        </div>
        <div class="box">
            <img class="previous" src="2.gif">
            <p class="author">
                Midoriya Izuku
            </p>
        </div>
        
    </body>
</html>
```
## 成果
### web
![image](https://user-images.githubusercontent.com/87524840/158598964-54e74dca-33ad-4b9e-ba3b-d6fa6f7c1355.png)


