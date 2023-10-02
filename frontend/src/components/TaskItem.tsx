import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { AiOutlineClose } from 'react-icons/ai';

interface TaskItemProps {
    title: string;
    progress: number;
}

export default function TaskItem({ title, progress }: TaskItemProps) {
    return (
        <li className="text-sm py-3 px-4 border-b flex items-center justify-between">
            <div className="inline-flex gap-2">
                <div className="w-5 h-5">
                    <CircularProgressbar
                        value={progress}
                        styles={buildStyles({
                            pathColor: 'rgb(156, 116, 129)',
                        })}
                    />
                </div>
                <span>{title}</span>
            </div>
            <AiOutlineClose size={18} className="text-gray-600" />
        </li>
    );
}
