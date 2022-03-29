# Day 8
## [3:16:00~3:40:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&list=WL&index=4&t=4381s)
## Html div/CSS grid
```html
<!DOCTYPE html>
<html>
    <head>
        <title>3/18</title>
        <style>
            .box{
                box-shadow: 1px 1px 10px rgb(179, 172, 172);
            }
            .img{
                width: 300px;
                object-fit: cover;
            }
            p{
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 900;
                margin: 0%;
                padding:10px;
            }
            .people{
                margin-left: 10px;
                width: 40px;
                object-fit: contain;
                border-radius: 50px;
            }
            .friends{
                vertical-align: top;
                color:grey;
                font-weight: 500px;
                font-size: 15px;
                display: inline-block;
                align-items: top;
            }
            .b{
                font-size: 20px;
                color: white;
                display: block;
                background-color: rgb(0, 81, 255);
                border-radius: 5px;
                border: none;
                padding-left: 10px;
                padding-right: 10px;
                padding:20px;
                margin: 10px;
                transition: box-shadow 0.2s;
            }
            .b:hover{
                box-shadow: 2px 2px 10px rgb(0,0,0);
            }
        </style>
    </head>
    <body>
        <div style="
        display: grid;
        grid-template-columns: 300px 300px 300px;
        column-gap: 40px;
        row-gap: 20px;
        font-size: 20px;
        font-weight: 900;
        margin: 20px;
        ">
            <div class="box">
                <img class="img" src="2.gif">
                <div >
                    <p>Austin</p>
                    <img class="people" src="1.jpeg">
                    <p class="friends">150 friends</p>
                    <button class="b">
                        Add Friend
                    </button>
                </div>
            </div>
            <div class="box">
                <img  class="img" src="2.gif">
                <div>
                    <p>Austin</p>
                    <img class="people" src="1.jpeg"><p class="friends">150 friends</p>
                    <button class="b">
                        Add Friend
                    </button>
                </div>
            </div>
            <div class="box">
                <img class="img" src="2.gif">
                <div>
                    <p>Austin</p>
                    <img class="people" src="1.jpeg">
                    <p class="friends">150 friends</p>
                    <button class="b">
                        Add Friend
                    </button>
                </div>
            </div>
        </div>
    </body>
</html>
```
> CSS grid
```html
<!DOCTYPE html>
<html>
    <head>
        <title>3/18</title>
    </head>
    <body>
        <div style="
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        font-size: 20px;
        font-weight: 900;
        margin: 20px;
        background-color: red;
        ">
            <div style="background-color:aquamarine;height: 200px;">
                1fr
            </div>
            <div style="background-color:rgb(255, 127, 238) ;height: 200px;">
                1fr
            </div>
            <div style="background-color:aquamarine ;height: 200px;">
                1fr
            </div>
            <div style="background-color:rgb(255, 127, 238) ;height: 200px;">
                1fr
            </div>
            <div style="background-color:aquamarine ;height: 200px;">
                1fr
            </div>
            <div style="background-color:rgb(255, 127, 238) ;height: 200px;">
                1fr
            </div>
        </div>
    </body>
</html>
```
## 成果
### web
![image](https://user-images.githubusercontent.com/87524840/159033830-17bc462d-1b1f-4a42-a0c4-82e30c2000c8.png)
### CSS grid
![image](https://user-images.githubusercontent.com/87524840/159034444-21254e15-6068-4144-8563-059a2c066d49.png)

