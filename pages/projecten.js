import Main from '../components/Main'
import Markdown from 'react-markdown';
import * as _ from "lodash";

export default () => (
    <Main title='Projecten'>
    <div className = 'project_container'>
    <Markdown
      source={`Hieronder is een lijst van verschillende projecten die ik tot nu toe gecodeerd heb te vinden. Klik op een van de buttons om een project te openen.
`} />
    </div>

    {getProjects().map(project => (
        <Project key={project.id} project={project} />
    ))}


    <div className="panel">
    	<input type="checkbox" className="panel-close-checkbox hide" id="panel-close-3"></input>
    	<div className="panel-header">
    		Panel Header
    		<div className="panel-btn-area clearfix">
    			<label className="panel-close" htmlFor="panel-close-3">
    				>
    			</label>

    		</div>
    	</div>
    	<div className="panel-body">
    		Panel Body
    	</div>
    </div>

    </Main>
);

function getProjects() {
var arr = [
    {id: '1', button_id: "toggler_next", title: "Een website op basis van Next.js", img_link: "static/nextjs.png", img_alt: "Next.js",
    content: `Met behulp van [Next.js][1], een react.js framework, heb ik deze website gemaakt. Deze website is geschreven in JavaScript met behulp van [React][2] en [Reactstrap (Bootstrap voor React)][3].
[1]: <https://nextjs.org/> "Next.js"
[2]: <https://reactjs.org/> "React.js"
[3]: <https://reactstrap.github.io/> "Reactstrap"`},

    {id: '2', button_id: "toggler_telgrm", title: "Een Telegram-bot in Python genaamd Rob Ot", img_link: "static/pythontelegrambot.png", img_alt: "Python Telegram wrapper",
    content: `Op Telegram heb ik een bot gemaakt, met behulp van de [Python-telegram-bot wrapper][1]. Op het moment kan deze ondere andere het weer opzoeken. De bot is bereikbaar met Telegram op [@Rob_Ot][3]. Verder is de code [beschikbaar via Github][2].
[1]: <https://python-telegram-bot.org/> "Python Telegram Wrapper"
[2]: <https://github.com/pimvh/telegrambot_simple> "Simple Telegram Bot"
[3]: <https://t.me/Rob_Ot_bot> "@Rob_Ot_bot"`}
];

const sorted = _.sortBy(arr, 'title');

return sorted;
};

const Project = ({ project }) => (
<div color="primary" id={project.button_id} className="project_button" >
{project.title}
<div  className="project_card">
    <img src = {project.img_link} alt = {project.img_alt} className="project_img" />
    <div className="cardtitle"> {project.title}</div>
    <div className="Project_Text">
    <Markdown source={project.content} />
    </div>
</div>
</div>);

/*

<div className="tab-elements tabs-vertical clearfix">
<input type="radio" id="tab-vert-1" name="tab-elements-vert"></input>
<input type="radio" id="tab-vert-2" name="tab-elements-vert"></input>
<input type="radio" id="tab-vert-3" name="tab-elements-vert"></input>
<input type="radio" id="tab-vert-4" name="tab-elements-vert"></input>
<input type="radio" id="tab-vert-5" name="tab-elements-vert"></input>
<input type="radio" id="tab-vert-6" name="tab-elements-vert"></input>
<div>
    <div className="tab-btns">
        <label htmlFor="tab-vert-1" class="btn">Tab 1</label>
        <label htmlFor="tab-vert-2" class="btn">Tab 2</label>
        <label htmlFor="tab-vert-3" class="btn">Tab 3</label>
        <label htmlFor="tab-vert-4" class="btn">Tab 4</label>
        <label htmlFor="tab-vert-5" class="btn">Tab 5</label>
        <label htmlFor="tab-vert-6" class="btn">Tab 6</label>
    </div>
</div>
<div className="tab-info-wrap">
    <div className="tab-info">
        <h3>Information for tab 1</h3>
        Another line of information.
    </div>
    <div className="tab-info">
        <h3>Information for tab 2</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra pharetra quam, in imperdiet dui iaculis sit amet. Sed ut elit a magna lobortis viverra. Nullam sed lobortis orci, in suscipit nulla. Proin imperdiet massa ac nunc lacinia rhoncus. Nullam at risus in orci semper tincidunt quis quis mi. Morbi sit amet finibus urna, eu tincidunt nibh. Vivamus non lobortis odio.
        Nullam ornare et enim nec placerat. In commodo commodo maximus. Aenean posuere tortor nec metus fermentum semper. Nulla facilisi. Duis rutrum, ante in ultricies hendrerit, sem nibh euismod purus, nec imperdiet diam sem eget lorem. Pellentesque vel iaculis lectus. Cras fermentum vel lacus vel tincidunt. Donec vehicula diam ut eros gravida, ac porttitor justo viverra. Donec at mi at nisi dapibus egestas at nec quam.
        Phasellus eget rutrum purus. Maecenas eu ultricies lectus. Cras neque nunc, fringilla nec vehicula eu, tempor ac nisl. Suspendisse ac massa in turpis molestie fermentum. Aliquam ultricies porttitor ligula sit amet placerat. Proin urna lectus, eleifend ac sodales id, congue sit amet lorem. Nulla faucibus, tortor nec condimentum vestibulum, nisi lacus pulvinar libero, ut sollicitudin eros diam vel velit. Nunc feugiat eros ac convallis molestie.
        Morbi ac arcu ultrices, malesuada sapien sit amet, lobortis nunc. Nulla at fringilla augue, et tempus dui. Proin at lorem faucibus dolor venenatis imperdiet. Fusce et augue sit amet elit rutrum convallis eu quis leo. Fusce aliquam mauris vitae vehicula pellentesque. Quisque ullamcorper, nisi sit amet aliquet pretium, metus dui eleifend turpis, ac semper nulla eros vitae elit. Integer venenatis mauris in leo egestas, a posuere mi pellentesque. Nullam pellentesque interdum enim eget faucibus. Sed non blandit lectus. Pellentesque nec commodo nibh. Etiam faucibus molestie ullamcorper. Etiam dolor velit, varius vitae erat sit amet, pellentesque gravida ante. Aliquam eget augue ac est placerat facilisis vel quis enim. Nunc tincidunt in dolor et sollicitudin. Nunc ac commodo augue, vel aliquet nisi. In rutrum sodales odio sed varius.
    </div>
    <div className="tab-info">
        <h3>Information for tab 3</h3>
        Another line of information.
        Another line of information.
    </div>
    <div className="tab-info">
        <h3>Information for tab 4</h3>
        Another line of information.
    </div>
    <div className="tab-info">
        <h3>Information for tab 5</h3>
        Another line of information.
    </div>
    <div className="tab-info">
        <h3>Information for tab 6</h3>
        Another line of information.
    </div>
</div>
</div>
);

<UncontrolledCollapse toggler={"#".concat(project.button_id)}>

*/
