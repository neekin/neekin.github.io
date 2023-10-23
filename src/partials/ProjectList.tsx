import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        交付 <GradientText>项目</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="聚吧小程序"
        description="主打老年人社交的微信平台小程序,可基于位置发起活动、查看活动、相互送礼、相互关注等。"
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>微信小程序</Tags>
            <Tags color={ColorTags.FUCHSIA}>Hapi.js</Tags>
            <Tags color={ColorTags.LIME}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Taro.js</Tags>
            <Tags color={ColorTags.ROSE}>MongoDB</Tags>
            <Tags color={ColorTags.ROSE}>Redis</Tags>
          </>
        }
      />
      <Project
        name="分销商城"
        description="主打分级营销、推广的手机商城,灵活的分销规则以及推广活动。"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Ant Design</Tags>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Nest.js</Tags>
            <Tags color={ColorTags.ROSE}>MongoDB</Tags>
            <Tags color={ColorTags.ROSE}>Redis</Tags>
          </>
        }
      />
      <Project
        name="汽车服务"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>微信小程序</Tags>
            <Tags color={ColorTags.INDIGO}>LBS服务</Tags>
            <Tags color={ColorTags.ROSE}>Node.JS</Tags>
            <Tags color={ColorTags.SKY}>Taro.JS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
