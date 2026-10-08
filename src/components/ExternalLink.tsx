type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Safe external link: new tab, no opener/referrer leakage. */
export default function ExternalLink({ children, ...props }: Props) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
