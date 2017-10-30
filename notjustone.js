var NotJustOne = function(element) {
    var _this = this;
    _this.values = [];
    _this.id = element.getAttribute('id');
    _this.element = element;
    _this.element.className += ' not-just-one';
    _this.selectElement = _this.element.querySelector('select');
    _this.inputList = document.createElement('div');
    _this.inputList.setAttribute('class', 'input-list');
    _this.element.appendChild(_this.inputList);
    _this.titleOption = document.createElement('option');
    _this.titleOption.value = '';
    _this.titleOption.innerHTML = '--- Select ---';
    _this.titleOption.setAttribute('selected', true);
    _this.selectElement.insertBefore(_this.titleOption,
        _this.selectElement.querySelector('option'));

    
    _this.selectElement.addEventListener('change', function(e) {
        _this.addInput(this.options[this.selectedIndex].value,
            this.options[this.selectedIndex].innerHTML);
    });

    _this.addInput = function(value, key) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.value = value;
        input.name = _this.id;
        input.setAttribute('data-key', key);

        var graphicalElem = document.createElement('div');
        graphicalElem.setAttribute('class', 'graphicalElem');
        graphicalElem.setAttribute('data-value', value);
        graphicalElem.setAttribute('data-key', key);
        graphicalElem.innerHTML = key;

        graphicalElem.addEventListener('click', function(e) {
            var optionElement = document.createElement('option');
            optionElement.value = this.getAttribute('data-value');
            optionElement.innerHTML = this.getAttribute('data-key');

            _this.selectElement.appendChild(optionElement);
            _this.inputList.removeChild(_this.inputList.querySelector(
            'input[value="'+this.getAttribute('data-value')+'"]'));

            _this.inputList.removeChild(this);
        });

        _this.inputList.appendChild(input);
        _this.inputList.appendChild(graphicalElem);

        
        var opts = _this.selectElement.querySelectorAll('option');
        for (var i = 0; i < opts.length; i++)
            if (opts[i].value == value)
                _this.selectElement.removeChild(opts[i]);
    };

    _this.getOptByValue = function(value) {
        var opts = this.selectElement.querySelectorAll('option');
        for (var i = 0; i < opts.length; i++)
            if ("" + opts[i].value == value)
                return opts[i];
    }

    _this.init = function() {
        for (var i = 0; i < _this.values.length; i++) {
            if (typeof _this.values[i]['name'] == 'undefined')
                _this.values[i]['name'] = _this.getOptByValue(
                "" + _this.values[i]['value']).innerHTML;

            _this.addInput(_this.values[i]['value'], _this.values[i]['name']);
        }
    };
};
