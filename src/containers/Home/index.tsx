import Hero from "../../components/Hero";
import Skill from "../../components/Skill";
import {
    Illustrator,
    Photoshop,
    Xd,
    Design,
    DynamoDB,
    ElasticCache,
    Lambda,
    Logo,
    S3,
    Aws,
    Bitbucket,
    Bootstrap,
    Browserify,
    Bulma,
    Confluence,
    Css,
    Django,
    Docker,
    Drupal,
    Express,
    Figma,
    Firebase,
    Foundation,
    Github,
    Gitlab,
    GraphQL,
    Grunt,
    Gsap,
    Gulp,
    Handlebars,
    Html,
    Invision,
    Javascript,
    Jenkins,
    Jest,
    Jira,
    JQuery,
    Jss,
    Laravel,
    Less,
    MariaDB,
    MaterialUI,
    Meteor,
    MongoDB,
    Mustache,
    Mysql,
    NestJS,
    Next,
    Node,
    Nuxt,
    Pwa,
    ReactQuery,
    ReactJs,
    Redis,
    ReduxSaga,
    Redux,
    Sass,
    Scss,
    SonarQube,
    Strapi,
    StyledComponents,
    Symfony,
    Tailwind,
    Trello,
    Twig,
    Typescript,
    Ubuntu,
    Vue,
    Vuex,
    Webpack,
    Wordpress,
    Mac,
} from "../../components/Technologies";

const Home = () => {
    const technicalSkills: any = {
        operatingSystems: [Ubuntu, Mac],
        frontend: [
            Html,
            Handlebars,
            Mustache,
            Twig,
            Css,
            Less,
            Sass,
            Scss,
            Jss,
            StyledComponents,
            Bootstrap,
            Foundation,
            Tailwind,
            MaterialUI,
            Design,
            Bulma,
            Javascript,
            Typescript,
            JQuery,
            ReactJs,
            Redux,
            ReduxSaga,
            ReactQuery,
            Next,
            Vue,
            Vuex,
            Nuxt,
            Jest,
            Gsap,
            Photoshop,
            Illustrator,
            Xd,
            Figma,
            Invision,
        ],
        backend: [
            Node,
            Express,
            Meteor,
            NestJS,
            Strapi,
            Laravel,
            Symfony,
            Wordpress,
            Drupal,
            Django,
        ],
        database: [MariaDB, MongoDB, Mysql, DynamoDB, ElasticCache, Redis, GraphQL],
        workflows: [Grunt, Browserify, Gulp, Webpack],
        sourceManagement: [Gitlab, Github, Bitbucket],
        projectManagement: [Confluence, Trello, Jira],
        devOps: [SonarQube, Docker, Jenkins],
        cloudServices: [Aws, S3, Lambda, Firebase],
    };
    return (
        <>
            <section
                className="relative overflow-hidden bg-white before:absolute before:w-full before:h-full before:z-10 before:bg-gradient-to-r before:from-white before:via-30% before:via-white before:to-transparent
    after:absolute after:w-full after:h-1/4 after:z-10 after:bg-gradient-to-b after:from-white after:via-30% after:via-white after:to-transparent after:top-0
    "
            >
                <Hero className="absolute z-0"/>
                <div className="container relative h-screen flex items-center z-20">
                    <div className=" grid grid-cols-12">
                        <div className="col-span-6 space-y-3">
                            <p className="text-gray-500 text-2xl font-thin">Hello I'm</p>
                            <h1 className="text-6xl font-extrabold">
                                Mirza <span className="text-red-500">Emad</span> Baig
                            </h1>
                            <p className="text-gray-500 text-2xl font-thin">
                                An enthusiast of
                                <span className="text-red-500"> continuous integration</span>,
                                <span className="text-red-500"> test first</span> and
                                <span className="text-red-500"> agile environments</span>.
                                Experienced in product development,
                                <span className="text-red-500"> leading teams</span>, shipping
                                <span className="text-red-500">
                  {" "}
                                    complex digital experiences{" "}
                </span>
                                and the ability to thrive in a
                                <span className="text-red-500"> fast-paced environment</span>.
                            </p>
                            <p className="text-xl font-thin">
                                Islamabad - Abu Dhabi - Toronto
                            </p>
                        </div>
                    </div>
                    <div className="absolute text-center bottom-0 mx-auto left-0 right-0">
                        <span className="text-xs text-gray-500">Want to know more?</span>
                        <span
                            className="overflow-hidden w-0.5 h-24 bg-gray-400 block mx-auto before:animate-scrollDown before:w-0.5 before:h-12 before:bg-red-500 before:block"></span>
                    </div>
                </div>
            </section>
            <section className="py-52 overflow-hidden bg-gradient-to-b from-white from-10% to-gray-100">
                <div className="container">
                    <div className=" grid grid-cols-12">
                        <div className="col-span-12 space-y-3">
                            <h2 className="text-6xl font-bold mb-16">
                                <span className="text-red-500">Technical</span>
                                <br/>
                                Proficiencies
                            </h2>
                        </div>
                    </div>
                    <div className="inline-flex animate-marquee">
                        <Skill
                            logo={<Ubuntu width={75} height={75}/>}
                            title="Ubuntu"
                        />
                        <Skill logo={<Html width={75} height={75}/>} title="Html"/>
                        <Skill
                            logo={<Handlebars width={75} height={75}/>}
                            title="Handlebars"
                        />
                        <Skill
                            logo={<Mustache width={75} height={75}/>}
                            title="Mustache"
                        />
                        <Skill logo={<Twig width={75} height={75}/>} title="Twig"/>
                        <Skill logo={<Css width={75} height={75}/>} title="Css"/>
                        <Skill logo={<Less width={75} height={75}/>} title="Less"/>
                        <Skill logo={<Sass width={75} height={75}/>} title="Sass"/>
                        <Skill logo={<Scss width={75} height={75}/>} title="Scss"/>
                        <Skill logo={<Jss width={75} height={75}/>} title="Jss"/>
                        <Skill
                            logo={<StyledComponents width={75} height={75}/>}
                            title="Styledcomponents"
                        />
                        <Skill
                            logo={<Bootstrap width={75} height={75}/>}
                            title="Bootstrap"
                        />
                        <Skill
                            logo={<Foundation width={75} height={75}/>}
                            title="Foundation"
                        />
                        <Skill
                            logo={<Tailwind width={75} height={75}/>}
                            title="Tailwind"
                        />
                        <Skill
                            logo={<MaterialUI width={75} height={75}/>}
                            title="Materialui"
                        />
                        <Skill
                            logo={<Design width={75} height={75}/>}
                            title="Design"
                        />
                        <Skill logo={<Bulma width={75} height={75}/>} title="Bulma"/>
                        <Skill
                            logo={<Javascript width={75} height={75}/>}
                            title="Javascript"
                        />
                        <Skill
                            logo={<Typescript width={75} height={75}/>}
                            title="Typescript"
                        />
                        <Skill
                            logo={<JQuery width={75} height={75}/>}
                            title="Jquery"
                        />
                        <Skill logo={<ReactJs width={75} height={75}/>} title="React"/>
                        <Skill logo={<Redux width={75} height={75}/>} title="Redux"/>
                        <Skill
                            logo={<ReduxSaga width={75} height={75}/>}
                            title="Reduxsaga"
                        />
                        <Skill
                            logo={<ReactQuery width={75} height={75}/>}
                            title="ReactQuery"
                        />
                        <Skill logo={<Next width={75} height={75}/>} title="Next"/>
                        <Skill logo={<Vue width={75} height={75}/>} title="Vue"/>
                        <Skill logo={<Vuex width={75} height={75}/>} title="Vuex"/>
                        <Skill logo={<Nuxt width={75} height={75}/>} title="Nuxt"/>
                        <Skill logo={<Jest width={75} height={75}/>} title="Jest"/>
                        <Skill logo={<Gsap width={75} height={75}/>} title="Gsap"/>
                        <Skill
                            logo={<Photoshop width={75} height={75}/>}
                            title="Photoshop"
                        />
                        <Skill
                            logo={<Illustrator width={75} height={75}/>}
                            title="Illustrator"
                        />
                        <Skill logo={<Xd width={75} height={75}/>} title="Xd"/>
                        <Skill logo={<Figma width={75} height={75}/>} title="Figma"/>
                        <Skill
                            logo={<Invision width={75} height={75}/>}
                            title="Invision"
                        />
                        <Skill logo={<Node width={75} height={75}/>} title="Node"/>
                        <Skill
                            logo={<Express width={75} height={75}/>}
                            title="Express"
                        />
                        <Skill
                            logo={<Meteor width={75} height={75}/>}
                            title="Meteor"
                        />
                        <Skill
                            logo={<NestJS width={75} height={75}/>}
                            title="Nestjs"
                        />
                        <Skill
                            logo={<Strapi width={75} height={75}/>}
                            title="Strapi"
                        />
                        <Skill
                            logo={<Laravel width={75} height={75}/>}
                            title="Laravel"
                        />
                        <Skill
                            logo={<Symfony width={75} height={75}/>}
                            title="Symfony"
                        />
                        <Skill
                            logo={<Wordpress width={75} height={75}/>}
                            title="Wordpress"
                        />
                        <Skill
                            logo={<Drupal width={75} height={75}/>}
                            title="Drupal"
                        />
                        <Skill
                            logo={<Django width={75} height={75}/>}
                            title="Django"
                        />
                        <Skill
                            logo={<MariaDB width={75} height={75}/>}
                            title="Mariadb"
                        />
                        <Skill
                            logo={<MongoDB width={75} height={75}/>}
                            title="Mongodb"
                        />
                        <Skill logo={<Mysql width={75} height={75}/>} title="Mysql"/>
                        <Skill
                            logo={<DynamoDB width={75} height={75}/>}
                            title="Dynamodb"
                        />
                        <Skill
                            logo={<ElasticCache width={75} height={75}/>}
                            title="Elasticcache"
                        />
                        <Skill logo={<Redis width={75} height={75}/>} title="Redis"/>
                        <Skill
                            logo={<GraphQL width={75} height={75}/>}
                            title="Graphql"
                        />
                        <Skill logo={<Grunt width={75} height={75}/>} title="Grunt"/>
                        <Skill
                            logo={<Browserify width={75} height={75}/>}
                            title="Browserify"
                        />
                        <Skill logo={<Gulp width={75} height={75}/>} title="Gulp"/>
                        <Skill
                            logo={<Webpack width={75} height={75}/>}
                            title="Webpack"
                        />
                        <Skill
                            logo={<Confluence width={75} height={75}/>}
                            title="Confluence"
                        />
                        <Skill
                            logo={<Trello width={75} height={75}/>}
                            title="Trello"
                        />
                        <Skill logo={<Jira width={75} height={75}/>} title="Jira"/>
                        <Skill
                            logo={<Gitlab width={75} height={75}/>}
                            title="Gitlab"
                        />
                        <Skill
                            logo={<Github width={75} height={75}/>}
                            title="Github"
                        />
                        <Skill
                            logo={<Bitbucket width={75} height={75}/>}
                            title="Bitbucket"
                        />
                        <Skill
                            logo={<SonarQube width={75} height={75}/>}
                            title="Sonarqube"
                        />
                        <Skill
                            logo={<Docker width={75} height={75}/>}
                            title="Docker"
                        />
                        <Skill
                            logo={<Jenkins width={75} height={75}/>}
                            title="Jenkins"
                        />
                        <Skill logo={<Logo width={75} height={75}/>} title="Logo"/>
                        <Skill logo={<Aws width={75} height={75}/>} title="Aws"/>
                        <Skill logo={<S3 width={75} height={75}/>} title="S3"/>
                        <Skill
                            logo={<Lambda width={75} height={75}/>}
                            title="Lambda"
                        />
                        <Skill
                            logo={<Firebase width={75} height={75}/>}
                            title="Firebase"
                        />
                        <Skill logo={<Pwa width={75} height={75}/>} title="Pwa"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
