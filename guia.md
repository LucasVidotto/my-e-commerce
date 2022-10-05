- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

/_Basic structure of slider_/
.container-wrapper {
/_ margin-top: 2rem;
margin-bottom: 1rem;
margin-left: auto;
margin-right: auto; _/
width: 80rem;
height: 40rem;
/_ position: absolute; _/
/_ transform: translate(-50%, -50%); _/
/_ top: 85%;
left: 50%; _/
overflow: hidden;
border: 10px solid #ffffff;
border-radius: 8px;
box-shadow: -4px 10px 20px black;
}

/_Area of images_/
.wrapper {
width: 80rem;
display: flex;
animation: slide 6s infinite;
}

img {
width: 100%;
}
/_Animation activated by keyframes_/
@keyframes slide {
0% {
transform: translateX(0);
}
25% {
transform: translateX(0);
}
30% {
transform: translateX(-100%);
}
50% {
transform: translateX(-100%);
}
55% {
transform: translateX(-200%);
}
75% {
transform: translateX(-200%);
}
80% {
transform: translateX(-300%);
}
100% {
transform: translateX(-300%);
}
}
