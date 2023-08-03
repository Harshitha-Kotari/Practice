import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';

// https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/

//@fortawesome/free-solid-svg-icons // To use regular icons use the prefix ‘far’
//@fortawesome/free-regular-svg-icons // To use solid icons use the prefix ‘fas’
// @fortawesome/free-brands-svg-icons // To use brand icons such as twitter,facebook etc use the prefix ‘fab’
//@fortawesome/pro-light-svg-icons // To use the pro only light icons use the prefix ‘fal’

// Angular Font Awesome icons comes up with useful features like

// Changing icons size
// Fixed width icons
// Rotating icons
// Mirroring icons
// Animating icons
// Adding border to the icons
// Pulled icons
// Changing default styles of icons like color and stroke


@NgModule({
    exports: [
        FontAwesomeModule,
        FaIconLibrary
    ]
})

export class AppIconModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
        library.addIcons(
            faFilm,
            faFish);
    }
    // constructor() {
    //     //legacy old library way
        
    //     legacyLibrary.add(faFilm, faFish);
        
    //     //legacyLibrary.add(fas,far,fab);
    //   }
}