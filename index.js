// Page title
var pageTitle = document.head.getElementsByTagName('title');

// Create image links
const artDirectory = "images/full_size/";
const thumbnailDirectory = "images/thumbnails/";
var art_list = [
  {
    filename: 'Naomi_Basu_BhavacakraRemix_2024.jpeg',
    title: 'Bhavacakra Remix',
    medium: 'Acrylic, indigo, soft pastel, sumi ink, sequins, ash, gold leaf on canvas',
    dimensions: '30 x 40 inches',
    year: '2024'
  },
  {
    filename: 'Naomi_Basu_Zoetrope_2024.GIF',
    title: 'Bhavacakra Remix (Zoetrope)',
    medium: 'Acrylic and sumi ink on canvas',
    dimensions: 'N/A',
    year: '2024'
  },
  {
    filename: 'Naomi_Basu_FlannelSoul_2024.jpeg',
    title: 'Flannel Soul',
    medium: 'Marker, color pencil, indigo, embroidery, iridescent pigment, and silver leaf on tea-stained cotton rag',
    dimensions:'11.7 x 16.5 inches (A3)',
    year: '2024'
  },
  {
    filename: 'Naomi_Basu_Kamadhenu_2024.jpeg',
    title: 'Kāmadhenu',
    medium: 'Marker, sumi ink, color pencil, and soft pastel on tea-stained cotton rag',
    dimensions: '11.7 x 16.5 inches (A3)',
    year: '2024'
  },
  // {
  //   filename: 'Naomi_Basu_TheDairy_2024.jpeg',
  //   title: 'The Dairy',
  //   medium: 'Silk embroidery and image transfer on muslin',
  //   dimensions: '14 x 18 inches',
  //   year: '2024'
  // },
  {
    filename: 'Naomi_Basu_Vyagra_2024.jpeg',
    title: 'Vyagra',
    medium: 'Embroidery on recycled cotton, mounted on satin scroll',
    dimensions: '12.5 x 22.5 inches',
    year: '2024'
  },
  {
    filename: 'Naomi_Basu_Nayikows_2022.jpeg',
    title: 'Nayikows',
    medium: 'Embroidery on raw silk sari',
    dimensions: '9 x 26 inches',
    year: '2022'
  },
  {
    filename: 'Naomi_Basu_Milk_Bath_2023.jpeg',
    title: 'Milk Bath',
    medium: 'Oil and muslin on unstretched canvas',
    dimensions: '36 x 42 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_BornInALakeOfTears_2022.jpeg',
    title: 'Born in a Lake of Tears',
    medium: 'Acrylic and recycled sari on unstretched canvas',
    dimensions: '37.5 x 42 inches',
    year: '2022'
  },
  {
    filename: 'Naomi_Basu_Bushido_2023.jpeg',
    title: 'Bushido',
    medium: 'Acrylic, mineral pigments, and resin on wood',
    dimensions: '12 x 12 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_Vajra_2023.jpeg',
    title: 'Vajra',
    medium: 'Acrylic, mineral pigments, and resin on wood',
    dimensions: '12 x 12 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_Metamorphose_2023.jpeg',
    title: 'Metamorphose',
    medium: 'Acrylic, ground indigo, and resin on wood',
    dimensions: '28 x 28 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_VapeNation_2023.jpeg',
    title: 'VapeNation',
    medium: 'Acrylic, mineral pigments, and resin on wood',
    dimensions: '11.5 x 11.5 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_EnglishBreakfast_2023.jpeg',
    title: 'English Breakfast',
    medium: 'Acrylic, indigo, tea, gold Leaf, and resin on wood',
    dimensions: '11.5 x 11.5 inches',
    year: '2023'
  },
  {
    filename: 'Naomi_Basu_DawonI_2021.jpeg',
    title: 'Dawon (I)',
    medium: 'Acrylic and resin on wood',
    dimensions: '17 x 17 inches',
    year: '2021'
  },
  {
    filename: 'Naomi_Basu_DawonII_2021.jpeg',
    minImage: 'Naomi_Basu_DawonII_2021.jpeg',
    title: 'Dawon (II)',
    medium: 'Acrylic and resin on wood',
    dimensions: '17 x 17 inches',
    year: '2021'
  },
  {
    filename: 'Naomi_Basu_SkyDancer_2022.jpeg',
    title: 'Sky Dancer',
    medium: 'Acrylic on canvas',
    dimensions: '28 x 28 inches',
    year: '2022'
  },
];

var project_names = ['vasar.html', 'earthwiki.html', 'arreviews.html', 'forcefield.html', 'sketchar.html'];
var project_dict = {
  'vasar.html': 'vasAR/vasar-2.gif',
  'earthwiki.html': 'epgifs/earthWiki.gif',
  'arreviews.html': 'epgifs/discovery.gif',
  'forcefield.html': 'epgifs/fade.gif',
  'sketchar.html': 'sketchAR.gif',
};

function setPage(title) {
  window.localStorage.setItem("requestedPage", title);
  window.location.href = "index.html";
}

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
function load_tech() {
  if (pageTitle == "Tech") {
    return;
  }
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
  setTimeout(setupBlocks, 300);
} 

function load_art() {
  if (pageTitle == "Art") {
    return;
  }
  clearElement('content');

  for (const a of art_list) {
    var link = document.getElementById('content').appendChild(document.createElement('a'));
    link.setAttribute('href', artDirectory + a.filename);
    link.setAttribute('data-lightbox', "thismakesitwork");
    link.setAttribute('data-title', `${a.title}<br>${a.medium}<br>${a.dimensions}<br>${a.year}`);
    var figure = link.appendChild(document.createElement('figure'));
    var image = figure.appendChild(document.createElement('img'));
    image.setAttribute('class', 'block fade');
    image.setAttribute('alt', a['full-image'])
    image.setAttribute('src', thumbnailDirectory + a.filename);
  }
  setTimeout(setupBlocks, 300);
}

