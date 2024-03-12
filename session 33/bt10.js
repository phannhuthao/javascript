const Product = [];
const Employee = [];
const Invoices = [];

function product(id, name, price, expiryDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expiryDate = expiryDate;
}

function employee(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

function invoice(products, quantity) {
    this.products = products;
    this.quantity = quantity;
}

function addProduct() {
    const id = prompt("Nhập id sản phẩm: ");
    const name = prompt("Nhập tên sản phẩm: ");
    const price = prompt("Nhập giá sản phẩm: ");
    const expiryDate = prompt("Nhập hạn sử dụng (dd/mm/yyyy): ");

    const newproduct = new product(id, name, price, expiryDate);
    Product.push(newproduct);
}

function addEmployee() {
    const id = prompt("Nhập id nhân viên: ");
    const name = prompt("Nhập tên nhân viên: ");
    const age = prompt("Nhập tuổi nhân viên: ");

    const newemployee = new employee(id, name, age);
    Employee.push(newemployee);
}

function addInvoice() {
    const products = [];
    const quantity = parseInt(prompt("Nhập số lượng sản phẩm trong hóa đơn: "));

    for (let i = 0; i < quantity; i++) {
        const productId = prompt(`Nhập id sản phẩm #${i + 1}: `);
        const product = Product.find(prod => prod.id === productId);
        if (product) {
            products.push(product);
        } else {
            console.log(`Không tìm thấy sản phẩm có id ${productId}`);
        }
    }
    const newinvoice = new invoice(products, quantity);
    Invoices.push(newinvoice);
}

function printProduct() {
    console.log("Danh sách hóa đơn: ");
    Product.forEach(product => {
        console.log("id: ",product.id);
        console.log("name: ",product.name);
        console.log("price: ",product.price);
    })
}

function printEmployee() {
    console.log("Danh sách nhân viên: ");
    Employee.forEach(employee => {
        console.log("id: ",employee.id);
        console.log("name: ",employee.name);
        console.log("age: ",employee.age);
    })
}

function printOverview() {
    console.log("Thông tin tổng quan cửa hàng:");
    console.log(`Số lượng sản phẩm: ${Product.length}`);
    console.log(`Số lượng nhân viên: ${Employee.length}`);

    const totalRevenue = Invoices.reduce((acc, invoice) => {
        const invoiceTotal = invoice.products.reduce((total, product) => total + parseInt(product.price), 0);
        return acc + invoiceTotal;
    }, 0);
    console.log(`Doanh thu: ${totalRevenue}`);
}

function checkExpiry() {
    const today = new Date();
    console.log("Sản phẩm sắp hết hạn sử dụng:");
    Product.forEach(product => {
        const expiryDate = new Date(product.expiryDate);
        const timeDiff = expiryDate.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (daysDiff <= 7 && daysDiff >= 0) {
            console.log(`${product.name} - Hết hạn sau ${daysDiff} ngày`);
        }
    });
}

let choice;
do {
    choice = prompt(`Chọn một lựa chọn:
    1. Thêm sản phẩm mới
    2. In ra danh sách sản phẩm
    3. Thêm nhân viên mới
    4. In ra danh sách nhân viên
    5. Thêm hóa đơn mới 
    6. In ra thông tin tổng quan cửa hàng
    7. Kiểm tra sản phẩm sắp hết hạn sử dụng`);

    switch(choice) {
        case '1':
            addProduct();
            break;
        case '2':
            printProduct();
            break;
        case '3':
            addEmployee();
            break;
        case '4':
            printEmployee();
            break;
        case '5':
            addInvoice();
            break;
        case '6':
            printOverview();
            break;
        case '7':
            checkExpiry();
            break;
        case '8':
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== '8');