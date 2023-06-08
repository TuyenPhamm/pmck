import React from 'react';
import './becomteacher.css';
const Becometeacher = () => {
    return (
        <div className='p-6 my-[70px]'>
            <div className="bg-[url('https://s.udemycdn.com/teaching/billboard-desktop-2x-v4.jpg')] bg-no-repeat bg-contain h-screen ">
                <div className='w-[448px] pl-8 text-left my-auto'>
                    <h1 className='text-5xl font-semibold'>Hãy đến giảng dạy với chúng tôi</h1>
                    <p className='text-lg pt-2'>Trở thành giảng viên và thay đổi cuộc sống của mọi người,bao gồm cả cuộc sống của chính bạn</p>
                    <button className='bg-[#1c1d1f] w-[100%] py-4  mt-7 '>
                        <a className='text-white font-semibold'>Bắt đầu</a>
                    </button>
                </div>
            </div>
            <div className='px-6 py-20 '>
                <h2 className='text-[32px] font-semibold'>Có quá nhiều lý do để bắt đầu</h2>
                <div className='grid grid-cols-3'>
                    <div className='grid-cols-1 px-2'>
                        <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg'></img>
                        <h3 className='text-[16px] font-semibold'>Giảng dạy theo cách của bạn</h3>
                        <p className='text-[14px]'> Xuất bản khóa học mong muốn, theo cách mong muốn và bạn luôn có quyền kiểm soát nội dung của riêng mình.
                        </p>
                    </div>
                    <div className='grid-cols-1 px-2'>
                        <img className='mx-auto' src="https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg"></img>
                        <h3 className='text-[16px] font-semibold'>Truyền cảm hứng cho học viên </h3>
                        <p className='text-[14px]'>Dạy những gì bạn biết và giúp học viên khám phá sở thích, tiếp thu kỹ năng mới và thăng tiến trong sự nghiệp của họ. </p>
                    </div>
                    <div className='grid-cols-1 px-2'>
                        <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg'></img>
                        <h3 className='text-[16px] font-semibold'>Nhận phần thưởng</h3>
                        <p className='text-[14px]'>Mở rộng mạng lưới nghề nghiệp, xây dựng kiến thức chuyên môn và kiếm thu nhập từ mỗi lượt ghi danh có trả phí.</p>
                    </div>
                </div>
            </div>

            <div className='flex space-x-12 justify-center flex-wrap  bg-[#5624d0]'>
                <div className='py-4 px-6  text-white font-semibold'>
                    <div className='text-[28px]'>
                        <span> 57</span>
                        M
                    </div>
                    <span className='text-[14px]'> Học viên</span>
                </div>
                <div className='py-4 px-6 text-white font-semibold'>
                    <div className='text-[28px]'>
                        Hơn
                        <span> 75</span>
                    </div>
                    <span className='text-[14px]'> Ngôn ngữ</span>
                </div>
                <div className='py-4 px-6 text-white font-semibold'>
                    <div className='text-[28px]'>
                        <span> 733</span>
                        M
                    </div>
                    <span className='text-[14px]'> Số lượt ghi danh</span>
                </div>
                <div className='py-4 px-6 text-white font-semibold'>
                    <div className='text-[28px]'>
                        Hơn
                        <span> 180</span>
                    </div>
                    <span className='text-[14px]'> Quốc gia</span>
                </div>
                <div className='py-4 px-6 text-white font-semibold'>
                    <div className='text-[28px]'>
                        Hơn
                        <span> 13400</span>
                    </div>
                    <span className='text-[14px]'>Khách hàng doanh nghiệp</span>
                </div>
            </div>

            <div className='px-6 py-[88px]'>
                <div className='text-[32px] font-semibold'>Cách thức bắt đầu</div>
                <div className='flex justify-center items-center text-[18px] my-5'>
                    <div className='px-5 py-2 font-semibold'>Lên kế hoạch cho khung chương trình</div>
                    <div className='px-5 py-2 font-semibold'>Quay video</div>
                    <div className='px-5 py-2 font-semibold'>Ra mắt khóa học</div>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-5 text-left leading-loose pt-4'>
                        <div className='text-[16px]  pt-8'>
                            <p>
                                Hãy bắt đầu với niềm đam mê và kiến thức của bạn. Sau đó, bạn có
                                thể chọn một chủ đề triển vọng với sự trợ giúp của công cụ Thông
                                tin chi tiết về thị trường.
                            </p>
                            <p>
                                Bạn là người quyết định phương pháp cũng như kiến thức giảng dạy
                            </p>
                            <h4 className=' font-semibold'>Cách chúng tôi giúp bạn</h4>
                            <p>
                                Chúng tôi cung cấp nhiều tài nguyên về cách tạo khóa học đầu tiên.
                                Ngoài ra, bảng điều khiển của giảng viên và trang khung chương
                                trình của chúng tôi sẽ giúp bạn tổ chức khóa học hiệu quả.
                            </p>
                        </div>
                        <img src='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg'></img>
                    </div>
                    <div className='grid grid-cols-2 gap-5 text-left leading-loose pt-4'>
                        <div className='pt-8'>
                            <p>
                                Sử dụng các công cụ cơ bản như điện thoại thông minh hoặc camera
                                DSLR. Thêm một chiếc micrô tốt là bạn đã sẵn sàng bắt đầu.
                            </p>
                            <p>
                                Nếu không thích xuất hiện trên camera, bạn chỉ cần ghi lại màn
                                hình của mình. Dù với cách nào thì bạn cũng nên quay video dài từ
                                2 tiếng trở lên cho khóa học có trả phí.
                            </p>
                            <h4>Cách chúng tôi giúp bạn</h4>
                            <p>
                                Nhóm Hỗ trợ của chúng tôi luôn sẵn sàng trợ giúp bạn trong suốt
                                quá trình thực hiện và đưa ra phản hồi về video thử nghiệm.
                            </p>
                        </div>
                        <img src='https://s.udemycdn.com/teaching/record-your-video-v3.jpg'></img>
                    </div>
                    <div className='grid grid-cols-2 gap-5 text-left leading-loose pt-4'>
                        <div className='pt-8'>
                            <p>
                                Thu thập các xếp hạng và đánh giá đầu tiên bằng cách quảng bá khóa
                                học trên mạng xã hội và mạng lưới nghề nghiệp của bạn.
                            </p>
                            <p>
                                Người dùng sẽ dễ dàng khám phá khóa học của bạn trên cổng khóa học
                                của chúng tôi. Đây là nơi bạn kiếm được doanh thu từ mỗi lượt ghi
                                danh có trả phí.
                            </p>
                            <h4>Cách chúng tôi giúp bạn</h4>
                            <p>
                                Công cụ coupon tùy chỉnh cho phép bạn đưa ra ưu đãi thu hút học
                                viên ghi danh, đồng thời các chương trình quảng cáo toàn cầu của
                                chúng tôi giúp thúc đẩy lưu lượng truy cập vào khóa học. Thậm chí
                                các khóa học còn có nhiều cơ hội được chúng tôi lựa chọn cho tuyển
                                tập Udemy Business.
                            </p>
                        </div>
                        <img src='https://s.udemycdn.com/teaching/launch-your-course-v3.jpg'></img>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-[32px] font-semibold'>Trở thành giảng viên ngay hôm nay</h2>
                <p className='text-[18px] mt-3 '>Tham gia một trong những thị trường học tập trực tuyến lớn nhất thế giới.</p>
                <button className='bg-[#1c1d1f] py-[10px] px-[60px] mt-6'>
                    <a className='text-[14px] text-white font-semibold'>Bắt đầu</a>
                </button>
            </div>
        </div >
    );
};

export default Becometeacher;

