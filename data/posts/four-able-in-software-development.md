---
layout: post
title: "Bốn chữ Có trong ngành Phát Triển Phần Mềm"
description: "Hiểu chữ có để ngẫm lại chữ cần"
date: 2021-11-29T21:00:00+07:00
tags: ["development", "software", "problem"]
---

Đúng như vậy, thay vì trong tình yêu có [Bốn Chữ Lắm](https://www.youtube.com/watch?v=i724lraI93s) thì trong ngành Phần Mềm lại có Bốn Chữ Có (có ở đây dịch là có thể hay hậu tố -able). Các chữ CÓ này theo trình tự như sau :

## DOABLE (Có làm được không - Có khả thi không)

Đầu tiên là tính khả thi, đây cũng được xem là bước quan trọng nhất trong việc giải quyết các vấn đề thực tế cuộc sống mà ở đó Phần Mềm chỉ đóng vai trò là công cụ hỗ trợ con người.

Việc đánh giá được một vấn đề có giải quyết được hay không hoặc một giải pháp được đưa ra có khả thi về mặt phát triển phần mềm hay không; là điều quan trọng nhất đối với góc nhìn của Business.

Hãy tưởng tượng bạn là 1 CEO, chuyên môn & mối quan tâm của bạn chỉ là chuyện kinh doanh làm sao ra tiền, bạn chỉ xem Software như 1 cái hộp đen (thứ mà bạn không biết và không cần biết). Nhưng để làm ra nhiều tiền thì bạn lại cần cái Blackbox đó để vận hành hệ thống kinh doanh, vậy thì lúc đó bạn phải cần 1 người mà ở đó hiểu tổng quát điều bạn nói và hiểu tổng quát cái Blackbox đó, để khi bạn đưa ra 1 vấn đề, 1 giải pháp thì bạn có ngay câu trả lời điều đó có khả thi không để rót vốn - thời gian vào làm.

Nếu trong TEAM của các công ty Software người ta hay gọi là Business Analyst.

## RUNNABLE (Có chạy được không)

Okay, tiếp đến là sau khi thuyết phục được CEO rót tiền vào dự án khả thi ở trên, chúng ta cần biến "lời hứa" đó thành hiện thực. Đây là công việc xây dựng, lập trình phần mềm để làm sao máy tính hiểu được và chạy được (và chạy đúng nha).

Ở giai đoạn này là dành cho các Junior Developer hoặc Senior Developer (nếu project phức tạp hơn). Mục tiêu chính của giai đoạn này là "Chạy Được" nên không nên quá kỳ vọng nhiều, chỉ nên kỳ vọng nó chạy đúng logic.

## MAINTAINABLE (Có bảo trì được không)

Tiếp đến là giai đoạn mà có thể nói 67% developer bỏ qua vì nghĩ rằng tốn thời gian hoặc là chưa có đủ kinh nghiệm để thực hiện giai đoạn này. "Bảo trì được" ở đây hiểu khi một developer mới vào là có thể tự đọc mã nguồn, mô tả rồi "hiểu được", "sửa được", "chuyển giao được" mà không mất quá nhiều thời gian.

Để hoàn thành bước này, thường thì cần các Tech Lead hoặc Senior Developer lâu năm, thiết kế 1 tiêu chuẩn về mã nguồn và các quy tắc Refactoring. Và quan trọng nhất là phải có AUTO TESTING.

## SCALABLE (Có nhân rộng - phình ra được không)

Cuối cùng là tầng cao nhất, tầng về nhân rộng hay phục vụ khi hệ thống có nhu cầu phình ra về cả chiều rộng (nhiều tính năng, nhiều dữ liệu) lẫn chiều sâu (phức tạp hơn, chạy nhanh hơn).

Ví dụ : Bạn có 1 trang web bán hàng nhỏ hôm nay sẽ khác hoàn toàn với bạn ở tương lai sở hữu 1 sàn TMĐT ở đó cả trăm vạn người mua bán. Làm thế nào khi trở nên to lớn hơn luôn là bài toán khó nhất và đau đầu nhất.

Thường thì các vị trí như Systems Architect sẽ đảm nhận thiết kế các bộ khung tối quan trọng trong hệ thống phần mềm.

## Cần Cái Gì Thì Hãy Có Cái Đó

Quan trọng nhất của từng vị trí hoặc từng dự án, phải xác định rõ bản thân mình đang ở đâu và dự án cần gì ?

- Bạn cần thẩm định giá, suy nghĩ nhiều cách giải quyết vấn đề thực tế bằng Tech rồi chọn lọc => Chỉ nên dừng ở Doable là được, không nên quá sa đà làm 1 cái DEMO
- Bạn cần 1 cái mini-tool để auto công việc lặp đi lặp lại => Chỉ cần nó dừng ở Runnable
- Bạn cần 1 hệ thống CRM nội bộ công ty => Chỉ cần nó dừng ở Maintainable
- Chỉ khi bạn cần 1 hệ thống cho cả trăm ngàn - triệu người dùng tương tác với nhau, hãy nghĩ tới Scalable. (Dưới mức này, đơn giản hãy request đổ tiền vào mà scale hệ thống theo chiều rộng - nghĩa là mua thêm tài nguyên).

TIL NEXT TIME ! ;)