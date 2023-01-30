// Page title
var pageTitle = document.head.getElementsByTagName('title');

// Create image links
const artDirectory = "photos/paintings/";

var art_names = ['mother.jpeg', 'naomi_basu_mandarava.jpeg', 'cow.jpeg', 'naomi_basu_dawon1.jpeg', 'naomi_basu_dawon2.jpeg', 'nayikow.jpeg', 'ma.jpeg', 'naomi_basu_pops.jpeg', 'pops_dinner.jpeg'];
var project_names = ['earthwiki.html', 'forcefield.html', 'sketchar.html'];
var project_dict = {
  'earthwiki.html': 'epgifs/earthWiki.gif',
  'forcefield.html': 'epgifs/fade.gif',
  'sketchar.html': 'sketchAR.gif',
};

// BLOCK COLUMN SETUP
var colCount = 0;
var colWidth = 0;
var margin = 25;
var windowWidth = 0;
var blocks = [];  

function setupBlocks() {
  windowWidth = $(window).width();
  colWidth = $('.block').outerWidth();
  // colWidth = Math.floor(windowWidth/3);
  blocks = [];
  colCount = Math.floor(windowWidth/(colWidth+margin*3));
  for(var i = 0; i < colCount; i++) {
    blocks.push(margin);
  }
  positionBlocks();
}

function positionBlocks() {
  $('.block').each(function(){
    var min = Array.min(blocks);
    var index = $.inArray(min, blocks);
    var leftPos = margin+(index*(colWidth+margin));
    $(this).css({
      'left':leftPos+'px',
      'top':min+'px'
    });
    // blocks[index] = min+$(this).outerHeight()+margin;
    blocks[index] = min+$(this).outerHeight(true)+margin;
  }); 
}

Array.min = function(array) {
  return Math.min.apply(Math, array);
};

// Remove all content within an element
function clearElement(id) {
  document.getElementById(id).innerHTML = "";
}


// LOAD PAGES
function load_projects() {
  if (pageTitle == "projects") {
    return;
  }
  pageTitle = "projects";
  clearElement('content');

  for (const element of project_names) {
    var link = document.getElementById('content').appendChild(document.createElement('a'));
    link.setAttribute('href', 'projectPages/' + element);
    var figure = link.appendChild(document.createElement('figure'));
    var image = figure.appendChild(document.createElement('img'));
    image.setAttribute('class', 'block fade');
    image.setAttribute('alt', 'Naomi Basu');
    image.setAttribute('src', 'projectPages/' + project_dict[element]);
  }
  setTimeout(setupBlocks, 400);
} 

function load_art() {
  if (pageTitle == "art") {
    return;
  }
  pageTitle = "art";
  clearElement('content');

  for (const element of art_names) {
    var link = document.getElementById('content').appendChild(document.createElement('a'));
    link.setAttribute('href', artDirectory + element);
    var figure = link.appendChild(document.createElement('figure'));
    var image = figure.appendChild(document.createElement('img'));
    image.setAttribute('class', 'block fade');
    image.setAttribute('alt', 'Naomi Basu')
    image.setAttribute('src', artDirectory + element);
  }
  setTimeout(setupBlocks, 400);
} 

function load_about() {
  if (pageTitle == "about") {
    return;
  }
  pageTitle = "about";
  clearElement('content');

  var content = document.getElementById('content');
  var contact = content.appendChild(document.createElement('p'));
  contact.setAttribute('id', 'contact');
  contact.innerHTML = 'For commissions, collaborations and general inquiries, drop me an email at <a href="mailto:naomibasu@gmail.com"><i>naomibasu[at]gmail.com</i></a>.';
  setTimeout(setupBlocks, 400);
} 
