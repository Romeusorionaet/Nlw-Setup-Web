

interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return(
        <div className="bg-zinc-900">
            {props.completed}
        </div>
    )
}