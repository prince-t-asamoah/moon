interface DashboardSectionHeaderProps {
    title: string;
    children?: string;
}

export default function DashboardSectionHeader({
    title,
    children,
}: DashboardSectionHeaderProps) {
    return (
        <div>
            <h2 className="text-gray-700 font-bold text-lg lg:text-2xl px-5 py-4 md:p-8 flex items-center gap-2">
                {title}
                {children}
            </h2>
        </div>
    );
}
