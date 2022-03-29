# Day 11
## [5:07:14~5:37:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&t=20024s)
## [Flexbox Basics](https://cythilya.github.io/2017/04/04/flexbox-basics/)
## Position Absolute and Relative
### CODE
```html
<!DOCTYPE html>
<html>
    <head>
        <title>3/30</title>
        <style>
            .box{
                height: 380px;
                width: 310px;
                background-color: white;
                border-radius: 20px;
                box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
                margin: 20px;
                padding-top: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
            .image{
                height: 280px;
                width: 280px;
                border-radius: 20px;
            }
            .collect-button{
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
            .name{
                margin-top: 5px;
                margin-left: 15px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 30px;
                font-weight: 700;
                align-self: flex-start;
            }
            .bar{
                margin-top: 15px;
                width: 250px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .icon{
                height: 30px;
                width: 30px;
            }
        </style>
    </head>
    <body style="
        height: 3000px;
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    </body>
</html>
```
## 成果
### web 
![image](https://user-images.githubusercontent.com/87524840/160663256-bf2eda33-1dff-4f04-97f0-423e401e5371.png)





