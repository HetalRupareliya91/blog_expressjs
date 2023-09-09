import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src, valfor }) => {
  // destructuring items from config object
  const { logo, logo_white, logo_width, logo_height, logo_text, title, logo_vertical} =
    config.site;
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Link href="/" className="navbar-brand">
      {src || logo ? (
        <ImageFallback
          width={ valfor === "logo_vertical" ? "90" : logo_width.replace("px", "") * 2 }
          height={ valfor === "logo_vertical" ? "80" : logo_height.replace("px", "") * 2 }
          src={ valfor=== "logo_vertical" ? logo_vertical :
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? logo_white
              : logo
          }
          alt={title}
          priority
          style={ valfor=== "logo_vertical" ? '' :
          {
              height: logo_height.replace("px", "") + "px",
              width: logo_width.replace("px", "") + "px", 
          }}
       
          className={"m-auto"}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
