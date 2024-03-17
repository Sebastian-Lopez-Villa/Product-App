class Product {
    constructor (name,price,quantity,date){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }
}

//Producto agregado
class UI {
    showMessage(message, cssClass){
        const element = document.createElement('div');
        element.className = `alert alert-${cssClass} mt-2`;
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);

        //Callbacks
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Capturando los datos de los inputs de entrada
    const ProductName = document.getElementById('name').value;
    const ProductPrice = document.getElementById('price').value;
    const ProductQuantity = document.getElementById('quantity').value;
    const ProductDate = document.getElementById('year').value;

    //Verificar si los campos estan vacios o llenos
    if (ProductName == '' || ProductPrice == '' || ProductQuantity == '' || ProductDate == '')
    {
        const ui= new UI();
        ui.showMessage('Product could not be added', 'danger');
    }
    else 
    {
        // Imprimiendo los datos en consola
        console.log('Product Name:', ProductName);
        console.log('Product Price:', ProductPrice);
        console.log('Product Quantity:', ProductQuantity);
        console.log('Product Date:', ProductDate);

        // Mostrando el mensaje de alerta
        const ui = new UI();
        ui.showMessage('Product added successfully', 'success');
    }
});