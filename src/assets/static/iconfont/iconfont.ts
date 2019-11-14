import { createGlobalStyle } from "styled-components";

export const FontStyle = createGlobalStyle`

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1540547937411'); /* IE9*/
    src: url('./iconfont.eot?t=1540547937411#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXYAAsAAAAACGwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8f0qpY21hcAAAAYAAAABqAAABstNEnfZnbHlmAAAB7AAAAd4AAAIIsquUhGhlYWQAAAPMAAAALwAAADYVEVC+aGhlYQAAA/wAAAAcAAAAJAneBYZobXR4AAAEGAAAABEAAAAUFgAAAGxvY2EAAAQsAAAADAAAAAwAyAF8bWF4cAAABDgAAAAfAAAAIAETAFduYW1lAAAEWAAAAUUAAAJtPlT+fXBvc3QAAAWgAAAAOAAAAEkNFUyReJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkSWOcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecbwIZG7438AQw9zA0AgUZgTJAQAFIgyleJztkcENgDAIRR9tNaZxFOMMruDVGTw5NHGLCsWDQ/jJa8oPcABgALKxGAXkQnCd5kr3M7X7hc3yykQi6aSrHvfeGnz/r8TqInx6sl6bJSO/5v5ub1Z8e4FfQdfANoYegdfce4A8DHwYnwAAeJxjYGJg+N/ADIQMAgyKDAyM7HKMonyM7Kbs4qZ2jOYmavpgroiYuLkeI0hElOlPlJ4B89aOhoZ9f1ld/oBJB4gQ094ovRLHjq3MDg0NDqx/90UvaobSDjAJBpB99cz/gfaJMSgxMLCyKakzAi3QY1QHGi7HKC7Cxs4oJgISAnKAQnqMzN+4JTn/fbfo9N3xhZX187Ztn1msjRk5OP9umH2WheXsbDBZzsnJyKprwMj6YfOW96ys77cETrT695dbink1y6mZM0+ysJycOfMUAxAwgvzLwgC0n4OBQVSIQZWNiV2ZOZ7xL+OS/T86DxxoYLRhWiGz7R+fxL8DIPUsIPVsIPXsDFwMZgxeQDczKzIrMxpzMimyAsNFGRhEQKTMx6ispMdkamJmDoLGpiZqykrsbOzqQJ6xkZgoO5DHxyQqIsdkbASUt2M0ZU6u+LulVolxuwbjsn+u/x4wmTMLc7DIMTOyMDEyssj0Bmj4Oqp5mVrYWloWlcZbmBppCupZmVsVNsmnWlnapDgoWzjLeRrqy8uK5zAq/HvA/OaPCPONv8krVEKkBYW0xERVIsPF9N0M3MLEJNjZGE1yU0VFVSQ0REWKq/3Y2DU87XVtVQWlJXW0kg2B3gQA3oSCGwAAeJxjYGRgYADion8VP+P5bb4ycLMwgMD1n2yJCPp/PRsDcwOQy8HABBIFAE+OCxEAeJxjYGRgYG7438AQw8YAAkCSkQEVsAIAR2cCcnicY2FgYGBBwmxADAABDAAXAAAAAAAAAAA4AHgAkAEEeJxjYGRgYGBl8GZgYQABJiDmAkIGhv9gPgMAEIABawB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYGluCAzjystMS89JTErMy+dTbewNDMnh8kxkYEBAJD0CPo=') format('woff'),
    url('./iconfont.ttf?t=1540547937411') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1540547937411#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
