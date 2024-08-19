import { ApplicationStatus } from "@/interfaces/application";
import {
  CalendarIcon,
  ClipboardListIcon,
  CogIcon,
  DollarSignIcon,
  UsersIcon,
} from "lucide-react";
// import { MdDashboard } from "react-icons/md";
import { TbDashboard } from "react-icons/tb";

export const BASE_URL = "http://localhost:4000";
export const ENCRYPTION_KEY = "yourSecretKey";
export const ADMIN_PASSKEY = "444000";
// Sidebar data configuration
export const sidebarItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: TbDashboard,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: UsersIcon,
  },
  {
    href: "/admin/applications",
    label: "Applications",
    icon: ClipboardListIcon,
  },
  // {
  //   href: "/admin/settings",
  //   label: "Settings",
  //   icon: CogIcon,
  // },
];

export const applicationStatusList: ApplicationStatus[] = [
  "pending",
  "processing",
  "eligible",
  "not_eligible",
];

export const contentKeys = <const>[
  // Homepage Section 1
  {
    key: "home_section1_main_heading",
    page: "home",
    label: "Home Section 1 Main Heading",
  },
  {
    key: "home_section1_secondary_heading",
    page: "home",
    label: "Home Section 1 Secondary Heading",
  },

  // Homepage Section 2
  {
    key: "home_section2_main_heading",
    page: "home",
    label: "Home Section 2 Main Heading",
  },

  // Homepage Section 3
  {
    key: "home_section3_main_heading",
    page: "home",
    label: "Home Section 3 Main Heading",
  },
  {
    key: "home_section3_secondary_heading",
    page: "home",
    label: "Home Section 3 Secondary Heading",
  },

  // Homepage Section 4
  {
    key: "home_section4_main_heading",
    page: "home",
    label: "Home Section 4 Main Heading",
  },
  {
    key: "home_section4_secondary_heading",
    page: "home",
    label: "Home Section 4 Secondary Heading",
  },

  // About Us Section 1
  {
    key: "aboutus_section1_main_heading",
    page: "aboutus",
    label: "About Us Section 1 Main Heading",
  },
  {
    key: "aboutus_section1_secondary_heading",
    page: "aboutus",
    label: "About Us Section 1 Secondary Heading",
  },
  {
    key: "aboutus_section1_paragraph",
    page: "aboutus",
    label: "About Us Section 1 Paragraph",
  },

  // About Us Section 2
  {
    key: "aboutus_section2_main_heading",
    page: "aboutus",
    label: "About Us Section 2 Main Heading",
  },
  {
    key: "aboutus_section2_card1_heading",
    page: "aboutus",
    label: "About Us Section 2 Card 1 Heading",
  },
  {
    key: "aboutus_section2_card1_paragraph",
    page: "aboutus",
    label: "About Us Section 2 Card 1 Paragraph",
  },
  {
    key: "aboutus_section2_card2_heading",
    page: "aboutus",
    label: "About Us Section 2 Card 2 Heading",
  },
  {
    key: "aboutus_section2_card2_paragraph",
    page: "aboutus",
    label: "About Us Section 2 Card 2 Paragraph",
  },

  // About Us Section 3
  {
    key: "aboutus_section3_main_heading",
    page: "aboutus",
    label: "About Us Section 3 Main Heading",
  },
  {
    key: "aboutus_section3_first_card_team_name",
    page: "aboutus",
    label: "About Us Section 3 First Card Team Name",
  },
  {
    key: "aboutus_section3_first_card_team_paragraph",
    page: "aboutus",
    label: "About Us Section 3 First Card Team Paragraph",
  },
  {
    key: "aboutus_section3_first_card_team_secondary_heading",
    page: "aboutus",
    label: "About Us Section 3 First Card Team Secondary Heading",
  },
  {
    key: "aboutus_section3_second_card_team_name",
    page: "aboutus",
    label: "About Us Section 3 Second Card Team Name",
  },
  {
    key: "aboutus_section3_second_card_team_paragraph",
    page: "aboutus",
    label: "About Us Section 3 Second Card Team Paragraph",
  },
  {
    key: "aboutus_section3_second_card_team_secondary_heading",
    page: "aboutus",
    label: "About Us Section 3 Second Card Team Secondary Heading",
  },
  {
    key: "aboutus_section3_third_card_team_name",
    page: "aboutus",
    label: "About Us Section 3 Third Card Team Name",
  },
  {
    key: "aboutus_section3_third_card_team_paragraph",
    page: "aboutus",
    label: "About Us Section 3 Third Card Team Paragraph",
  },
  {
    key: "aboutus_section3_third_card_team_secondary_heading",
    page: "aboutus",
    label: "About Us Section 3 Third Card Team Secondary Heading",
  },
];
