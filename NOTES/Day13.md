# Day 11
## [6:07:46](https://www.youtube.com/watch?v=G3e-cpL7ofc&t=20024s)
## [Build a Classic Layout FAST in CSS Grid](https://www.youtube.com/watch?v=KOvGeFUHAC0)
## [CSS Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
## CSS Grid
### CODE
```html
<!DOCTYPE html>
<html>

<head>
    <title>3/30</title>
    <style>
        .box {
            height: 380px;
            width: 310px;
            background-color: white;
            border-radius: 20px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
            margin: 20px;
            padding-top: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            object-fit: contain;
        }

        .image {
            height: 280px;
            width: 280px;
            border-radius: 20px;
        }

        .collect-button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: lightgreen;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            font-weight: 900;
            color: rgb(30, 131, 44);
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .name {
            margin-top: 5px;
            margin-left: 15px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            font-weight: 700;
            align-self: flex-start;
        }

        .bar {
            margin-top: 15px;
            width: 250px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .icon {
            height: 30px;
            width: 30px;
        }
        @media  (max-width:599px)  {
            body{
                grid-template-columns: 1fr;
            }
        }
        @media (min-width:600px) and (max-width:900px)  {
            body{
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (min-width:901px) and (max-width:1400px) {
            body{
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
         @media (min-width:1401px) {
            body{
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
        } 
    </style>
</head>

<body style="
        background-color: lightgray;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-auto-rows: minmax(100px, auto);
    ">
    <div class="box">
        <img class="image" src="picture/Bojji.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-1.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-2.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-3.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-4.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-5.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-6.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-7.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-1.jpg">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-9.gif">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-10.gif">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
    <div class="box">
        <img class="image" src="picture/Bojji-11.gif">
        <div class="collect-button"> + </div>
        <div class="name">Bojji</div>
        <div class="bar">
            <img class="icon" src="picture/heart.png">
            <img class="icon" src="picture/chat-bubble.png">
            <img class="icon" src="picture/bookmark (1).png">
        </div>
    </div>
</body>

</html>
```
## 成果
### web 
<img width="927" alt="image" src="https://user-images.githubusercontent.com/87524840/160900481-5bd0b202-fead-43a6-9126-dcec13a9ba4f.png">
![image](https://user-images.githubusercontent.com/87524840/160900653-e496e7f8-63b7-472b-8719-feda76beb0b0.png)
