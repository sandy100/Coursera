"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var AboutComponent = (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(leaderService, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.leaderService = leaderService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            moduleId: module.id,
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService,
            core_1.ChangeDetectorRef, Object])
    ], AboutComponent);
    return AboutComponent;
}(drawer_page_1.DrawerPage));
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZFO0FBRTdFLDZEQUEyRDtBQUUzRCw0REFBMEQ7QUFRMUQ7SUFBcUMsa0NBQVU7SUFJM0Msd0JBQW9CLGFBQTRCLEVBQ3BDLGlCQUFtQyxFQUNoQixPQUFPO1FBRnRDLFlBR1Esa0JBQU0saUJBQWlCLENBQUMsU0FDL0I7UUFKbUIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDcEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixhQUFPLEdBQVAsT0FBTyxDQUFBOztJQUV0QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7YUFDOUIsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQ3hDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQztRQU9PLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUZhLDhCQUFhO1lBQ2xCLHdCQUFpQjtPQUx0QyxjQUFjLENBZTFCO0lBQUQscUJBQUM7Q0FBQSxBQWZELENBQXFDLHdCQUFVLEdBZTlDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcbmltcG9ydCB7IExlYWRlciB9IGZyb20gJy4uL3NoYXJlZC9sZWFkZXInOyBcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtYWJvdXQnLCBcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCBcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLCBcbiAgICBzdHlsZVVybHM6IFsnLi9hYm91dC5jb21wb25lbnQuY3NzJ10gXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50ICBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQgeyBcbiAgICBsZWFkZXJzOiBMZWFkZXJbXTtcbiAgICBlcnJNZXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxlYWRlclNlcnZpY2U6IExlYWRlclNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLCAgICBcbiAgICAgICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyBcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTsgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgICB0aGlzLmxlYWRlclNlcnZpY2UuZ2V0TGVhZGVycygpIFxuICAgICAgICAuc3Vic2NyaWJlKGxlYWRlcnMgPT4gdGhpcy5sZWFkZXJzID0gbGVhZGVycyxcbiAgICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcbiAgICB9XG59Il19