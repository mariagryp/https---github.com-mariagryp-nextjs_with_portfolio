import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return <Link href='/'>
    <Image src='/logo(1).png' width={84} height={84} priority alt=''/>
  </Link>;
};

export default Logo;
