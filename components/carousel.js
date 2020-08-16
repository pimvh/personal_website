import React from 'react'

export default function HeadCarousel () {

    function getItems() {
    return [
      {
        id: 1,
        src: '/static/garden.png',
        altText: 'Garden',
        caption: ''
      },
      {
        id: 2,
        src: '/static/snowymountains.png',
        altText: 'Sneeuwbergen',
        caption: ''
      },
      {
        id: 3,
        src: '/static/dunes.png',
        altText: 'Duinen',
        caption: ''
      },
      {
        id: 4,
        src: '/static/dog-back.png',
        altText: 'Dog',
        caption: ''
      },
      {
        id: 5,
        src: '/static/garden.png',
        altText: 'Garden',
        caption: ''
      }];
    };

    const Slide = ({src, alttext}) => (
        <div className = "pcf-carousel-item">
        <style jsx>{`
             background-image: url('${src}');
        `}</style>
        {/*alttext*/}
        </div>
      );

    return (
        <div className="pcf-carousel items-4">
        <style global jsx>{`
            /*
            * Pure CSS Framework (http://purecssframework.com)
            * Copyright 2017 Pure CSS Framework.
            * By Lowell Hausman
            * Licensed under MIT
            */

            .pcf-carousel {

                overflow: hidden;
                position: relative;
                width:100%;
                #box-sizing: border-box;
                height: 300px;
            }

            .pcf-carousel > input {
                display: none;
                position: absolute;
            }

            .pcf-carousel .moving-strip {
                position: absolute;
                width:100%;
                height: 100%;
                top: 0;
                left: 0;
                display: flex;
                flex-wrap: nowrap;
                z-index: 1;
                will-change: transform;
                transform: translateX(0);
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            .pcf-carousel .moving-strip:hover {
                animation-play-state: paused;
            }

            .pcf-carousel .pcf-carousel-item {
                width: 100%;
                height: 100%;
                position:relative;
                overflow-x: hidden;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                box-sizing: border-box;
                margin: 0 .5px 0px .5px;
            }

            .pcf-carousel-dots,
            .pcf-carousel-anime-dots {
                display: flex;
                flex-wrap: nowrap;
                position: absolute;
                width: 100%;
                justify-content: center;
                bottom: 0;
                z-index: 10;
            }

            .pcf-carousel-dots label {
                position: relative;
            }

            .pcf-carousel-dots label,
            .pcf-carousel-anime-dots div {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background-color: rgba(200,200,200,.8);
                margin: 5px;
            }

            .pcf-carousel-dots label:after {
                content: "";
                background-color: transparent;
                display: block;
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                top: 0;
                left: 0;
            }

            .pcf-carousel label.btn-play {
                display: block;
                width: 16px;
                height:16px;
                border-radius: 16px;
                border:1px solid rgba(255,255,255,.5);
                position: absolute;
                margin: 0;
                z-index: 3;
                background-color: rgba(0,0,0,.5);
                cursor:pointer;
                bottom: -100%;
                left: calc(50% - 8px);
                transition: all 1s ease-in-out;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
                animation-name: pcf-carousel-play-btn;
                animation-duration: 30s;
            }

            .pcf-carousel label.btn-play:hover {
                border:1px solid rgba(255,255,255,.8);
                z-index: 3;
                background-color: rgba(0,0,0,.9);
                animation-name: none;
            }

            @keyframes pcf-carousel-play-btn {
                0% { opacity: 1; }
                40% { opacity: 1; }
                50% { opacity: .3; }
                60% { opacity: 1; }
                100% { opacity: 1; }
            }

            .pcf-carousel label.btn-play:after {
                content: "";
                width: 0;
                height: 0;
                border-left: 6px solid rgba(255,255,255,.8);
                border-bottom: 6px solid transparent;
                border-top: 6px solid transparent;
                position: absolute;
                top: 2px;
                left: 6px;
                z-index: 3;
            }

            .pcf-carousel-anime-dots {
                pointer-events: none;
            }

            .pcf-carousel-dots label {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background-color: rgba(200,200,200,.8);
                margin: 5px;
                cursor: pointer;
            }

            .pcf-carousel-anime-dots div {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background-color: transparent;
                margin: 5px;
                cursor: pointer;
            }

            #carousel-start-1:checked ~ .pcf-carousel-dots label:nth-child(1):after,
            #carousel-start-2:checked ~ .pcf-carousel-dots label:nth-child(2):after,
            #carousel-start-3:checked ~ .pcf-carousel-dots label:nth-child(3):after,
            #carousel-start-4:checked ~ .pcf-carousel-dots label:nth-child(4):after,
            #carousel-start-5:checked ~ .pcf-carousel-dots label:nth-child(5):after,
            #carousel-start-6:checked ~ .pcf-carousel-dots label:nth-child(6):after,
            #carousel-start-7:checked ~ .pcf-carousel-dots label:nth-child(7):after,
            #carousel-start-8:checked ~ .pcf-carousel-dots label:nth-child(8):after {
                background-color: white;
                z-index: 20;
            }

            #carousel-start-1:checked ~ label.btn-play,
            #carousel-start-2:checked ~ label.btn-play,
            #carousel-start-3:checked ~ label.btn-play,
            #carousel-start-4:checked ~ label.btn-play,
            #carousel-start-5:checked ~ label.btn-play,
            #carousel-start-6:checked ~ label.btn-play,
            #carousel-start-7:checked ~ label.btn-play,
            #carousel-start-8:checked ~ label.btn-play {
                bottom: 20px;
                transition: all 1s ease-in-out;
            }

            #carousel-start-1:checked ~ .moving-strip {
                animation-name: pcf-carousel;
                transform: translateX(0);
            }

            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(1),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(2),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(3),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(4),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(5),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(6),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(7),
            .pcf-carousel:hover .pcf-carousel-anime-dots div:nth-child(8) {
                animation-play-state: paused;
            }

            .pcf-carousel .pcf-carousel-dots:hover ~ .moving-strip {
                animation-play-state: paused;
            }

            #carousel-start-1:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-2:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-3:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-4:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-5:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-6:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-7:checked ~ .pcf-carousel-anime-dots div,
            #carousel-start-8:checked ~ .pcf-carousel-anime-dots div {
                animation-name: pcf-carousel-clear;
            }

            /* 4 Items*/
            .pcf-carousel.items-4 .moving-strip {
                width: 500%;
            }

            .pcf-carousel.items-4 #carousel-start-1:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(0);
            }

            .pcf-carousel.items-4 #carousel-start-2:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-20%);
            }

            .pcf-carousel.items-4 #carousel-start-3:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-40%);
            }

            .pcf-carousel.items-4 #carousel-start-4:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-60%);
            }


            .pcf-carousel.items-4 .moving-strip {
                animation-name: pcf-carousel-4;
                animation-duration: 60s;
            }


            @keyframes pcf-carousel-4 {
                0% { transform: translateX(0); }
                15% { transform: translateX(0); }

                20% { transform: translateX(-20%); }
                40% { transform: translateX(-20%); }

                45% { transform: translateX(-40%); }
                65% { transform: translateX(-40%); }

                70% { transform: translateX(-60%); }
                90% { transform: translateX(-60%); }

                95% { transform: translateX(-80%); }
                100% { transform: translateX(-80%); }
            }


            .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(1) {
                animation-name: pcf-carousel-dots-4-items-dots-1;
                animation-duration: 5s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-4-items-dots-1 {
                0% { background-color: white; }
                15% { background-color: white; }

                20% { background-color: transparent; }
                40% { background-color: transparent; }

                45% { background-color: transparent; }
                65% { background-color: transparent; }

                70% { background-color: transparent; }
                90% { background-color: transparent; }

                95% { background-color: white; }
                100% { background-color: white; }
            }

            .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(2) {
                animation-name: pcf-carousel-dots-4-items-dots-2;
                animation-duration: 18s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-4-items-dots-2 {
                0% { background-color: transparent; }
                15% { background-color: transparent; }

                20% { background-color: white; }
                40% { background-color: white; }

                45% { background-color: transparent; }
                65% { background-color: transparent; }

                70% { background-color: transparent; }
                90% { background-color: transparent; }

                95% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(3) {
                animation-name: pcf-carousel-dots-4-items-dots-3;
                animation-duration: 18s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-4-items-dots-3 {
                0% { background-color: transparent; }
                15% { background-color: transparent; }

                20% { background-color: transparent; }
                40% { background-color: transparent; }

                45% { background-color: white; }
                65% { background-color: white; }

                70% { background-color: transparent; }
                90% { background-color: transparent; }

                95% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(4) {
                animation-name: pcf-carousel-dots-4-items-dots-4;
                animation-duration: 30s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-4-items-dots-4 {
                0% { background-color: transparent; }
                15% { background-color: transparent; }

                20% { background-color: transparent; }
                40% { background-color: transparent; }

                45% { background-color: transparent; }
                65% { background-color: transparent; }

                70% { background-color: white; }
                90% { background-color: white; }

                95% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-4 #carousel-start-1:checked ~ .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(1),
            .pcf-carousel.items-4 #carousel-start-2:checked ~ .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(2),
            .pcf-carousel.items-4 #carousel-start-3:checked ~ .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(3),
            .pcf-carousel.items-4 #carousel-start-4:checked ~ .pcf-carousel.items-4 .pcf-carousel-anime-dots div:nth-child(4) {
                animation-name: pcf-carousel-clear;
            }

            /* 5 Items*/
            .pcf-carousel.items-5 .moving-strip {
                width: 600%;
            }

            .pcf-carousel.items-5 #carousel-start-1:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(0);
            }

            .pcf-carousel.items-5 #carousel-start-2:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-16.667%);
            }

            .pcf-carousel.items-5 #carousel-start-3:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-33.34%);
            }

            .pcf-carousel.items-5 #carousel-start-4:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-50%);
            }

            .pcf-carousel.items-5 #carousel-start-5:checked ~ .moving-strip {
                animation-name: pcf-carousel-clear;
                transform: translateX(-66.666%);
            }

            .pcf-carousel.items-5 .moving-strip {
                animation-name: pcf-carousel-5;
                animation-duration: 30s;
            }


            @keyframes pcf-carousel-5 {
                0% { transform: translateX(0); }
                12% { transform: translateX(0); }

                18% { transform: translateX(-16.667%); }
                28% { transform: translateX(-16.667%); }

                34% { transform: translateX(-33.34%); }
                48% { transform: translateX(-33.34%); }

                54% { transform: translateX(-50%); }
                68% { transform: translateX(-50%); }

                74% { transform: translateX(-66.666%); }
                88% { transform: translateX(-66.666%); }

                94% { transform: translateX(-83.333%); }
                100% { transform: translateX(-83.333%); }

            }


            .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(1) {
                animation-name: pcf-carousel-dots-5-items-dots-1;
                animation-duration: 30s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-5-items-dots-1 {

                0% { background-color: white; }
                12% { background-color: white; }

                18% { background-color: transparent; }
                28% { background-color: transparent; }

                34% { background-color: transparent; }
                48% { background-color: transparent; }

                54% { background-color: transparent; }
                68% { background-color: transparent; }

                74% { background-color: transparent; }
                88% { background-color: transparent; }

                94% { background-color: white; }
                100% { background-color: white; }

            }

            .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(2) {
                animation-name: pcf-carousel-dots-5-items-dots-2;
                animation-duration: 30s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-5-items-dots-2 {
                0% { background-color: transparent; }
                12% { background-color: transparent; }

                18% { background-color: white; }
                28% { background-color: white; }

                34% { background-color: transparent; }
                48% { background-color: transparent; }

                54% { background-color: transparent; }
                68% { background-color: transparent; }

                74% { background-color: transparent; }
                88% { background-color: transparent; }

                94% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(3) {
                animation-name: pcf-carousel-dots-5-items-dots-3;
                animation-duration: 30s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-5-items-dots-3 {
                0% { background-color: transparent; }
                12% { background-color: transparent; }

                18% { background-color: transparent; }
                28% { background-color: transparent; }

                34% { background-color: white; }
                48% { background-color: white; }

                54% { background-color: transparent; }
                68% { background-color: transparent; }

                74% { background-color: transparent; }
                88% { background-color: transparent; }

                94% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(4) {
                animation-name: pcf-carousel-dots-5-items-dots-4;
                animation-duration: 30s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-5-items-dots-4 {
                0% { background-color: transparent; }
                12% { background-color: transparent; }

                18% { background-color: transparent; }
                28% { background-color: transparent; }

                34% { background-color: transparent; }
                48% { background-color: transparent; }

                54% { background-color: white; }
                68% { background-color: white; }

                74% { background-color: transparent; }
                88% { background-color: transparent; }

                94% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(5) {
                animation-name: pcf-carousel-dots-5-items-dots-5;
                animation-duration: 30s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes pcf-carousel-dots-5-items-dots-5 {
                0% { background-color: transparent; }
                12% { background-color: transparent; }

                18% { background-color: transparent; }
                28% { background-color: transparent; }

                34% { background-color: transparent; }
                48% { background-color: transparent; }

                54% { background-color: transparent; }
                68% { background-color: transparent; }

                74% { background-color: white; }
                88% { background-color: white; }

                94% { background-color: transparent; }
                100% { background-color: transparent; }
            }

            .pcf-carousel.items-5 #carousel-start-1:checked ~ .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(1),
            .pcf-carousel.items-5 #carousel-start-2:checked ~ .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(2),
            .pcf-carousel.items-5 #carousel-start-3:checked ~ .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(3),
            .pcf-carousel.items-5 #carousel-start-4:checked ~ .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(4),
            .pcf-carousel.items-5 #carousel-start-4:checked ~ .pcf-carousel.items-5 .pcf-carousel-anime-dots div:nth-child(5){
                animation-name: pcf-carousel-clear;
            }

            @media all and (max-width: 800px) {

                .pcf-carousel {
                    height: 200px;
                }

            }
        `}</style>
        	{/* <!-- Hidden radio control inputs --> */}
        	<input type="radio" id="carousel-play" 	  name="pcf-carousel-3" defaultChecked></input>
        	<input type="radio" id="carousel-start-1" name="pcf-carousel-3"></input>
        	<input type="radio" id="carousel-start-2" name="pcf-carousel-3"></input>
            <input type="radio" id="carousel-start-3" name="pcf-carousel-3"></input>
            <input type="radio" id="carousel-start-4" name="pcf-carousel-3"></input>

        	{/* <!-- Pause/play button --> */}
        	<label htmlFor="carousel-play" className="btn-play" title="Play"></label>

        	{/* <!-- Slide jump dots --> */}
        	<div className="pcf-carousel-dots">
        		<label htmlFor="carousel-start-1"></label>
        		<label htmlFor="carousel-start-2"></label>
                <label htmlFor="carousel-start-3"></label>
                <label htmlFor="carousel-start-4"></label>
        	</div>

        	<div className="pcf-carousel-anime-dots">
        		<div></div>
        		<div></div>
                <div></div>
                <div></div>
        	</div>

        	{/* <!-- Slides, repeat 1st and last slide --> */}
        	<div className="moving-strip">
                {   getItems().map(item => (
                    <Slide key={item.id} src={item.src} alttext={item.altText}/>
                ))}
        	</div>
        </div>
    );
}