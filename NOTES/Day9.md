# Day 9
## [4:16:00~4:45:00](https://www.youtube.com/watch?v=G3e-cpL7ofc&list=WL&index=4&t=4381s)
## [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
## CSS Nested Flexbox
```html
<!DOCTYPE hmtl>
<html>
    <head>
        <title>3/26</title>
        <style>
            html{
                font-family: Arial, Helvetica, sans-serif;
            }
            .box{
                display: flex;
                flex-direction: column;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
                width: 500px;
            }

            .letter{
                display: flex;
                flex-direction: row;
                align-items: top;
                margin-bottom: 20px;
            }
            .head{
                width: 35px;
                height: 35px;
                object-fit: cover;
                border-radius: 20px;
            }
            .letter:first-child{
                align-self: top;
            }
            .letter-box{
                display: flex;
                flex-direction: column;
                margin: 5px;
            }
            .letter-title{
                font-weight: 600;
                font-size: 15px;
            }
            .text{
                margin-left : 5px;
                flex: 1;
            }
        </style>
    </head>
    <body>
        <div class="box">
            <div style="color:gray; padding: 5px;">
                ALL INBOXES
            </div>
            <div class="letter-box">
                <div class="letter">
                    <div><img class="head" src="1.jpeg"></div>
                    <div class="text">
                        <div class="letter-title" style="display: flex; justify-content: space-between;">
                            <div>
                                Amazing Website!!
                            </div>
                            <div style="font-weight:500;color:gray">
                                9:14
                            </div>
                        </div>
                        <div class="article">Only thanks to your support over the past six months, we've implemented many updates such as public booklists & favorite
                        booklists, Android app (now available in 28 languages), moderation of uploaded books, preferred language settings,
                        category filter & terms on the category page, filename template editor, and much more.</div>
                    </div>
                </div>
                <div class="letter">
                    <div><img class="head" src="1.jpeg"></div>
                    <div class="text">
                        <div class="letter-title" style="display: flex; justify-content: space-between;">
                            <div>
                                Amazing Website!!
                            </div>
                            <div style="font-weight:500;color:gray">
                                9:14
                            </div>
                        </div>
                        <div class="article">ihoeihoiwhefihw eoifhowei hdwdwdwdwd fiwqdqwdqw dwdqwdqwdqqwdqwd qdw ehfowiehfoweihfowih
                        </div>
                    </div>
                </div>
                <div class="letter">
                    <div><img class="head" src="1.jpeg"></div>
                    <div class="text">
                        <div class="letter-title" style="display: flex; justify-content: space-between;">
                            <div>
                                Amazing Website!!
                            </div>
                            <div style="font-weight:500;color:gray">
                                9:14
                            </div>
                        </div>
                        <div class="article">ihoeihoiwhefihw eoifhowei hdwdwdwdwd fiwqdqwdqw dwdqwdqwdqqwdqwd qdw ehfowiehfoweihfowih
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
```
## 成果
### web
![image](https://user-images.githubusercontent.com/87524840/160242333-e534d0f3-169f-430f-b640-2df8e4179cd9.png)


