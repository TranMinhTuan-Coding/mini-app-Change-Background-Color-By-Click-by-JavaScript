const changeColorButton=document.querySelector('.change-color-button');
const mainBackground=document.querySelector('.main-background');
const colorName=document.querySelector('.color-name');

changeColorButton.addEventListener('click', function(){
    var backgroundColorsArray = [
        'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua',
        'aliceblue', 'antiquewhite', 'beige', 'brown', 'burlywood', 'chartreuse', 'crimson', 'darkolivegreen', 'deeppink', 'greenyellow', 'lawngreen'
    ];

    // Bài toán lấy ra 1 phần tử ngẫu nhiên trong mảng cho trước:
    function randomColorsIndex(x) {
        return Math.floor(Math.random() * x.length)
    };

    mainBackground.style.backgroundColor=backgroundColorsArray[randomColorsIndex(backgroundColorsArray)];
    colorName.textContent = mainBackground.style.backgroundColor;
});