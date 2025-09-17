# TodoX - MERN Stack Todo App

TodoX là ứng dụng quản lý công việc (todo list) được xây dựng với MERN Stack (MongoDB, Express, React, Node.js). Dự án hỗ trợ phân trang, lọc theo ngày/tháng/tuần/tất cả, giao diện hiện đại với Tailwind CSS và shadcn UI.

## Tính năng

- Thêm, sửa, xóa công việc
- Đánh dấu hoàn thành công việc
- Lọc công việc theo trạng thái (active/completed)
- Lọc theo ngày, tuần, tháng, tất cả
- Phân trang danh sách công việc
- Thông báo trạng thái thao tác (toast)
- Giao diện responsive, hiện đại

## Công nghệ sử dụng

- **Frontend:** React, Vite, Tailwind CSS, shadcn UI
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Khác:** Axios, Lucide React Icons

## Cấu trúc thư mục

```
todoX/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── package.json
└── README.md
```

## Hướng dẫn cài đặt

### 1. Clone repo

```bash
git clone https://github.com/Ndtgithub3333/todoX.git
cd todox
```

### 2. Cài đặt dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3. Cấu hình môi trường

Tạo file `.env` trong thư mục `backend/` và thêm thông tin kết nối MongoDB:

```
MONGODB_URI=mongodb://localhost:27017/todox
PORT=5001
```

### 4. Chạy backend

```bash
npm run start --prefix backend
```

### 5. Chạy frontend

```bash
npm run dev --prefix frontend
```

Truy cập [http://localhost:5173](http://localhost:5173) để sử dụng ứng dụng.

## Deploy

Bạn có thể deploy backend lên Render.com, Railway, hoặc bất kỳ dịch vụ cloud nào hỗ trợ Node.js và MongoDB. Frontend có thể deploy lên Vercel, Netlify, hoặc Render.com.

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy tạo issue hoặc pull request nếu bạn muốn cải thiện dự án.

## License

ISC

---

**Tác giả:**  
Nguyen Duc Thang
