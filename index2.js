// Page title
var pageTitle = document.head.getElementsByTagName('title');

// Create image links
const artDirectory = "images/paintings/";
const thumbnailDirectory = "images/thumbnails/";
var art_list = [
  {
    filename: 'Naomi_Basu_Bushido_2023.jpeg',
    title: 'Bushido',
    medium: 'Acrylic, Mineral Pigments, and Resin on Wood',
    dimensions: '12 x 12 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_Vajra_2023.jpeg',
    title: 'Vajra',
    medium: 'Acrylic, Mineral Pigments, and Resin on Wood',
    dimensions: '12 x 12 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_VapeNation_2023.jpeg',
    title: 'VapeNation',
    medium: 'Acrylic, Mineral Pigments, and Resin on Wood',
    dimensions: '11.5 x 11.5 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_EnglishBreakfast_2023.jpeg',
    title: 'English Breakfast',
    medium: 'Acrylic, Indigo, Tea, Gold Leaf, and Resin on Wood',
    dimensions: '11.5 x 11.5 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_Metamorphose_2023.jpeg',
    title: 'Metamorphose',
    medium: 'Acrylic, Ground Indigo, and Resin on Wood',
    dimensions: '28 x 28 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_Milk_Bath_2023.jpeg',
    title: 'Milk Bath',
    medium: 'Oil and Muslin on Unstretched Canvas',
    dimensions: '36 x 42 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_BornInALakeOfTears_2022.jpeg',
    title: 'Born in a Lake of Tears',
    medium: 'Acrylic and Recycled Sari on Unstretched Canvas',
    dimensions: '37.5 x 42 inches',
    year: '2022'
  },
  {
    filename: 'Naomi_Basu_SkyDancer_2022.jpeg',
    title: 'Sky Dancer',
    medium: 'Acrylic on Canvas',
    dimensions: '28 x 28 inches',
    year: '2022'
  },
  {
    filename: 'Naomi_Basu_DawonI_2021.jpeg',
    title: 'Dawon (I)',
    medium: 'Acrylic and Resin on Wood',
    dimensions: '17 x 17 inches',
    year: '2021'
  },
  {
    filename: 'Naomi_Basu_DawonII_2021.jpeg',
    minImage: 'Naomi_Basu_DawonII_2021.jpeg',
    title: 'Dawon (II)',
    medium: 'Acrylic and Resin on Wood',
    dimensions: '17 x 17 inches',
    year: '2021'
  },
  {
    filename: 'Naomi_Basu_Nayikows_2021.jpeg',
    title: 'Nayikows',
    medium: 'Embroidery on Raw Silk Sari',
    dimensions: '9 x 26 inches',
    year: '2021'
  },
];

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

  for (const a of art_list) {
    var link = document.getElementById('content').appendChild(document.createElement('a'));
    link.setAttribute('href', artDirectory + a.filename);
    link.setAttribute('data-lightbox', "YOOHOO");
    link.setAttribute('data-title', `${a.title}<br>${a.medium}<br>${a.dimensions}<br>${a.year}`);
    var figure = link.appendChild(document.createElement('figure'));
    var image = figure.appendChild(document.createElement('img'));
    image.setAttribute('class', 'block fade');
    image.setAttribute('alt', a['full-image'])
    image.setAttribute('src', thumbnailDirectory + a.filename);
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
