# Documentation for R-System User
> The R-System is an idea that comes from the RHP Team members. The system uses Node.js as the core to write API and use Vue.js as a framework for users. The team implemented this system to create a place to store the products that members created. At the same time, Team integrates a system of questioning and answering for everyone, this idea is in part for members to practice skills and also contribute products to the community.
## How to set up this project?
Install all package for server
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Note for using CSS Rbox
Tham khảo các class tương tương tự bootstrap 4, nhưng thay từ gạch ngang (-) thành gạch dưới (_)
Ví dụ: .d-flex chuyển thành .d_flex
Áp dụng cho các module sau: 
**Layout**
Các tên class đã được thay đổi:
.container         =====> .ct
.container-fluid   =====> .ct_f
.row               =====> .r
.col               =====> .c (.col => .c, .col-sm => .c_sm)
.offset            =====> .o
.order             =====> .or
.order-last        =====> .or_l
.order-first       =====> .or_f
.no-gutters        =====> .no_g


**Components**
- Alerts
- Label (Sử tương tự Badge: .badge => .label)
- Breadcrumb
- Buttons and Button group
- Cards
- Collapse
- Dropdowns
- Forms
- Pagination
- Modal ?
- Tooltips (.bs => .brox)

**Utilities**
- Close icon
- Colors
- Display
- Flex
- Float
- Position
- Text
- Show (Tương tự Visibility: .visible => .show, .invisible => .hide)

**Khi sử dụng một class thuộc một trong các module trên đây mà không thấy xuất hiện CSS của nó, bạn hãy kiểm tra lại tên class có đúng không, nếu đúng rồi nhưng vẫn không có thì bạn hãy dùng css để thay cho class đó nha. Trong lúc làm Rbox chúng tôi đã loại bỏ một số class ít khi sử dụng tới.**