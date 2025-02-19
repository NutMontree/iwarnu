import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
    const { pathname } = useLocation();
    let subpage = pathname.split('/')?.[3];
    if (subpage === undefined) {
        subpage = 'profile';
    }
    function linkClasses(type = null) {
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage) {
            classes += ' bg-primary text-white';
        } else {
            classes += ' bg-gray-200';
        }
        return classes;
    }
    return (
        <nav className="flex justify-between mt-8 gap-2 mb-8">
            <div className="flex">
                <Link className={linkClasses('profile')} to={'/account'}>
                    โปรไฟล์
                </Link>
            </div>
            <div className="flex">
                <Link className={linkClasses('reports')} to={'/reports'}>
                    การแจ้งความ
                </Link>
            </div>
        </nav>
    );
}