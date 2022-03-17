# Day 7
## [2:47:00~3:16:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&list=WL&index=4&t=4381s)
## Html div
> Nested Layouts Technique
```html
<!DOCTYPE html>
<html>
    <head>
        <title>DAY.7</title>
        <link rel="stylesheet" href="style\Day7.css">
    </head>
    <body>
        <div class="box">
            <center><img class="image" src="1.jpeg"></center>
            <div class="ifo">
                <p>ONE-ONE</p>
                <p class="text">
                    ABCCBA
                    ABCCBA
                </p>
                <form action="https://github.com/Austin0914/website">
                    <button class="button">
                        CLICK
                    </button>
                </form>
            </div>
        </div>
        <div class="box">
            <center><img class="image" src="2.gif"></center>
            <div class="ifo">
                <p>TWO-TWO</p>
                <p class="text">
                    ABCCBA
                    ABCCBA
                </p>
                <form action="https://github.com/Austin0914/website">
                    <button class="button">
                        CLICK
                    </button>
                </form>
            </div>
        </div>
        <div class="box">
            <center><img class="image" src="3.gif"></center>
            <div class="ifo">
                <p>THREE-THREE</p>
                <p class="text">
                    ABCCBA
                    ABCCBA
                </p>
                <form action="https://github.com/Austin0914/website">
                    <button class="button">
                        CLICK
                    </button>
                </form>
                
            </div>
            
        </div>
    </body>
</html>
```
> CSS file
```CSS
.box{
    width: 400px;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    display: inline-block;
    background-color: antiquewhite;
}

.image{
    width: 350px;
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    padding: 10px;
}
p{
    margin-top: 0px;
    margin-bottom: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 800;    
}
.text{
    font-weight: 400;
    color: rgb(97, 97, 97);
}
.button{
    font-size: 15px;
    background-color: rgb(241, 179, 64);
    color:white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: padding 0.5s;
}
.button:hover{
    padding:30px;
}
.ifo{
    margin-left: 20px;
    margin-right: 20p;
}
```
## 成果
### web![image](https://user-images.githubusercontent.com/87524840/158864140-5f3fa720-34f1-40f7-9a35-1d32fea7425c.png)

