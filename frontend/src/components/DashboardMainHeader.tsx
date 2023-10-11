import { BsChevronDown } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { TbLogout } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineDarkMode } from 'react-icons/md';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    User,
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    DropdownSection,
    Switch,
} from '@nextui-org/react';

const navMenuItemStyles = 'flex items-center gap-2 px-5 py-2 border-t';

export default function DashboardHeader() {
    return (
        <Navbar
            className="bg-gray-100 lg:bg-white border-b lg:border-none lg:shadow-sm"
            maxWidth="full"
        >
            <NavbarContent className="lg:hidden" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent
                className="hidden lg:flex lg:justify-between"
                justify="start"
            >
                <h1 className="text-gray-700 font-semibold flex items-center gap-2">
                    <GoHome size={18} />
                    <span>Home</span>
                </h1>
            </NavbarContent>
            <NavbarContent justify="end" className="hidden lg:flex">
                <Dropdown>
                    <DropdownTrigger>
                        <button
                            type="button"
                            className="flex items-center gap-1 outline-none"
                        >
                            <Avatar name="Prince Asamoah" />
                            <BsChevronDown
                                size={16}
                                className="text-gray-400"
                            />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownSection showDivider>
                            <DropdownItem key="profile" isReadOnly>
                                <User
                                    name="Prince Asamoah"
                                    description="prince.t.asamoah@gmail.com"
                                />
                            </DropdownItem>
                        </DropdownSection>
                        <DropdownSection showDivider>
                            <DropdownItem
                                key="settings"
                                startContent={<IoSettingsOutline size={18} />}
                            >
                                Settings
                            </DropdownItem>
                            <DropdownItem
                                key="dark-mode"
                                startContent={<MdOutlineDarkMode size={18} />}
                                endContent={
                                    <Switch
                                        defaultSelected
                                        size="sm"
                                        classNames={{
                                            wrapper: 'h-5',
                                        }}
                                    />
                                }
                            >
                                Dark Mode
                            </DropdownItem>
                        </DropdownSection>
                        <DropdownItem
                            key="logout"
                            startContent={<TbLogout size={18} />}
                        >
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu className=" bg-gray-100 p-0">
                <NavbarMenuItem className="py-4 px-5">
                    <User
                        name="Prince Asamoah"
                        description="prince.t.asamoah@gmail.com"
                    />
                </NavbarMenuItem>
                <NavbarMenuItem className={navMenuItemStyles}>
                    <IoSettingsOutline size={24} />
                    Settings
                </NavbarMenuItem>
                <NavbarMenuItem className={navMenuItemStyles}>
                    <span className="flex items-center gap-2">
                        <MdOutlineDarkMode size={24} />
                        Dark Mode
                    </span>
                    <Switch defaultSelected size="sm" />
                </NavbarMenuItem>
                <NavbarMenuItem className={navMenuItemStyles}>
                    <TbLogout size={24} />
                    Logout
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
