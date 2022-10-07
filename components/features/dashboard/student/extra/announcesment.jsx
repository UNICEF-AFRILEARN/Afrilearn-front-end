import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../../../../styles/announcement.module.css'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Col, Row } from 'react-bootstrap'
import { createComment } from '../../../../../redux/actions/subject'

const Announcesment = ({ goto, classId }) => {
  const { user } = useSelector((state) => state.auth)
  const subject = useSelector((state) => state.mySubjectCourse)
  const dispatch = useDispatch()
  const clazz = subject?.announcement[2]
  console.log(subject)
  const TeacherAnnouncement = ({ subject }) => {
    const dispatch = useDispatch()
    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return subject?.announcement[0]?.announcements.length > 0 ? (
      subject?.announcement[0]?.announcements.map((data, i) => {
        const [comment, setComment] = useState('')
        const sendComment = async (e, id) => {
          e.preventDefault()
          if (comment !== '') {
            dispatch(createComment(id, comment, classId, user?.token))
            setComment('')
          }
        }
        return (
          <div key={i} className={styles.seconmessage}>
            <div className={styles.innermessage}>
              <Image
                src={
                  data.teacher.profilePhotoUrl
                    ? data.teacher.profilePhotoUrl
                    : `/assets/img/messageavatar.svg`
                }
                alt="teacher"
                width={50}
                height={50}
                style={{ borderRadius: '100px' }}
              />
              <div className={styles.teachertitled}>
                <p style={{ color: 'black', margin: '0' }}>
                  Mr {data.teacher.fullName} (Teacher)
                </p>
                <span style={{ fontSize: '12px' }}>
                  {moment(data.createdAt).fromNow()}
                </span>
              </div>
            </div>
            <div className={styles.teacherarticle}>
              <p className="text-dark m-0">{capitalizeFirst(data.text)}</p>
            </div>
            <div className={styles.dividerclass}></div>
            <div className={`m-3 ${styles.noComment}`}>
              <div>
                <p style={{ color: '#00D9B6' }}>
                  {data?.comments.length} class comment
                </p>
              </div>
              {data?.comments.map((dts, i) =>
                dts ? (
                  <Row key={i} style={{ display: 'flex', margin: '15px 20px' }}>
                    <Col md={1} className={`p-0 ${styles.commentPic}`}>
                      <Image
                        src={
                          dts.student.profilePhotoUrl
                            ? dts.student.profilePhotoUrl
                            : `/assets/img/messageavatar.svg`
                        }
                        alt="teacher"
                        width={50}
                        height={50}
                        style={{
                          borderRadius: '100px',
                          objectPosition: '100%',
                        }}
                      />
                    </Col>
                    <Col
                      className={`ps-lg-0 ps-md-3 ${styles.commentimageconts}`}
                    >
                      <div key={i} className={` ${styles.teachertitle}`}>
                        <p className="m-0 text-dark">
                          <span
                            style={{
                              fontSize: '13px',
                              marginLeft: '0',
                            }}
                            className={` ${styles.teacherName}`}
                          >
                            {dts.student.id === data.teacher._id
                              ? `Mr ${dts.student.fullName} (Teacher)`
                              : dts.student.id === user?.user.id
                              ? ` ${dts.student.fullName} (You)`
                              : dts.student.fullName}
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: 'gray',
                              marginLeft: '15px',
                            }}
                            className={` ${styles.teacherdate}`}
                          >
                            {moment(dts.createdAt).fromNow()}
                          </span>
                        </p>
                        <span className={`m-0 text-dark ${styles.commentText}`}>
                          {capitalizeFirst(dts.text)}
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <div key={i} className={styles.teachertitle}>
                    <p>No Comment yet</p>
                  </div>
                )
              )}
            </div>
            <div className={styles.dividerclass}></div>
            <Col className={styles.commentAvatarRSide}>
              <div className={styles.commentAvatartop}>
                <div className={styles.commentAvatarMSide}>
                  <input
                    placeholder="Add a public comment..."
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    title="Comment"
                  />
                </div>
                <div
                  style={{ cursor: 'pointer' }}
                  className={`${styles.commentAvatarMRSide}`}
                  onClick={(e) => sendComment(e, data._id)}
                ></div>
              </div>
            </Col>
            <div className={`mt-2 ${styles.dividerclass}`}></div>
          </div>
        )
      })
    ) : (
      <h6>No Announcement list yet</h6>
    )
  }

  const AssignContent = () => {
    const minDigit = clazz?.assignedContents.filter((data) => {
      return data.audience === 'all' || data.userId?.id === user?.user.id
    })
    const minsDigit = minDigit?.map((data) => {
      return new Date(data.dueDate).getTime() - new Date().getTime()
    })
    const minAssign =
      minDigit &&
      // minDigit > 0 &&
      minDigit[minsDigit?.indexOf(Math.min(...minsDigit))]
    console.log(minAssign)
    // return <p>ti moba tiri</p>;
    return minAssign ? (
      <>
        <Row className="item">
          <Col md={2} style={{ height: '50px' }}>
            <Image
              src="/assets/img/anounceImg.png"
              alt="teacher"
              width={50}
              height={50}
            />
          </Col>
          <Col style={{ fontSize: '13px' }}>
            <span style={{ color: '#333' }}>{`Mr ${minAssign.teacher.fullName
              .split(' ')
              .slice(0, -1)
              .join(' ')} (Teacher) posted a new ...`}</span>

            <p className="m-0">
              Posted:&nbsp;
              <span style={{ color: 'gray', margin: '0', fontSize: '13px' }}>
                {moment(minAssign.createdAt).format('LL')}
              </span>
            </p>
            <p>
              Due Date:&nbsp;
              <span style={{ color: 'gray', margin: '0', fontSize: '13px' }}>
                {moment(minAssign.dueDate).format('LL')}
              </span>
            </p>
          </Col>
        </Row>
        <a onClick={() => goto(3)} style={{ marginRigth: 'auto' }}>
          <u
            style={{ color: '#00D9B6', paddingLeft: '60%', cursor: 'pointer' }}
          >
            View All
          </u>
        </a>
      </>
    ) : (
      <p style={{ textAlign: 'center' }}>"Oh oh! No work due soon!"</p>
    )
  }
  return (
    <Row className={styles.mainwrappers}>
      <Col lg={4} md={12} className={styles.announcementcontainers}>
        <div className="mx-3">
          <Image
            src="/assets/img/crown.svg"
            alt="teacher"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.detailscard}>
          <h2>{user.user?.fullName}</h2>
          <p>{user.user?.email}</p>
          <h3>{subject?.dashboardWeb?.enrolledCourse?.courseId?.name}</h3>
        </div>
        <div className={styles.upcomingcard}>
          <AssignContent />
        </div>
      </Col>
      <Col lg={8} md={12} className={styles.messagescontainers}>
        <div className={styles.firstmessage}>
          <p className="text-dark">Announcements from teacher</p>
        </div>
        <TeacherAnnouncement subject={subject} />
      </Col>
    </Row>
  )
}

export default Announcesment
