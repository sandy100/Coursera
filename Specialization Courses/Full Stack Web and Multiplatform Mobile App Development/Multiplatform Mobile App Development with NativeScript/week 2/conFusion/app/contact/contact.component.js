"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var ContactComponent = (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Object])
    ], ContactComponent);
    return ContactComponent;
}(drawer_page_1.DrawerPage));
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUU3RSw0REFBMEQ7QUFRMUQ7SUFBc0Msb0NBQVU7SUFFNUMsMEJBQW9CLGlCQUFtQyxFQUN4QixPQUFPO1FBRHRDLFlBRVEsa0JBQU0saUJBQWlCLENBQUMsU0FDL0I7UUFIbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUN4QixhQUFPLEdBQVAsT0FBTyxDQUFBOztJQUV0QyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFSUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7UUFJTyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FEZ0Isd0JBQWlCO09BRjlDLGdCQUFnQixDQVM1QjtJQUFELHVCQUFDO0NBQUEsQUFURCxDQUFzQyx3QkFBVSxHQVMvQztBQVRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcblxuQENvbXBvbmVudCh7IFxuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3QnLCBcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCBcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCcsIFxuICAgIHN0eWxlVXJsczogWycuL2NvbnRhY3QuY29tcG9uZW50LmNzcyddIFxufSkgXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyBcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTsgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgIH1cbn0iXX0=