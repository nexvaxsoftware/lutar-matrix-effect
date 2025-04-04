export default function consoleText() {
  console.clear();
  const styles = [
    "color: white",
    "background: rgba(238,58,136,1)",
    "font-size: 18px",
    "padding: 12px",
    "margin: 6px 0 6px 14px",
  ].join(";");
  const styles2 = [
    "font-size: 14px",
    "padding: 16px",
    "margin: 6px 0 6px 0",
    "color: rgba(238,58,136,1)",
  ].join(";");
  console.log("%cLUTAR", styles);
  console.log("%cEXPLORE BEYOND", styles2);
  const gradient = [
    "font-size: 14px",
    "color: #fff",
    "width: 200px",
    "padding: 8px",
    "margin: 6px 0 6px 14px",
    "border-radius: 4px",
    "background: rgba(238,58,136,1)",
    "background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
  ].join(";");
  console.log("%cTwitter %chttps://twitter.com/lutario", gradient, styles2);
  console.log("%cLinkedin %chttps://linkedin.com/company/lutario", gradient, styles2);
  console.log("%cGithub   %chttps://github.com/nexvaxsoftware", gradient, styles2);
  console.log("%cThe README   %chttps://lutar.io/readme", gradient, styles2);
  console.log("%cHave a wonderful day!", styles2);
}
