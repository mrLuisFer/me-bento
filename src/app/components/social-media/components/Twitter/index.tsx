import TwitterIcon from "../../../Icons/TwitterIcon";
import { SocialMediaLinks } from "@/constants/socialMediaLinks";
import CardLogo from "../Card/CardLogo";
import Card from "../Card";
import TwitterContent from "./Content";
import Link from "@/app/components/Link";

export default function Twitter() {
  return (
    <Card className="bg-gradient-to-tl from-blue-100 to-blue-200">
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
