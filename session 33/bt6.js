const jobs = [];

function Job(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
}


function addJob() {
    const id = prompt("Nhập ID công việc mới: ");
    const title = prompt("Nhập tiêu đề công việc mới: ");
    const description = prompt("Nhập mô tả công việc mới: ");
    const completed = prompt("Nhập trạng thái hoàn thành công việc mới: ");

    const newJob = new Job(id, title, description, completed);
    jobs.push(newJob);
}


function printJobs() {
    console.log("Danh sách công việc:");
    jobs.forEach(job => {
        console.log("Id: ", job.id);
        console.log("Tiêu đề: ", job.title);
        console.log("Mô tả công việc: ", job.description);
        console.log("Trạng thái hoàn thành công việc: ", job.completed);
        console.log("");
    });
}


function searchJobById() {
    const searchId = prompt("Nhập ID công việc cần tìm: ");
    const foundJob = jobs.find(job => job.id === searchId);

    if (foundJob) {
        console.log("Công việc được tìm thấy:");
        console.log("Tiêu đề: ", foundJob.title);
    } else {
        console.log("Không tìm thấy công việc có ID là", searchId);
    }
}
let choice;
do {
    choice = prompt(`Chọn một lựa chọn:
    1. Thêm mới công việc
    2. In ra danh sách công việc
    3. Tìm kiếm công việc theo ID
    4. Thoát`);

    switch (choice) {
        case '1':
            addJob();
            break;
        case '2':
            printJobs();
            break;
        case '3':
            searchJobById();
            break;
        case '4':
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== '4');




