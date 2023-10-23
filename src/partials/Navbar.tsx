import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

import LogoPng from '../images/logo.png';

const Navbar = () => {
  return (
    <Section>
      <NavbarTwoColumns>
        <a href="/">
          <Logo
            icon={<img src={LogoPng.src} alt={'logo'} width={32} />}
            name="Nee Kin's Blog"
          />
        </a>

        <NavMenu>
          <NavMenuItem href="/posts/">文章</NavMenuItem>
          <NavMenuItem href="https://github.com/neekin">GitHub</NavMenuItem>
          {/*  <NavMenuItem href="/">Twitter</NavMenuItem> */}
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
