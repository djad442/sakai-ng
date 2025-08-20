import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        © {{ currentYear }} DhakaQuest.ai | All Rights Reserved | Secure System
    </div>`
})
export class AppFooter {
    currentYear = new Date().getFullYear();
}
