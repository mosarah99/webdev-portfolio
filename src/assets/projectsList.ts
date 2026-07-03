// import skillsWithCategory from './skills';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  detail_description: string;
  githubLink?: string;
  featured?: boolean;
  skillId: number[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project 1',
    description: 'A brief description of the project',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    detail_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis voluptatibus blanditiis quod delectus hic harum quidem molestias sed perferendis iste incidunt soluta reiciendis expedita quisquam, esse sit odio quo.
    Explicabo omnis magnam quidem, maiores voluptatem eius laboriosam sit consectetur earum? Molestias fugit, nemo maxime facere assumenda tenetur consectetur nostrum accusantium ut ducimus eligendi libero non deserunt atque ab! Temporibus.
    Inventore explicabo tenetur ad ex unde incidunt exercitationem! Odio, maxime placeat necessitatibus odit dignissimos adipisci minima blanditiis magnam voluptas id ipsa iure vero. Incidunt corporis, aperiam blanditiis et maxime alias?
    Vel numquam minima repellat atque eveniet, adipisci natus ut similique nisi, quia quis molestias aliquid magnam! Dicta, adipisci aperiam quis tenetur est deleniti aspernatur asperiores necessitatibus perferendis. Laudantium, tenetur sunt!
    Ea suscipit debitis libero nobis sapiente rerum soluta voluptatibus culpa tempore perferendis ducimus necessitatibus nulla laborum, quis labore ipsum dolores praesentium magnam facilis tempora. Ullam qui ea pariatur eos sunt!
    Maiores voluptate, facere doloremque vero molestiae minima provident enim, facilis ipsam corrupti ut nobis, nesciunt delectus fugiat pariatur porro voluptatibus aut! Autem modi ipsam ad, quasi quisquam quas illo cum!
    Accusantium est, temporibus molestiae autem id necessitatibus dolorum amet, quibusdam veniam minus iste quia beatae dolor explicabo reprehenderit, vel enim voluptate quod placeat aliquid similique. Illo, error? Expedita, cupiditate ea.
    Sit perferendis sequi numquam dignissimos iste esse minima nulla deserunt excepturi inventore facere ad placeat laboriosam id provident neque ex, aperiam aspernatur dolorum impedit veritatis ducimus sapiente eum soluta! Illo.
    Sit beatae error consequatur cupiditate, earum a natus illum ex inventore excepturi ea, nulla eius quas recusandae fugit dignissimos quasi accusantium accusamus voluptatem consequuntur. Repellendus ea provident animi odit vel?
    Placeat quisquam aspernatur magni eos optio architecto autem labore, voluptate cumque laudantium vel perspiciatis quia dolorem ullam dignissimos ipsum, ex repellat! Cum sapiente officia aperiam error repellat dicta nesciunt beatae!`,
    githubLink: 'https://github.com/project1',
    featured: true,
    skillId: [1, 2, 3],
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'A brief description of the project',
    image:
      'https://images.unsplash.com/photo-1573495628363-04667cedc587?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    detail_description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio architecto voluptatum cumque consectetur corrupti saepe distinctio, hic ab laboriosam, autem atque obcaecati facilis! Illo quia error nulla quod veniam soluta.
    Sequi consequuntur dolor quo sit rem dicta possimus? Sint officiis quaerat impedit mollitia, eligendi soluta, recusandae inventore dolorum fugiat sequi necessitatibus eaque dolor natus modi molestias officia a, provident vel.
    Nam, ipsa laborum ducimus illum doloribus culpa dolores iste, eius ab debitis, fuga dicta consectetur sapiente voluptas itaque accusamus velit ex tempore eaque eveniet blanditiis labore. Et, quia deleniti? Facilis.
    Recusandae tenetur rem dolore corrupti voluptatem repudiandae fuga vel illo, consectetur excepturi? Maxime in fugit, voluptate officiis error repellat nemo? Velit ea sunt ullam obcaecati, qui iste accusantium perferendis minima.`,
    githubLink: 'https://github.com/project2',
    featured: true,
    skillId: [2, 3],
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'A brief description of the project',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    detail_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus necessitatibus dolorum, quae veniam laudantium veritatis neque quos unde accusantium quasi odio tenetur, voluptatum fugiat explicabo doloribus exercitationem distinctio culpa!
    Optio asperiores quibusdam odio reprehenderit saepe! Sequi reprehenderit, laudantium molestiae voluptatum sapiente harum! At aut, fugiat voluptates totam dicta minus deserunt sed autem obcaecati quaerat ipsa doloremque explicabo. Facilis, consequatur.
    Doloribus dolor architecto culpa officia odit necessitatibus perspiciatis repellendus? Non inventore adipisci quia nobis voluptates qui delectus, quibusdam ipsam esse et quaerat optio, consequuntur molestiae. Voluptate voluptatibus eveniet consequatur beatae!
    Cupiditate autem voluptatibus consectetur. Ratione dignissimos consequuntur asperiores, alias mollitia laborum autem similique nostrum soluta. Eos, laborum. Aliquam aut, quo inventore iure nihil, deserunt tenetur magnam reprehenderit hic temporibus eveniet.
    Rem accusantium beatae quo earum ipsum facere numquam ut, magnam similique ducimus sit eaque doloremque nulla, iste consequatur pariatur sint expedita unde. Placeat eveniet animi in assumenda facere nesciunt beatae.
    Temporibus modi nam excepturi eligendi animi cupiditate earum, repellendus placeat dolorem, voluptatum commodi, quam perspiciatis eaque at doloremque! Veniam sit maxime ullam voluptate odit at facere sunt. Nihil, at neque?
    Magnam minus ratione nam suscipit recusandae iure facilis vitae accusantium esse? Quasi vel quas laudantium eveniet cumque, accusamus nobis amet reprehenderit, maxime doloribus molestias, architecto voluptas eos odio quaerat quae.
    Inventore distinctio dolores illum voluptate voluptas at dignissimos amet ullam excepturi aut, quaerat, ducimus tempore sapiente maxime corporis laudantium aspernatur quis obcaecati! Sint nobis laboriosam maiores, facilis in provident architecto!`,
    githubLink: 'https://github.com/project3',
    featured: false,
    skillId: [1, 2, 3],
  },
  {
    id: '4',
    title: 'Project 4',
    description: 'A brief description of the project',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    detail_description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis ad voluptas. Nostrum cupiditate, nesciunt aliquid ex dolore error laborum ea suscipit, odit minus placeat saepe laudantium minima veniam optio?
    Error, velit? Sed voluptas asperiores provident possimus commodi quo, consequuntur cum, accusamus doloremque minima dignissimos impedit deleniti, molestiae pariatur eos laboriosam maxime fugit officia! Quibusdam molestias quae tempore tenetur eius!
    Molestiae minima voluptatem error tempore, illum ex. Quam corporis vitae dignissimos nihil ducimus error eius atque? Sequi, reiciendis est fuga nam quaerat, sunt maiores accusantium, nostrum explicabo dolorum error deserunt.`,
    githubLink: 'https://github.com/project4',
    featured: true,
    skillId: [1, 3],
  },
  {
    id: '5',
    title: 'Project 5',
    description: 'A brief description of the project',
    image:
      'https://images.unsplash.com/photo-1573495628363-04667cedc587?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    detail_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quia voluptas. Soluta, eius unde. Iste alias animi cumque provident itaque hic molestias corporis! Provident minima fugit neque ipsum earum iusto?
    Velit, dolor inventore magnam ipsum aut facere dolorum repellat et quisquam aliquam quaerat dolorem, natus officiis dignissimos cumque ad? Dignissimos voluptate exercitationem beatae commodi esse velit, laboriosam asperiores reiciendis distinctio!
    Cumque sunt nam natus a placeat dolores aliquam perferendis! Cupiditate beatae laboriosam labore neque expedita error ipsa omnis aperiam nemo facere voluptatem deserunt totam, animi quo sed veniam repellat aliquid!
    Cupiditate qui nulla ratione nesciunt maiores facilis, minima ipsa nihil ipsam vero quod harum officiis maxime? Molestiae deleniti minus nulla! Quam reiciendis nobis cum beatae esse dicta velit tenetur repellat!
    Beatae itaque iste a nesciunt eum! Doloremque cum accusantium enim eligendi, laudantium at nostrum corrupti perferendis delectus iure dolorem a praesentium obcaecati deserunt aspernatur incidunt nobis nesciunt suscipit quam ad.
    Asperiores non, animi est, qui vero possimus, totam deleniti accusamus excepturi sint sunt. Totam, asperiores ut, sint dignissimos est quia consequatur, tempore eligendi numquam molestiae exercitationem rerum odio magni odit?
    Sint necessitatibus amet maiores minima dolorem molestias quas vero maxime, ea, est corrupti quaerat eos id reiciendis corporis rerum ullam similique distinctio. Distinctio iure veniam itaque natus, quidem explicabo quis.
    Cumque pariatur laudantium aut vel at blanditiis ad ea repellendus assumenda, modi mollitia quaerat, quo nisi impedit alias nemo et minus commodi dignissimos atque? Molestiae aliquam quod quia dolorum reiciendis.
    Ea ipsa eum quaerat quis animi odit non nesciunt, natus illum asperiores, assumenda at officia tenetur quo! Ea ipsum ratione, distinctio iure labore voluptate, omnis ad amet doloribus error veniam.
    Delectus dignissimos sunt numquam ducimus fugiat molestias non, similique sit quas voluptatibus, culpa autem qui, consectetur architecto eaque tempore hic! Odio id corrupti eaque quibusdam quidem minima dolores deleniti tempora.
    Velit dignissimos, a, in earum accusantium qui sunt exercitationem corrupti obcaecati facere numquam nam magni! Similique corporis, ex nisi, id quos magni velit nesciunt rem exercitationem aut ipsam cum obcaecati.
    Minima, vitae. Provident eaque iste sapiente nisi consequatur et doloribus aliquid consequuntur nulla ullam laborum ut ad vero quas, quisquam, neque repudiandae delectus commodi. Dolores neque expedita facere saepe! Sequi.
    Qui fugiat similique autem nostrum nemo illo reprehenderit quae, saepe adipisci natus error assumenda quibusdam repudiandae quo illum veritatis consectetur, tempore magnam laborum inventore eveniet! Dolor possimus aperiam praesentium quidem.
    Repellat dolorem voluptatem, exercitationem similique beatae maxime minus quasi tempore voluptates doloremque atque pariatur, aliquid vitae quam a rerum? Quidem, atque voluptas. Itaque, reiciendis vero error aspernatur doloremque nobis molestiae.
    Nihil doloremque necessitatibus architecto impedit quo itaque delectus, corrupti suscipit facere harum quaerat ullam earum? Maxime at esse voluptas voluptate doloribus, ad eum quis sunt atque corporis deserunt illum nemo.`,
    githubLink: 'https://github.com/project5',
    skillId: [1, 2],
  },
  {
    id: '6',
    title: 'Project 6',
    description: 'A brief description of the project',
    image:
      'https://images.unsplash.com/photo-1573495628363-04667cedc587?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    detail_description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores commodi, vel, deleniti excepturi earum vitae reiciendis beatae exercitationem sequi hic sint ratione fugiat officia quam. Omnis esse molestias facilis dolorem.
    Vel at ad nobis, itaque excepturi soluta maiores omnis in officiis. Dolor nesciunt debitis corrupti nobis tempora asperiores fugit aliquam perspiciatis repellat reprehenderit qui ducimus sint similique expedita, ad sapiente.
    Deserunt asperiores incidunt ut quos sequi beatae voluptatum velit aliquam alias magnam voluptatem porro omnis animi similique molestiae rerum, voluptate dolorum dolore ipsam perspiciatis accusamus. Adipisci sit illum eius nulla.
    Tempore voluptates itaque, nesciunt alias voluptas aut unde non fugiat hic, animi totam quo magnam, corrupti quae vitae excepturi? Iure ullam corporis deleniti dicta necessitatibus obcaecati ratione et cupiditate quas.
    Quibusdam voluptas doloremque vel commodi dolorum repellat, facere assumenda dolores ut eaque quae aspernatur ab. Ex beatae suscipit, nulla accusantium laboriosam facere quibusdam ipsam necessitatibus iure obcaecati sed placeat itaque?
    Odio at consectetur et id voluptatum cum eum nobis consequatur, ratione voluptatibus porro? Ex earum dolorem ullam sunt incidunt cupiditate quisquam similique, atque, quas inventore architecto veniam deserunt porro voluptatum.
    Molestias in voluptas quisquam, laudantium magnam aliquam! Totam labore rerum provident fuga, quaerat, deleniti consectetur nam magni expedita saepe ratione quae voluptas facilis enim blanditiis. Distinctio perferendis accusamus nam reprehenderit!
    Tenetur distinctio autem pariatur amet quibusdam ipsa deleniti tempore obcaecati veritatis ducimus. Labore consectetur, doloremque provident culpa suscipit cumque ducimus distinctio quo voluptatibus optio? Sint laudantium fugit vitae quasi tempore.
    Modi quis, eaque consequuntur recusandae, provident molestiae accusantium natus soluta cumque alias distinctio explicabo exercitationem sapiente tempora numquam, libero illo repellendus officia praesentium ipsum reprehenderit odit. Obcaecati in deserunt alias?`,
    githubLink: 'https://github.com/project6',
    skillId: [1, 2, 3],
  },
  {
    id: '7',
    title: 'Project 7',
    description: 'A brief description of the project',
    image:
      'https://images.unsplash.com/photo-1573495628363-04667cedc587?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    detail_description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa veniam sint nostrum deleniti itaque quasi doloremque asperiores. Animi voluptate quibusdam alias consequuntur et eaque architecto laborum cupiditate, deleniti non dolore.
    Nostrum provident temporibus sint quas quaerat mollitia! Non, velit doloribus. Recusandae ullam optio sit laudantium similique illum voluptas asperiores ipsum harum. Quis libero iusto rerum quae tempora, quam nostrum sequi!
    Eum, quae. Quisquam odio provident, voluptatum quibusdam sed corrupti sequi molestiae tenetur illo doloremque consectetur itaque natus nemo quos quasi. Fuga quas delectus vero recusandae corporis dolorem iure ducimus aperiam?`,
    githubLink: 'https://github.com/project7',
    skillId: [3, 4, 5],
  },
];

// export const projectsWithSkills = projects.map((project) => ({
//   ...project,
//   skills: project.skillId
//     .map((skill) =>
//       skillsWithCategory.find(
//         (s: (typeof skillsWithCategory)[number]) => s.id === skill,
//       ),
//     )
//     .filter(Boolean),
// }));

// export type ProjectWithSkills = (typeof projectsWithSkills)[number];

export default projects;
