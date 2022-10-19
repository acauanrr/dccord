import { VStack, Image, Box, IconButton, Tooltip } from "@chakra-ui/react";
import { MdDashboard, MdMail, MdSettings } from "react-icons/md";
import { HiLightningBolt, HiBell, HiTag, HiSearch } from "react-icons/hi";

export default function Navigation() {
  return (
    <VStack p={6} justifyContent="space-around" alignItems="center" w="full">
      <VStack>
        <Image
          src="/images/logo-small.png"
          alt="logo"
          // objectFit="cover"
          // boxSize="50px"
        />
        {/* IconButtons with Tooltips */}
        <Tooltip label="Dashboard" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdDashboard />}
            aria-label="Dashboard"
          />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiLightningBolt />}
            aria-label="Actions"
          />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiSearch />}
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiBell />}
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Tags" placement="right">
          <IconButton color="gray.500" icon={<HiTag />} aria-label="Tags" />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdMail />}
            aria-label="Messages"
          />
        </Tooltip>
      </VStack>
      <Tooltip label="Settigns" placement="right">
        <IconButton icon={<MdSettings />} aria-label="Settigns" />
      </Tooltip>
    </VStack>
  );
}
