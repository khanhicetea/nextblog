---
layout: post
title: "Tại sao iOS & macOS lại mượt hơn Android & Windows ?"
description: "Và bài học rút ra về hiệu suất của tổ chức - doanh nghiệp"
date: 2021-10-21T21:00:00+07:00
tags: ["tech", "why", "performance", "idea", "system", "teamwork"]
cover: "/static/images/2021/10/ios-better-android.png"
---

Có lẽ đó là câu hỏi hoặc là câu khẳng định chắc nịt của nhiều người khi bàn đến chủ đề công nghệ này. Nhất là khi bạn đang phải chọn mua một chiếc điện thoại hoặc một chiếc laptop mới.

Vậy thì tại sao lại có nhận định trên ?

CÂU TRẢ LỜI NGẮN GỌN LÀ **SỰ TƯƠNG THÍCH**

Để hiểu hơn lý do, chúng ta sẽ đi qua sơ phần khái niệm Phần Cứng và Phần Mềm

## PHẦN CỨNG & PHẦN MỀM

Cơ bản mà nói thì một thiết bị điện tử bao gồm 2 phần cơ bản nhất để vận hành :

- Phần cứng (Hardware) : CPU, RAM, mạch điều khiển, cổng kết nối, thiết bị gắn thêm, .. hay những cái mà ta có thể nhìn thấy được, cầm được và chọi được 😄
- Phần mềm (Software) : là những chương trình được các lập trình viên viết ra dựa theo một ngôn ngữ nhất định rồi được biên dịch ra ngôn ngữ máy rồi nạp vào trong Hardware để vận hành, điều hướng thông tin, tín hiệu điện liên kết giữa các thiết bị Hardware với nhau.

Phần mềm sẽ lại chia làm 3 loại chính :
- Các chương trình người dùng : như các Apps trên điện thoại, Office trên máy tính
- Driver : như một cuốn sách hướng dẫn cách vận hành phần cứng
- Hệ Điều Hành : kết nối - vận hành phần cứng thông qua các cuốn sách hướng dẫn (drivers) ở trên, và trao cho các Chương trình người dùng các cổng kết nối (API) để thao tác - điều khiển phần cứng

Sơ đồ vận hành cơ bản của 1 kiến trúc máy tính điện tử sẽ giống như bên dưới

![System Architectures](/static/images/2021/10/software-architectures.svg)

## SỰ TƯƠNG THÍCH

Theo sơ đồ bên trên ta sẽ thấy Hệ Điều Hành đóng vai trò rất quan trọng. Nó giống như 1 ông quản đốc, kết nối tất cả các công nhân (hardwares) lại với nhau theo những quy trình có sẵn (drivers) và đảm bảo rằng việc cấp phát tài nguyên tính toán, dữ liệu được trung chuyển đúng nơi đúng chỗ.

iOS, macOS, Android, Windows là những hệ điều hành như vậy, và đó là nhân vật chính của bài viết hôm nay.

Vậy tại sao tôi lại đề cập đến SỰ TƯƠNG THÍCH ?

Sự Tương Thích về cơ bản là 2 bên TƯƠNG quan THÍCH (làm việc với) nhau. Nếu bạn nhìn vào sơ đồ bên trên sẽ thấy các phần trên dưới kết nối với nhau bằng mũi tên 2 chiều thể hiện tự tương tác 2 chiều về thông tin, tín hiệu. Vì thế đòi hỏi là 2 phần phải HIỂU được nhau & THÍCH làm việc với nhau để đạt được hiệu suất tốt nhất.

Nói cách khác :

- Nếu bạn có 1 phần cứng thật mới, mạnh mẽ, nhưng hệ điều hành lại cũ hoặc không có drivers để hướng dẫn HĐH cách hiểu được phần cứng đó thì kết quả là phần cứng không vận hành đúng công suất tối đa theo thiết kế, hoặc thậm chí tịt ngòi.
- Hoặc nếu bạn có một loạt phần cứng cũ, nhưng lại chạy 1 phiên bản Hệ Điều Hành mới đã được lược bỏ bớt những cuốn sách hướng dẫn (drivers) cũ kĩ, thì dẫn đến là phần cứng cũ đó cũng sẽ không hoạt động được.
- Và ngược lại, nếu Hệ Điều Hành của bạn có quá nhiều drivers để sẵn sàng hỗ trợ cho 1,000 thiết bị khác nhau, trong khi bạn chỉ dùng 5 / 1000 đó, sự thừa thải cũng sẽ làm máy chạy chậm hơn. Trường hợp này chính là Android và Windows, do đây là 2 phần mềm phải hỗ trợ càng nhiều thiết bị càng tốt, nên sự dư thừa dẫn đến giảm hiệu suất.

> Tóm lại : ĐỂ THIẾT BỊ CHẠY ĐƯỢC VÀ CHẠY TỐT THÌ CÁC THÀNH PHẦN PHẢI TƯƠNG THÍCH NHAU !

*Gần đây Windows 11 ra mắt, rất nhiều người nâng cấp lên quá sớm để trải nghiệm nhưng lại nhận cái kết đắng là thất vọng vì hiệu suất, thiết bị không chạy hoặc thậm chí hư luôn máy. Đây là lời giải thích cho việc bạn nên đợi nhà sản xuất máy tính đang sử dụng cập nhật các phiên bản drivers mới tương thích với Windows 11.*

## SỰ LỰA CHỌN THỊ TRƯỜNG - CHIẾN LƯỢC SẢN PHẨM

Apple từ lâu đã chọn chiến lược phát triển sản phẩm và xây dựng hệ sinh thái cho riêng mình. Nghĩa là họ tự phát triển từ thiết bị phần cứng đến hệ điều hành và chương trình phần mềm.

Hay nói cách khác là Apple làm chủ nguyên cái sơ đồ bên trên, từ trên xuống dưới. Họ được quyền thiết kế, chỉnh sửa mọi thứ thuộc hệ sinh thái của mình. Và nếu bạn để ý rằng mỗi năm Apple chỉ ra đâu đó tầm 5-10 sản phẩm công nghệ, chạy trên 2-3 hệ điều hành xuyên suốt của hãng. Nếu tính bằng bài toán tổ hợp đơn giản, bạn sẽ thấy có từ 10 - 30 biến thể sản phẩm + hệ điều hành mà Apple phải quan tâm xây dựng.

Còn nếu so sánh với Windows & Android, Microsoft và Google đã chọn lựa thị trường là hỗ trợ rất nhiều các hãng sản xuất khác nhau trên toàn thế giới. Ví dụ có 10,000 nhà SX điện thoại - máy tính, mỗi năm họ sản xuất trung bình 5 mẫu sản phẩm => vậy là sẽ có tầm 50,000 tổ hợp biến thể mà Android và Windows phải cố gắng TƯƠNG THÍCH.

Phép so sánh này tương tự như bạn lập gia đình, có 3 đứa con sẽ có đủ thời gian, công sức, tài chính & tình yêu thương cho 3 đứa. Câu chuyện sẽ khác hoàn toàn nếu bạn có 10,000 hay 100,000 đứa con (cho rằng bạn đủ điều kiện kinh tế như hoàng thượng thời xưa :D)

Nói tới đây, có thể có người cho rằng Microsoft và Google chọn sai hướng, tại sao không làm như Apple ? Câu trả lời là do SỰ LỰA CHỌN, họ chọn số lượng (% market share) thay vì chất lượng như APPLE (chưa kể APPLE làm quá tốt về sản phẩm, việc lao đầu vào cạnh tranh là có thể lại là điều dại dột).

## SỰ TƯƠNG THÍCH TRONG VẬN HÀNH TỔ CHỨC - ĐỘI NHÓM

Tương tự hệ thống máy tính, hệ thống của tổ chức - đội nhóm cũng bao gồm các thành phần đa dạng đòi hỏi SỰ TƯƠNG THÍCH để làm việc với nhau hiệu quả dẫn đến hiệu suất toàn bộ hệ thống sẽ hiệu quả.

Nếu tổ chức không xây dựng mọi thứ từ đầu như Nhân Sự, Quy Trình, Máy Móc, Thiết Bị thì cách tốt nhất mà tổ chức nên làm là tìm ra cách TƯƠNG THÍCH các thành phần hiện tại lại với nhau.

- Không phải tuyển 1 con người TÀI NĂNG về là có thể kéo hiệu suất của cả hệ thống cũ kĩ được.
- Lại càng không phải mua sắm 1 thiết bị công nghệ tối tân về là có thể nâng cao được hiệu suất.
- Và nhất là không phải cứ áp dụng quy trình mới của các công ty - tổ chức to là sẽ cải thiện được.

*Nói như vậy không có nghĩa là không chấp nhận cái tốt cái mới đưa vào hệ thống, mà là để cân nhắc tính đồng bộ của các thành phần tương tác với nhau, sau đó đào tạo để không diễn ra sự lệch pha quá rõ rệt.*

Các thành phần trong hệ thống sẽ có khả năng khác nhau, vai trò khác nhau, độ tương thích khác nhau. Và vai trò quan trọng nhất của người làm lãnh đạo là tìm ra được điểm kết nối và cách để kết nối các thành phần lại với nhau thành 1 thể HỆ THỐNG DUY NHẤT cùng vận hành cho 1 MỤC TIÊU CAO NHẤT.

---

TIL NEXT TIME ! ;)