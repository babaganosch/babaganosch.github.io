const portfolio_item_types = {
    VIDEO: 0,
    IMAGE: 1
}

function tag( text, style = '' ) {
    return { style: style, text: text };
}

const portfolio_items = [
    {
        type: portfolio_item_types.VIDEO,
        name: `Mareld`,
        menu: `Mareld`,
        tags: [ tag('Game'), tag('GML'), tag('WIP', 'bg-blue') ],
        link: `/mareld.html`,
        src: `/static/content/mareld.mp4`,
        heading: `Turn-Based RPG`,
        text: `RPG based on nordic mythology with grid like movement and turn based combat.`,
        date: `2024`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `NesScape`,
        menu: `NES.Emulator`,
        tags: [ tag('Software'), tag('C++'), tag('WIP', 'bg-blue') ],
        link: `https://github.com/babaganosch/nes_emulator`,
        src: `/static/content/NesScape.mp4`,
        heading: `NES 8bit Hardware Emulator`,
        text: `A Nintendo Entertainment System (NES) emulator implemented in C++ that aims to provide cycle accurate emulation of the original NTSC NES hardware.`,
        date: `2023`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `GameMaker Scaffolding`,
        menu: `GM.Scaffolding`,
        tags: [ tag('Open Source'), tag('Tool'), tag('GML'), tag('WIP', 'bg-blue') ],
        link: `https://github.com/babaganosch/GameMakerScaffolding`,
        src: `/static/content/scaffolding.mp4`,
        heading: `GMS Template`,
        text: `GameMaker Scaffolding is a template for 2D low-res tile-based games in GameMaker Studio. It contains a great deal of modules to facilitate workflow, efficient design and rendering pipeline.`,
        date: `2023`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Illfated`,
        menu: `Illfated`,
        tags: [ tag('Game'), tag('GML') ],
        link: `/illfated.html`,
        src: `/static/content/illfated.mp4`,
        heading: `Procedural Generated Dungeons`,
        text: `Roguelike dungeon crawler that takes inspiration from classic retro games as well as more modern roguelikes.`,
        date: `2016 - 2018`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Minecart Maniac`,
        menu: `Minecart.Maniac`,
        tags: [ tag('Android'), tag('iOS'), tag('Game'), tag('GML') ],
        link: `https://play.google.com/store/apps/details?id=info.larsandersson.minecartmaniac`,
        src: `/static/content/minecart.mp4`,
        heading: `Infinite Tunnel Runner`,
        text: `Mobile game inspired by classics such as Flappy Bird and Temple Run. Available at Google Play Store (Android) and App Store (iOS).`,
        date: `2017 - 2019`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Abaddon`,
        menu: `Abaddon`,
        tags: [ tag('Game'), tag('GML'), tag('WIP', 'bg-blue') ],
        link: `/abaddon.html`,
        src: `/static/content/abaddon.mp4`,
        heading: `Infinite World Sandbox`,
        text: `Early stages of development. Low-res RPG inspired by pixelart by MrmoTarius.`,
        date: `2023`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Frogger Recreation`,
        menu: `Frogger`,
        tags: [ tag('SDL'), tag('Engine'), tag('C++') ],
        link: `https://github.com/babaganosch/Frogger`,
        src: `/static/content/frogger.mp4`,
        heading: `Classic Frogger With A Twist`,
        text: `Project in course <span class="text-highlight">TDA572 - Game Engine Architecture</span> at Chalmers. Purpose was to create our own primitive game engine in C++, and recreate a classic arcade game with slight modifications
                    within this engine. In this version of Frogger a horror element is added, and the graphical art style mimicing a CRT-monitor is implemented CPU-side.`,
        date: `2020`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `GPU-accelerated particles`,
        menu: `GPU.Particles`,
        tags: [ tag('WebGL'), tag('GLSL'), tag('Software'), tag('NodeJS') ],
        link: `https://larsandersson.info/DATX05/`,
        src: `/static/content/particles.mp4`,
        heading: `Master's Thesis @ Chalmers`,
        text: `Exploring the advantages (and disadvantages) of WebGL extensions within the context of GPU-accelerated particle systems, as a part of my master thesis at Chalmers.`,
        date: `2021`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Pole Position`,
        menu: `Pole.Position`,
        tags: [ tag('Game'), tag('GML') ],
        link: `/polepos.html`,
        src: `/static/content/poleposition.mp4`,
        heading: `Pseudo-3D`,
        text: `Retro racing game in pseudo-3D, heavily inspired by old arcade classics such as Pole Position.`,
        date: `2020`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Notification System`,
        menu: `Signals`,
        tags: [ tag('Open Source'), tag('Tool'), tag('GML') ],
        link: `https://github.com/babaganosch/NotificationSystem`,
        src: `/static/content/notifications.mp4`,
        heading: `Signals within GMS 2.3+`,
        text: `Lightweight framework for signals in GameMaker Studio with features such as callbacks and channels.`,
        date: `2020`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `ACG Project`,
        menu: `Car.Game`,
        tags: [ tag('OpenGL'), tag('GLSL'), tag('Engine'), tag('C++') ],
        link: `https://github.com/babaganosch/OpenGL_Sandbox`,
        src: `/static/content/cargame.mp4`,
        heading: `Advanced Computer Graphics`,
        text: `Project to implement advanced graphical concepts from reasearch papers in the course <span class="text-highlight">DAT205 - Advanced Computer Graphics</span> at Chalmers.
                    The final product consisted of a sandbox racing game, showcasing a couple of techniques from reasearch papers we studied during the course.`,
        date: `2020`
    },
    {
        type: portfolio_item_types.IMAGE,
        name: `Objective Tiny-Timber<span class="hidden-on-mobile"> : OTTO</span>`,
        menu: `OTTO`,
        tags: [ tag('Flex'), tag('Bison'), tag('Transpiler'), tag('Language'), tag('C') ],
        link: `https://hdl.handle.net/20.500.12380/300029`,
        src: `/static/content/bthesis.jpg`,
        heading: `Bachelor's Thesis @ Chalmers`,
        text: `Creation of an object-oriented language and a precompiler for it, as an alternative to real-time C. The purpose was to improve and facilitate laboratory assignments
                   within the course <span class="text-highlight">EDA223 - Real-Time Systems</span> at Chalmers, and the University of Gothenburg.`,
        date: `2019`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Traffic Predictions With AI`,
        menu: `AI.Traffic`,
        tags: [ tag('ML'), tag('MongoDB'), tag('Tool'), tag('Python') ],
        link: `/static/content/Projektkurs_Rapport.pdf`,
        src: `/static/content/monitor.mp4`,
        heading: `Traffic Monitoring and Visualization`,
        text: `Collection of real-time data over Gothenburg, visualized on a webapplication with AI-based predictions of future traffic situations. Project in course
                   <span class="text-highlight">DAT066 - Project</span> at Chalmers, and in collaboration with Cybercom.`,
        date: `2018`
    },
    {
        type: portfolio_item_types.VIDEO,
        name: `Shape Arena`,
        menu: `Shape.Arena`,
        tags: [ tag('Multiplayer'), tag('Game'), tag('Java') ],
        link: `https://github.com/babaganosch/ShapeArena`,
        src: `/static/content/shapearena.mp4`,
        heading: `Multiplayer Game`,
        text: `Agar.io inspired Java multiplayer game developed in a team of five, as a project in the course <span class="text-highlight">DAT055 - Object Oriented Applications</span> at Chalmers.`,
        date: `2018`
    }/*,
    {
        type: portfolio_item_types.IMAGE,
        name: `Sausage Clothing`,
        menu: `Sausage`,
        tags: [ tag('Illustrator'), tag('Photoshop') ],
        link: `https://sausageclothing.se/`,
        src: `/static/content/sausage.jpg`,
        heading: `Custom Prints`,
        text: `Clothing with custom prints by me. Some designs is heavily inspired by stuff I saw online at the time, and some is just replications of famous logos, often with a twist.`,
        date: `2014`
    }*/
];

function string_template(strings, ...keys) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach((key, i) => {
        const value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

function play_video( self )
{
    $("video", self).get(0).play();
}

function pause_video( self )
{
    $("video", self).get(0).pause();
}

const  video_card_template = string_template`
<div class="card"> 
    <div class="card-header">
        <div class="card-tags-container"></div>
        <video autoplay muted loop playsinline class="card-video">
            <source src="${"src"}" type="video/mp4">
        </video>
    </div>
    <div class="card-body">
        <h1>${"name"}</h1>
        <p>${"heading"}</p>
        <p>${"text"}</p>
    </div>
    <div class="card-footer">
        ${"date"}
    </div>
</div>`;

const  image_card_template = string_template`
<div class="card"> 
    <div class="card-header">
        <div class="card-tags-container"></div>
        <figure style="background-image: url('${"src"}');" class="card-figure"></figure>
    </div>
    <div class="card-body">
        <h1>${"name"}</h1>
        <p>${"heading"}</p>
        <p>${"text"}</p>
    </div>
    <div class="card-footer">
        ${"date"}
    </div>
</div>`;

const tv_video = document.getElementById('tv-video');
const tv_image = document.getElementById('tv-image');
const tv_source = document.getElementById('tv-source');

function set_video( src, on_off )
{
    NOISE_ON = on_off;
    tv_image.style.backgroundImage = "url('" + src + "')";
    tv_source.setAttribute('src', src);
    tv_video.load();
}

function show_menu( id )
{
    $('#menu-' + String(id)).removeClass('hidden');
}

function hide_menu( id )
{
    $('#menu-' + String(id)).addClass('hidden');
}

const portfolio_menu = $('#menu-2-items');
const portfolio = $('#portfolio');
portfolio_items.forEach(function( item ) {
    let card = undefined;
    switch (item.type)
    {
        case portfolio_item_types.VIDEO:
        {
            card = $(video_card_template( item ));
            if (window.innerWidth > 768)
            {
                $("video", card).get(0).autoplay = false;
                $(card).on( "mouseenter", function() { play_video(this);  });
                $(card).on( "mouseleave", function() { pause_video(this); });
            }
        } break;
        case portfolio_item_types.IMAGE:
        {
            card = $(image_card_template( item ));
        } break;
    }
    card.on( "click", function() { location.href=item.link; })
    item.tags.forEach(function( tag ) {
        $(".card-tags-container", card).append( String.raw`<span class="card-tag ${tag.style}">${tag.text}</span>` );
    });

    portfolio.append( `<!-- ${item.menu} -->` )
    portfolio.append( card );
    portfolio_menu.append( String.raw`<a onmouseenter="set_video('${item.src}', false);" onmouseleave="set_video('', true)">${item.menu.toUpperCase()}..................................</a>` );
});