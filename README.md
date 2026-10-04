# Portfolio nhóm

Website tĩnh sử dụng HTML, CSS và JavaScript thuần. Không cần cài thư viện hoặc build.

## Xem website

Mở `index.html` trong trình duyệt. Có thể dùng Live Server trong VS Code nếu muốn tự tải lại khi chỉnh sửa.

### Dùng Caddy

Từ thư mục gốc của dự án, chạy:

```powershell
caddy run
```

Sau đó mở `http://localhost:8080`. Caddy dùng file `Caddyfile` để phục vụ toàn bộ website tĩnh, bao gồm các trang trong `members/`, CSS, JavaScript và ảnh trong `assets/`.

Kiểm tra cấu hình trước khi chạy (tùy chọn):

```powershell
caddy validate --config Caddyfile
```

## Phân chia file

| Thành viên | MSSV | Trang cá nhân |
| --- | --- | --- |
| Nguyễn Gia | 24127357 | `members/24127357.html` |
| Huỳnh Thái Hoà | 24127374 | `members/24127374.html` |
| Đỗ Vĩnh Kỳ | 24127434 | `members/24127434.html` |
| Trần Cao Danh | 24127341 | `members/24127341.html` |

- `index.html`: nội dung chung và thẻ thành viên.
- `css/style.css`: giao diện chung và bố cục trang chủ.
- `css/group-tabs.css`: giao diện tab của trang nhóm, bao gồm bố cục responsive.
- `css/member-tabs.css`: bố cục nội dung của các trang thành viên.
- `js/main.js`: thao tác tab trên trang nhóm và tải ảnh cá nhân.
- `assets/`: lưu ảnh; `member-template.txt` là bản mẫu tham khảo, không được website tải vào.

## Cách chỉnh trang cá nhân

1. Mở file HTML tương ứng với MSSV của bạn.
2. Tìm `TODO` và thay nội dung Giới thiệu, Kỹ năng và Hành trình.
3. Dự án chung và liên hệ nằm ở hai khu vực riêng bên dưới thông tin cá nhân.
4. Đặt ảnh cá nhân trong `assets/` và đặt tên bằng MSSV. Website tự ưu tiên `.jpg`, sau đó thử `.png`:

```html
assets/24127357.jpg
assets/24127357.png
```

5. Thêm liên hệ bằng liên kết thật:

```html
<a href="mailto:ban@example.com">ban@example.com</a>
<a href="https://github.com/ten-cua-ban">GitHub của tôi</a>
```

Chỉ cần dùng một trong hai định dạng cho mỗi thành viên. Nếu chưa có ảnh, trang tiếp tục hiển thị chữ viết tắt của tên.

Trong trang thành viên, đường dẫn đến file ở thư mục gốc cần bắt đầu bằng `../`.

## Tùy chỉnh giao diện

Thay các biến ở đầu `css/style.css` để đổi màu toàn bộ website. Nếu chỉ muốn đổi màu trang cá nhân, thêm đoạn sau vào `<head>` sau liên kết CSS:

```html
<style>
  :root { --accent: #7c3aed; --soft: #f3edff; }
</style>
```

Đổi tên nhóm trong `index.html` và phần logo của bốn trang thành viên. Khi cập nhật ảnh hoặc mô tả trên trang cá nhân, hãy cập nhật thẻ tương ứng trên trang chủ nếu cần.

Thông tin hiện có chỉ gồm họ tên và MSSV. Vai trò, kỹ năng, liên hệ, dự án cá nhân và mốc học tập là nội dung mẫu để từng thành viên tự bổ sung.

Trên trang chủ, Giới thiệu nhóm, Thành viên, Dự án chung và Liên hệ là bốn tab riêng. Trên điện thoại, hàng tab có thể vuốt ngang. Tab hỗ trợ phím mũi tên trái/phải, Home và End; liên kết có hash sẽ mở đúng tab tương ứng.

Trước khi chia sẻ, kiểm tra liên kết tới bốn thành viên, nút trở về nhóm, thao tác chuyển tab và giao diện trên màn hình nhỏ.
