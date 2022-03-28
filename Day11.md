# Day 11
## [Flexbox Basics](https://cythilya.github.io/2017/04/04/flexbox-basics/)
## CSS Nested Flexbox
### 1
```html
<!DOCTYPE > 
<html>
    <head>
        <title>3/28</title>
        <style>
            div{
                font-family: Arial, Helvetica, sans-serif;
                margin-bottom: 5px;
            }
        </style>
    </head>
    <body style="height: 3000px; padding:0">
        <div style="
            top:0;
            bottom:0;
            left:0;
            right:0;
            position: fixed;
            background-color: rgba(0, 0, 0, 0.377);
            display: flex;
            justify-content: center;
            align-items: center;
        ">
            <div style="
                border-radius:10px;
                background-color: white;
                width: 300px;
                display: flex;
                flex-direction: column;
                padding: 15px;

            ">
                <div style="font-size: 30px;font-weight: 700;"> 
                    Model Title
                </div>
                <div>
                    This is model
                </div>
                <button>
                    close
                </button>
            </div>
        </div>
        <div style="
            background-color: darkolivegreen;
            color:white;
            position: fixed;
            width: 100px;
            top:0;
            bottom:0;
            right: 0;
        ">
            right sidebar
        </div>
    </body>
</html>
```
### 2
```
<!DOCTYPE html>
<html>
    <head>
        <title>3/28</title>
    </head>
    <body style="height: 3000px;">
        <div style="
            position: fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: lightgrey;
        "
        >
            <div style="
                border-radius: 15px;
                height: 60px;
                width: 50%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background-color: white;
                padding: 10px;
            ">
                <div style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                ">
                    <img style="border-radius: 50%; height: 50px;" src="1.jpeg">
                    <div style="
                    font-family: Arial, Helvetica, sans-serif;
                    margin-left: 5px;
                    font-weight: 700;
                    font-size: 20px;
                    ">
                        Austin
                    </div>
                </div>
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 220px;
                ">
                    <button style="
                        width: 100px;
                        height: 50px;
                        border-radius: 5px;
                        border: none;
                        background-color: lightskyblue;
                        color: white;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: 700;
                    ">
                        Add Freind
                    </button>
                    <button style="
                        width: 100px;
                        height: 50px;
                        border-radius: 5px;
                        border: none;   
                        background-color: grey;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: 700;
                    ">
                        Message
                    </button>
                </div>
            </div>
        </div>
    </body>
</html>
```
### 3
```
<!DOCTYPE >
<html >
    <head>
        <title>3/28</title>
        <style>
            div{
                font-family:Arial, Helvetica, sans-serif;
                font-size: 20px;
            }
            .image{
                object-fit: cover;
                height: 60px;
                width: 60px;
                margin-bottom: 15px;
                margin-top: 5px;
                border-radius: 50%;
            }
            .info{
                color: white;
                font-weight: 500;
                margin-bottom: 15px;
            }
        </style>
    </head>
    <body style="height:3000px">
        <div style="
            width: 80px;
            position: fixed;
            left: 0;
            top:0;
            bottom:0;
            background-color: rgb(42, 42, 42);
            display: flex;
            flex-direction: column;
            align-items: center;
            
        ">
            <img class="image" src="1.jpeg">
            <img class="image" src="2.gif">
            <img class="image" src="3.gif">
        </div>
        <div style="
            position: fixed;
            width: 170px;
            left: 80px;
            top:0;
            bottom:0;
            background-color: rgb(68, 67, 67);
            display: flex;
            flex-direction: column;
            padding: 10px;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
            ">
                <div class="info" style="font-weight: 700;">
                    INFO
                </div>
                <div class="info" style="font-weight: 700;">
                    +
                </div>
            </div>
            <div class="info">
                #new-video
            </div>
            <div class="info">
                #chat
            </div>
            <div class="info">
                #game
            </div>
        </div>
    </body>
</html>
```
## 成果
### web 1
![image](https://user-images.githubusercontent.com/87524840/160391769-9216ef94-5766-4f8d-9911-f90d12fd2c73.png)

### web 2
<img width="673" alt="image" src="https://user-images.githubusercontent.com/87524840/160391796-19c3e80d-37bb-4759-aaea-e251460b1068.png">

### web 3
<img width="180" alt="image" src="https://user-images.githubusercontent.com/87524840/160391843-e487540e-4bb2-40c6-bec8-f7332c238f65.png">



