import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sinh viên năm nhất<span> 2018 -2019</span></h2>
                        <p>Bắt đầu bước vào cuộc sống sinh viên xa gia đình bạn bè, còn nhiều bớ ngỡ. Gặp được nhiều bạn mới</p>
                        <p>Bưới đầu làm quen những môn học cơ bản ngành CNTT :</p>
                        <label>Tin học đại cương, Lập trình cơ bản với C, Nhập môn ngành CNTT, TH Lập trình cơ bản với C</label><br />
                        <label>Cấu trúc máy tính, Tin học văn phòng, 	Cơ sở dữ liệu I, TH Lập trình cơ bản với C</label><br />
                        <img src={require('./img1.jpg')} />
                        <p></p>
                        <p>Tham gia các hoạt động do trường tổ chức:</p>
                        <img src={require('./hoatdong.png')} />>
                      </div>
                      
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sinh viên năm 2<span> 2019-2020</span></h2>
                        <p>Học tiếp những môn cơ sở chuyên ngành CNTT</p>
                        <p>Học được kỹ năng làm việc nhóm với mọi người</p>
                        <label>Công nghệ phần mềm, 	Phân tích thiết kế hướng đối tượng, Lập trình trên ĐTDĐ</label><br />
                        <p>Tham gia các hoạt động do trường tổ chức:</p>
                       
                        <img src={require('./hoatdong2.png')} />
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sinh Viên năm 3<span> 2020-2021</span></h2>
                        <p>Bước đầu học những môn cơ sở chuyên ngành do mình chọn:</p> 
                         <label>Lập trình trên ĐTDĐ, 		Lập trình web nâng cao, TTCM Thiết kế Cơ sở dữ liệu ...</label><br />
                        <p>Tự học JavaScript , React, React Native</p> 
                        <img src={require('./hoatdong3.png')} />
                         <label>Tham gia hoạt động chạy bộ dù mệt nhưng vẫn không quên chụp ảnh :))</label><br />
                        <img src={require('./hoatdong4.jpg')} />
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sinh Viên năm 4<span> 2021-2022</span></h2>
                        <p>Thực tập Online, làm đồ Án tốt nghiệp</p> 
                        <p>Tham gia thực tập khoá training fullstack javascript ở CÔNG TY TNHH MTV DỊCH VỤ PHẦN MỀM SAFEHORIZONS </p> 
                         <label>Một số hình ảnh Training</label><br /><br />
                        <img src={require('./trainingjs.png')} /><br /><br />
                         <b>Báo cáo Đồ án tốt nghiệp với kết quá khá tốt</b><br />
                        <img src={require('./imageCover.jpg')} width="700" height="400" />


                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
