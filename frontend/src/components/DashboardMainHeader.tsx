import { BsChevronDown } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { TbLogout } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    User,
} from '@nextui-org/react';

export default function DashboardHeader() {
    return (
        <header className="w-full border-b px-8 py-3 sticky top-0 justify-between hidden lg:flex">
            <h1 className="text-gray-700 font-semibold flex items-center gap-2">
                <GoHome size={18} />
                <span>Home</span>
            </h1>
            <Dropdown>
                <DropdownTrigger>
                    <button
                        type="button"
                        className="flex items-center gap-1 outline-none"
                    >
                        <Avatar name="Prince Asamoah" />
                        <BsChevronDown size={16} className="text-gray-400" />
                    </button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="profile" isReadOnly>
                        <User
                            name="Prince Asamoah"
                            description="prince.t.asamoah@gmail.com"
                        />
                    </DropdownItem>
                    <DropdownItem
                        key="settings"
                        startContent={<IoSettingsOutline size={18} />}
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        key="logout"
                        startContent={<TbLogout size={18} />}
                    >
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </header>
    );
}
