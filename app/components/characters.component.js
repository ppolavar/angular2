"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by manojdobbala on 7/11/16.
 */
var core_1 = require('@angular/core');
var character_service_1 = require('../service/character.service');
var character_component_1 = require('./character.component');
var CharactersComponent = (function () {
    function CharactersComponent(_characterService) {
        this._characterService = _characterService;
        this.changed = new core_1.EventEmitter();
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._characterService.getCharacters(this.storyId)
            .subscribe(function (characters) { return _this.characters = characters; });
    };
    CharactersComponent.prototype.select = function (selectedCharacter) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CharactersComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CharactersComponent.prototype, "storyId", void 0);
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'story-characters',
            templateUrl: './app/components/characters.component.html',
            styleUrls: ['./app/components/characters.component.css'],
            directives: [character_component_1.CharacterComponent],
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
//# sourceMappingURL=characters.component.js.map