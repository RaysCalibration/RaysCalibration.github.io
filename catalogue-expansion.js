(function () {
  const catalogue = window.raysCatalogue;
  if (!catalogue || !Array.isArray(catalogue.products)) return;

  const cell = text => ({ text, colspan: 1, rowspan: 1 });
  const table = rows => rows.map(row => row.map(cell));
  const image = (key, src) => { catalogue.assets[key] = src; return key; };
  const pdfHref = 'assets/catalogues/MikroTech_All%20Product_Catalogue.pdf';

  const intros = {
    'UPRIGHT METALLURGICAL MICROSCOPE': 'An upright reflected-light metallurgical microscope for examining polished metal specimens, coatings and microstructures from above in laboratory and quality-control work.',
    'INVERTED METALLURGICAL MICROSCOPE': 'An inverted metallurgical microscope designed for stable inspection of large, heavy or irregular specimens placed directly on the stage with the objectives below the sample.',
    'STEREO MICROSCOPES': 'Zoom stereo microscopes provide a true three-dimensional view, generous working distance and clear surface detail for weld, crack and industrial inspection.',
    'IMAGE ANALYSIS & MEASUREMENT SYSTEMS': 'Digital microscopy and image-analysis systems for repeatable measurement, microstructure evaluation, particle analysis and documented quality reports.',
    'MILLIPORE / METAL CLEANLINESS INSPECTION KITS': 'Complete filtration and particle-analysis kits for checking contamination in components, liquids, oils and precision manufacturing processes.',
    'LASER SPECTROMETER': 'A portable laser spectrometer for fast, non-destructive multi-element alloy identification and on-site material verification.',
    'COATING THICKNESS GAUGE': 'A portable coating-thickness gauge with automatic substrate detection, calibration, statistics and data storage for ferrous and non-ferrous bases.',
    'LEEB & UCI HARDNESS TESTER': 'A dual-method portable hardness tester combining Leeb rebound and UCI measurement for large parts, small components and surface-hardened layers.',
    'PUSH PULL GAUGE': 'A digital force gauge for accurate push, pull, tension and compression measurements, with peak hold and test-stand compatibility.',
    'ULTRASONIC FLAW DETECTOR': 'A rugged portable ultrasonic flaw detector for reliable weld, casting and forging inspection using digital A-scan and advanced evaluation curves.',
    'PORTABLE BRINELL HARDNESS TESTER': 'A high-force portable Brinell tester for direct hardness testing of large castings, forgings and coarse-grained materials.'
  };

  const products = [
    { id:'upright-metallurgical-microscope', title:'UPRIGHT METALLURGICAL MICROSCOPE', model:'', models:[], category:'metallography', subcategory:'metallography', page:8, images:[image('upright-metallurgical-microscope','assets/products/metallography/upright-metallurgical-microscope.png')], cells:table([['Product','Upright Metallurgical Microscope'],['Configuration','Upright reflected-light microscope'],['Specimen Position','Specimen rests below the objectives on a mechanical stage'],['Optics','High-resolution plan objectives with a wide magnification range'],['Illumination','Brightfield, darkfield and polarized reflected-light options'],['Focusing','Coaxial coarse and fine focusing'],['Imaging','Trinocular digital-camera and image-analysis compatibility'],['Applications','Metallography, coating inspection, failure analysis, R&D and quality control']]) },
    { id:'inverted-metallurgical-microscope', title:'INVERTED METALLURGICAL MICROSCOPE', model:'', models:[], category:'metallography', subcategory:'metallography', page:8, images:[image('inverted-metallurgical-microscope','assets/products/metallography/inverted-metallurgical-microscope.png')], cells:table([['Product','Inverted Metallurgical Microscope'],['Configuration','Inverted reflected-light microscope'],['Specimen Position','Specimen rests above downward-facing objectives'],['Sample Capacity','Suitable for large, heavy and irregularly shaped specimens'],['Optics','High-resolution plan objectives with a wide magnification range'],['Illumination','Reflected brightfield with optional darkfield and polarization'],['Operation','Stable stage with coaxial coarse and fine focusing'],['Imaging','Digital-camera and image-analysis compatibility'],['Applications','Foundry samples, production inspection, metallography and quality control']]) },
    { id:'stereo-microscopes', title:'STEREO MICROSCOPES', model:'', models:[], category:'metallography', subcategory:'metallography', page:8, images:[image('stereo-microscopes','assets/products/metallography/stereo-microscopes.png')], cells:table([['Product','Stereo Microscopes'],['Configuration','Zoom / trinocular'],['Viewing','True 3D stereo imaging with wide-field optics'],['Magnification','Continuous zoom range'],['Illumination','Incident and transmitted illumination'],['Working Distance','Extended working distance for inspection tasks'],['Imaging','Digital imaging compatible'],['Applications','Weld penetration, surface and crack inspection, QC and failure analysis']]) },
    { id:'image-analysis-measurement-systems', title:'IMAGE ANALYSIS & MEASUREMENT SYSTEMS', model:'', models:[], category:'metallography', subcategory:'metallography', page:8, images:[image('image-analysis-measurement-system','assets/products/metallography/image-analysis-measurement-system.png')], cells:table([['Product','Image Analysis & Measurement Systems'],['Solution','Digital imaging and measurement'],['Detection','Automatic edge detection'],['Analysis','Grain size, phase and area fraction'],['Inspection','Inclusion and particle analysis'],['Measurement','Coating/layer thickness and decarburization depth'],['Reporting','Reports with images, data and charts'],['Applications','R&D, quality control and production']]) },
    { id:'metal-cleanliness-inspection-kits', title:'MILLIPORE / METAL CLEANLINESS INSPECTION KITS', model:'', models:[], category:'metallography', subcategory:'metallography', page:8, images:[image('metal-cleanliness-inspection-kit','assets/products/metallography/metal-cleanliness-inspection-kit.png')], cells:table([['Product','Millipore / Metal Cleanliness Inspection Kits'],['Purpose','Particle detection and contamination analysis'],['Standards','ISO 16232, VDA 19 and NAS 1638 workflows'],['Process','Filtration and particle capture'],['Media','Liquids, oils and solvents'],['Kit Contents','Vacuum apparatus, dispenser, filter holders and accessories'],['Applications','Automotive, hydraulics, aerospace and precision engineering']]) },
    { id:'laser-spectrometer', title:'LASER SPECTROMETER', model:'', models:[], category:'special-products', subcategory:'special-products', page:10, images:[image('laser-spectrometer','assets/products/special-products/laser-spectrometer.png')], cells:table([['Product','Laser Spectrometer'],['Analysis','Multi-element alloy analysis'],['Method','Non-destructive elemental analysis'],['Operation','Handheld with colour touchscreen'],['Identification','Automatic alloy-grade identification'],['Results','Fast material verification with storage and reports'],['Applications','Incoming inspection, sorting and on-site PMI']]) },
    { id:'coating-thickness-gauge', title:'COATING THICKNESS GAUGE', model:'', models:[], category:'special-products', subcategory:'special-products', page:10, images:[image('coating-thickness-gauge','assets/products/special-products/coating-thickness-gauge.png')], cells:table([['Product','Coating Thickness Gauge'],['Measuring Range','0–5000 µm'],['Substrates','Automatic F/N ferrous and non-ferrous detection'],['Calibration','Zero, foil and multipoint calibration'],['Statistics','Mean, minimum, maximum and standard deviation'],['Modes','Single and continuous measurement'],['Data','Storage, recall, deletion and USB output'],['Field Use','Alarms, multilingual interface and portable design']]) },
    { id:'leeb-uci-hardness-tester', title:'LEEB & UCI HARDNESS TESTER', model:'', models:[], category:'special-products', subcategory:'special-products', page:10, images:[image('leeb-uci-hardness-tester','assets/products/special-products/leeb-uci-hardness-tester.png')], cells:table([['Product','Leeb & UCI Hardness Tester'],['Leeb Range','170–960 HLD'],['Rockwell Range','20–68 HRC'],['Brinell Range','19–651 HB'],['Vickers Range','80–976 HV'],['Methods','Leeb rebound and UCI'],['Features','Scale conversion, data storage and USB'],['Applications','Small or large components, NDT and surface-hardened layers']]) },
    { id:'push-pull-gauge', title:'PUSH PULL GAUGE', model:'', models:[], category:'special-products', subcategory:'special-products', page:10, images:[image('push-pull-gauge','assets/products/special-products/push-pull-gauge.png')], cells:table([['Product','Push Pull Gauge'],['Capacity','0–100 kg'],['Measurement','Push, pull, tension and compression force'],['Display','Digital display with peak hold and real-time tracking'],['Units','Selectable force units'],['Mounting','Compatible with a test stand'],['Protection','Overload protection'],['Data','Output for recording test results']]) },
    { id:'ultrasonic-flaw-detector', title:'ULTRASONIC FLAW DETECTOR', model:'', models:[], category:'special-products', subcategory:'special-products', page:10, images:[image('ultrasonic-flaw-detector','assets/products/special-products/ultrasonic-flaw-detector.png')], cells:table([['Product','Ultrasonic Flaw Detector'],['Inspection','Fast and reliable non-destructive testing'],['Display','Digital A-scan'],['Evaluation','DAC, TCG, DGS and AVG functions'],['Probes','Single and dual-probe operation'],['Controls','Adjustable gain, range, gates and alarms'],['Data','Result storage and USB transfer'],['Applications','Welds, castings, forgings and on-site inspection']]) },
    { id:'portable-brinell-hardness-tester', title:'PORTABLE BRINELL HARDNESS TESTER', model:'', models:[], category:'special-products', subcategory:'special-products', page:10, images:[image('portable-brinell-hardness-tester-secondary','assets/products/special-products/portable-brinell-hardness-tester-secondary.png')], cells:table([['Product','Portable Brinell Hardness Tester'],['Test Force','Up to 3000 kgf'],['Force Application','Hydraulic'],['Result','Direct Brinell hardness from permanent indentation'],['Configuration','Multiple test forces and indenters'],['Construction','Robust mechanical design for field use'],['Measurement','Indentation measurement after testing'],['Applications','Large castings, forgings and coarse materials']]) }
  ];

  const existing = new Set(catalogue.products.map(product => product.id));
  products.forEach(product => { if (!existing.has(product.id)) catalogue.products.push(product); });

  const baseIntro = window.productIntroduction;
  const baseDetailIntro = window.raysProductDetailIntroduction;
  window.productIntroduction = name => intros[name] || (typeof baseIntro === 'function' ? baseIntro(name) : '');
  window.raysProductDetailIntroduction = name => intros[name] || (typeof baseDetailIntro === 'function' ? baseDetailIntro(name) : '');

  function applyCatalogueSource() {
    const id = location.hash.startsWith('#catalog/') ? location.hash.slice(9) : '';
    const product = products.find(item => item.id === id);
    if (!product) return;
    const detail=document.getElementById('rays-catalogue-detail');
    const download=detail?.querySelector('.cat-download');
    const note=detail?.querySelector('.cat-note');
    if (download) { download.href=pdfHref; download.download='MikroTech_All Product_Catalogue.pdf'; }
    if (note) note.textContent='Source: MikroTech All Product Catalogue, page '+product.page+'.';
  }
  window.addEventListener('hashchange', () => setTimeout(applyCatalogueSource, 0));
  const requestedHash = window.raysAdminRequestedHash;
  if (requestedHash?.startsWith('#catalog/') && products.some(item => requestedHash === '#catalog/' + item.id)) {
    location.hash = requestedHash;
  }
  window.dispatchEvent(new HashChangeEvent('hashchange'));
  setTimeout(applyCatalogueSource, 0);
})();
