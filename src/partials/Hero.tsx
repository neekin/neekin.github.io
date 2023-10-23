import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, 我是 <GradientText>Nee Kin</GradientText> 👋
        </>
      }
      description={
        <>
          我热衷于成为一名{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            全栈开发者，
          </a>{' '}
          ，擅长利用多种技能构建全面的应用。我的技术栈涵盖了{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Ruby、Python、Node.js、.Net
          </a>{' '}
          等用于后端服务的开发语言，同时具备在{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Web网站、手机App以及微信小程序
          </a>{' '}
          等多个平台进行前端界面开发的技能。通过这些丰富的技术，我不仅仅是一名程序员，更是一个构建全方位应用的技术实践者。
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
