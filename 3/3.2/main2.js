(function () {


    area.addEventListener('click', function (e) {
        var el = document.createElement('div');
        // var target = this;
        var target = e.target;
        var color = newColor.value;
        el.classList.add('figure');
        el.style.top = e.offsetY + 'px';
        el.style.left = e.offsetX + 'px';
        el.style.backgroundColor = color;
        var figureInput = document.querySelectorAll('[name="figure"]');
        for (var i = 0; i < figureInput.length; i++) {
            if (figureInput[i].checked) {
                el.classList.add(figureInput[i].value);
            }
        }
        target.appendChild(el);

    })

}());