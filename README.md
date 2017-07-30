# idea-jquery-templates
jQuery live templates for IntelliJ IDEA and Webstorm.

### Installation
Download `settings.jar` and import it using **File->Import Settings**.

### Available templates
List with available templates abbreviations:

* `jqapp` - Generates a jquery app module (_for .vue files_)
* `jqpluginp` - Creates a prototypical jQuery plugin

#### jqapp
Entry point for you jQuery app where you can add appwide configurations and methods.

#### jqpluginp
Creates a prototypical jQuery plugin with a controller. The controller will be exposed in `data`.  
If you need to call a method you can either get the controller or use `data`.

Example:
```js
var $example = $('#example').example();
var exampleCtrl = $example.data('example');

exampleCtrl.demo(1); // Calls method on the controller
$example.data('demo', 1); // Calls the same method on the controller
```