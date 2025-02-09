const config = {
  appName: "Oleg Korol's Blog",
  appDescription:
    "My experiences and thoughts on software development and other topics. Short notes, TILs and other stuff.",
  domainName: "blog.olegkorol.de",
  siteUrl: "https://blog.olegkorol.de",
  lang: "en-us",
} as ConfigProps;

export default config;

interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  siteUrl: string;
  lang: string;
}
