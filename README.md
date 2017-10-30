# Not Just One
> HTML item selector that supports multiple items.

> ![gif.gif](gif.gif)

> <i>Built in Gothenburg using coffee, love and Vanilla Javascript</i>

## Example:
> How to implement and use:
> [index.html](index.html)

#### Markup
> This is the markup:

    <div id='multiselect'>
        <select>
            <option value='0'>Potato</option>
            <option value='1'>Salad</option>
            <option value='2'>Cucumber</option>
            <option value='3'>Carrot</option>
        </select>
    <div>

#### Javascript
> This is the javascript:

    var notjustone = new NotJustOne(document.getElementById('multiselect'));
            
    /* selected items by default.
    /* (could for example be fetched from database */
    notjustone.values.push({'value': '0'});
    notjustone.values.push({'value': '2'});

    notjustone.init(); 
