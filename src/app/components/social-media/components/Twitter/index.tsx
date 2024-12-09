import TwitterIcon from "@/app/components/icons/TwitterIcon";
import { SocialMediaLinks } from "@/constants/socialMedia";
import CardLogo from "../Card/CardLogo";
import Card from "../Card";
import TwitterContent from "./Content";
import Link from "@/app/components/Link";

export default function Twitter() {
  return (
    <Card className="lg-fit w-fit bg-gradient-to-tl from-blue-100 to-blue-200 lg:w-[400px]">
      <CardLogo className="bg-white hover:bg-blue-50">
        <TwitterIcon />
      </CardLogo>
      <TwitterContent />
      <Link
        href={SocialMediaLinks.Twitter}
        withButton
        buttonProps={{ variant: "secondary" }}
      >
        Puedes ver más tweets o contactarme por DM
      </Link>
    </Card>
  );
}
