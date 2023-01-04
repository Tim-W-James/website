import ContactForm from "@components/forms/ContactForm";
import cn from "@styles/cssUtils";
import {
  contactFormOnSubmit,
  contactFormOnSubmitDev,
} from "@utils/contactForm";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiSpotify, SiSteam } from "react-icons/si";

const SocialLink: React.FC<{
  icon: JSX.Element;
  body: JSX.Element;
  url: string;
  tooltip: string;
}> = ({ icon, body, url, tooltip }) => (
  <a href={url} rel="noreferrer" target="_blank" title={tooltip}>
    <div
      className={cn(
        "hover:text-light-accent active:text-dark-accent",
        "inline-flex",
        "items-center gap-1"
      )}
    >
      {icon}
      <p className={cn("hyphens-none")}>{body}</p>
    </div>
  </a>
);

const Contact = () => (
  <div>
    <ContactForm
      onSubmit={
        import.meta.env.DEV ? contactFormOnSubmitDev : contactFormOnSubmit
      }
      showPromptOnClose
    />
    <h2
      className={cn(
        "text-light-accent text-center self-center mt-8 mx-auto w-fit"
      )}
      id="blog"
    >
      Social Links
      <hr className={cn("radial-border mb-4")} />
    </h2>
    <section
      className={cn(
        "text-center self-center mt-8 mx-auto w-fit text-xl grid gap-4",
        "grid-cols-2"
      )}
    >
      <SocialLink
        body={<>LinkedIn</>}
        icon={<BsLinkedin />}
        tooltip={"timothy-william-james"}
        url={"https://www.linkedin.com/in/timothy-william-james/"}
      />
      <SocialLink
        body={<>GitHub</>}
        icon={<BsGithub />}
        tooltip={"Tim-W-James"}
        url={"https://github.com/Tim-W-James"}
      />
      <SocialLink
        body={<>Twitter</>}
        icon={<BsTwitter />}
        tooltip={"@TimWJames"}
        url={"https://twitter.com/TimWJames"}
      />
      <SocialLink
        body={<>Facebook</>}
        icon={<BsFacebook />}
        tooltip={"TimJames9800"}
        url={"https://www.facebook.com/TimJames9800/"}
      />
      <SocialLink
        body={<>Steam</>}
        icon={<SiSteam />}
        tooltip={"ExplosiveFridge"}
        url={"https://steamcommunity.com/id/ExplosiveFridge"}
      />
      <SocialLink
        body={<>Spotify</>}
        icon={<SiSpotify />}
        tooltip={"TimJ"}
        url={"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"}
      />
    </section>
    <div className={cn("text-xl text-center mt-4", "basis-min-content")}>
      <MdEmail /> Send me an email:{" "}
      <a
        className={cn("link", "hyphens-none")}
        href="mailto:tim.james.work9800@gmail.com"
        rel="noreferrer"
        target="_blank"
        title={"tim.james.work9800@gmail.com"}
      >
        tim.james.work9800@gmail.com
      </a>
    </div>
  </div>
);

export default Contact;
