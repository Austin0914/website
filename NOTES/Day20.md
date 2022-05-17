# Day20
## Media Query
```css=
@media screen and (max-width:){
    <!-- blablabla -->
}
```
## bootstrap
<https://getbootstrap.com/>

## user snippet in vscode

## free animation and SVG
<https://undraw.co/illustrations>

## Html bookmark
use id to contect

## CSS Scroll Behavior
```css=
html{
    scroll-behavior:smooth;
}
```
## SASS
* Nested CSS Syntax

```css=
nav{
   title{

   } 
}
```

* Varibles

```css=
$themeColor: lightblue;

background-color:&themeColor;
```

* self ampersand

```css=
nav{
   title{

   } 
   &:hover{

   }
}
```

* import concept

```css=
@import src(./link)
```

* mixin function

```css=
@mixin flexbox(&dir){
    display: flex;
    flex-direction: &dir;
}
div nav{
    @include flexbox(column);
}
```
