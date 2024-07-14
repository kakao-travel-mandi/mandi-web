import { ClockIcon, DotsIcon, PinMapIcon } from "../icons";
import Chip from "./Chip";

export type CourseDataProps = {
  name: string;
  start: string;
  end: string;
  time: string;
  length: string;
  thumb: string;
};

type Props = {
  course: CourseDataProps;
  type?: "short" | "default";
};

function CourseDetail({ course, type = "default" }: Props) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={course.thumb}
        alt="thumb"
        className="w-20 h-20 rounded-lg border border-gray-400"
      />
      <div className="space-y-2">
        <p className="font-semibold text-gray-800 text-lg">{course.name}</p>
        <div className="flex items-center space-x-1">
          <Chip label={course.start} />
          <DotsIcon />
          <Chip label={course.end} />
        </div>
        {type == "default" && (
          <div className="flex space-x-4 text-gray-700 text-sm">
            <div className="flex items-center gap-1">
              <ClockIcon />
              {course.time}
            </div>
            <div className="flex items-center gap-1">
              <PinMapIcon />
              {course.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetail;
