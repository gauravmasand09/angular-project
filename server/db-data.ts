export const USERS = {
  2: {
    id: 2,
    email: 'gaurav.masand09@gmail.com',
    password: 'password'
  }

};


export const COURSES: any = {

  1: {
    id: 4,
    description: 'Prepare for UPSC prelims',
    longDescription: 'UPSC Exams Online Courses : Online Coaching for IAS Exams',
    iconUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/08/upsc-civil-service-cut-off-list-1596887719.jpg',
    category: 'ADVANCED',
    lessonsCount: 10,
    seqNo: 0,
    url: 'upsc-course'
  },


  2: {
    id: 4,
    description: 'Prepare for CDS',
    longDescription: 'Prepare for CDS in just 30 days',
    iconUrl: 'https://www.pagalguy.com/wp-content/uploads/2019/01/cds-exam-ii-1280x720.jpg',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 0,
    url: 'cds-course'
  },

};


export const LESSONS = {

  1: {
    id: 1,
    'description': 'UPSC Geograpgy',
    'duration': '4:17',
    'seqNo': 1,
    courseId: 5
  },
  2: {
    id: 2,
    'description': 'UPSC Economics',
    'duration': '2:07',
    'seqNo': 2,
    courseId: 5
  },
};


export function findCourseById(courseId: number) {
  return COURSES[courseId];
}

export function findLessonsForCourse(courseId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}


export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }

}
