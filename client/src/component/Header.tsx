import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useAuthContext } from "../contexts/authContext";
export function NavBarComp() {
  const { token, user } = useAuthContext();
  console.log("tken", token);
  console.log("user", user);
  if (token && user) {
    return (
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src={"https://flowbite.com/docs/images/logo.svg"}
            className="mr-3 h-6 sm:h-9"
            alt="Ytenebi Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Yetenbi.com
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </DropdownHeader>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">Log out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">FAQ</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    );
  } else {
    // User is not authenticated, display a navbar with Signup and Login
    return (
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src={"https://flowbite.com/docs/images/logo.svg"}
            className="mr-3 h-6 sm:h-9"
            alt="Yetenbi Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Yetenbi.com
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <a href="/signup" className="text-slate-700 px-4 py-2 rounded">
            Signup
          </a>
          <a href="/login" className="text-slate-700 px-4 py-2 rounded ml-2">
            Login
          </a>
        </div>
      </Navbar>
    );
  }
}
