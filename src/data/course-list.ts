import { CourseType } from "types/course.type";
import CourseOneImg from "@images/courses/grid_1.webp";
import CourseTwoImg from "@images/courses/grid_2.webp";
import CourseThreeImg from "@images/courses/grid_3.webp";
import CourseFourImg from "@images/courses/grid_4.webp";
import CourseFiveImg from "@images/courses/grid_5.webp";
import CourseSixImg from "@images/courses/grid_6.webp";

export const CourseList: CourseType[] = [
  {
    title: "Foundation course to understand about software",
    time: "01:30:00",
    price: 67.0,
    priceOff: 32.0,
    image: CourseOneImg,
    tag: "Art & Design",
    lesson: 23,
    teacher: "Micle Jhon",
  },
  {
    title: "Nidnies course to under stand about softwere",
    time: "02:10:00",
    price: 67.0,
    priceOff: 32.0,
    image: CourseTwoImg,
    tag: "Development",
    lesson: 29,
    teacher: "Rinis Jhon",
  },
  {
    title: "Minws course to under stand about solution",
    time: "01:40:00",
    price: 0,
    priceOff: 0,
    image: CourseThreeImg,
    tag: "Lifestyle",
    lesson: 25,
    teacher: "Jane Austen",
  },
  {
    title: "Design course to under stand about solution",
    time: "03:40:00",
    price: 67.0,
    priceOff: 40.0,
    image: CourseFourImg,
    tag: "Web Design",
    lesson: 36,
    teacher: "Micle Robin",
  },
  {
    title: "Data course to under stand about solution",
    time: "03:40:00",
    price: 67.0,
    priceOff: 0,
    image: CourseFiveImg,
    tag: "Business",
    lesson: 36,
    teacher: "Dh. Dichen",
  },
  {
    title: "Big data to under stand about solution pacage",
    time: "03:40:00",
    price: 67.0,
    priceOff: 40.0,
    image: CourseSixImg,
    tag: "Business",
    lesson: 30,
    teacher: "Ge. Orwell",
  },
];
