var openBlank = '_blank';

$(document).ready(function () {
    // Slide toggles
    $("#coding").on('click', function () {
        $('.coding-content').slideToggle();
    });
    $("#language").on('click', function () {
        $('.language-content').slideToggle();
    });
    $("#life").on('click', function () {
        $('.life-content').slideToggle();
    });
    // Window.open stuffs
    $('.mandarin').on('click', function () {
        window.open('https://sarahsradio.wordpress.com/category/chinese/', openBlank)
    }); // Refer to Mandarin blog
    $("#djangoweb").on('click', function () {
        window.open('https://sarahsradio.wordpress.com/2022/02/16/talkject1/', openBlank);
    }); // Refer to talkject
    $("#certf").on('click', function () {
        window.open('https://sarahsradio.wordpress.com/2022/02/16/talkject1/', openBlank);
    }); // Refer to certification (not implemented)
    $("#christmas").on('click', function () {
        window.open('https://github.com/sarahT04/small_games', openBlank);
    }); // First project
    $("#wordpress").on('click', function () {
        openBlog();
    }); // Refer to blog
    $("#github").on('click', function () {
        openGit();
    }); // Refer to git
    $('#music').on('click', function () {
        openSpotify(); // Spotify
    });
    // Clicks
    $("#homenav").on('click', homeNav);
    $("#projectsnav").on('click', projectsNav);
    $("#gallerynav").on('click', galleryNav);
    $('#click-gallery').click(function () { galleryNav(); return false; });
});

function homeNav() {
    $('#homenav').addClass('active');
    $('#homediv').removeAttr('hidden');
    $('#projectsnav').removeClass('active');
    $('#gallerynav').removeClass('active');
    $('#projectsdiv').attr('hidden', true);
    $('#gallerydiv').attr('hidden', true);
};

function projectsNav() {
    $('#homenav').removeClass('active');
    $('#homediv').attr('hidden', true);
    $('#projectsnav').addClass('active');
    $('#gallerynav').removeClass('active');
    $('#projectsdiv').removeAttr('hidden')
    $('#gallerydiv').attr('hidden', true);
};

function galleryNav() {
    $('#homenav').removeClass('active');
    $('#homediv').attr('hidden', true);
    $('#projectsnav').removeClass('active');
    $('#gallerynav').addClass('active');
    $('#projectsdiv').attr('hidden', true);
    $('#gallerydiv').removeAttr('hidden');
};

function openGit() {
    window.open('https://github.com/sarahT04', openBlank);
};
function openBlog() {
    window.open('https://sarahsradio.wordpress.com', openBlank);
};
function openSpotify() {
    window.open('https://open.spotify.com/playlist/10NIi3CC2A8KFO4S2EJxkJ?si=cf4980bb209d4369', openBlank);
};