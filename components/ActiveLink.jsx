import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
  color: '#0070F3',
  textDecoration: 'urderline',
};

export const ActiveLink = ({ text, href }) => {
  const { route } = useRouter();

  return (
    <Link href={href}>
      <a style={route === href ? style : null}>{text}</a>
    </Link>
  );
};
