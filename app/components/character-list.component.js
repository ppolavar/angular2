/**
 * Created by manojdobbala on 7/11/16.
 */
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
var core_1 = require('@angular/core');
var character_1 = require('./character');
var character_component_1 = require('./character.component');
var CharacterListComponent = (function () {
    function CharacterListComponent() {
        this.characters = [
            new character_1.Character(1, 'Han Solo'),
            new character_1.Character(2, 'Luke Skywalker'),
            new character_1.Character(3, 'BB-8'),
            new character_1.Character(4, 'Rey'),
            new character_1.Character(5, 'Manoj')
        ];
    }
    CharacterListComponent.prototype.select = function (character) {
        this.selectedCharacter = character;
    };
    CharacterListComponent = __decorate([
        core_1.Component({
            selector: 'character-list',
            templateUrl: 'app/components/character-list.component.html',
            directives: [character_component_1.CharacterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterListComponent);
    return CharacterListComponent;
}());
exports.CharacterListComponent = CharacterListComponent;
//# sourceMappingURL=character-list.component.js.map