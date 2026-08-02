interface Props {
    title: string;
    value: string;
    bg: string;
    border: string;
    text: string;
}

export default function SummaryCard({
    title,
    value,
    bg,
    border,
    text,
}: Props) {
    return (
        <div className={`rounded-2xl border ${border} ${bg} p-6`}>

            <h2 className={`text-4xl font-bold ${text}`}>
                {value}
            </h2>

            <p className="mt-2 text-gray-400">
                {title}
            </p>

        </div>
    );
}