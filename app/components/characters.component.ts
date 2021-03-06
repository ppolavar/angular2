/**
 * Created by manojdobbala on 7/11/16.
 */
import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Character, CharacterService } from '../service/character.service';
import { CharacterComponent } from './character.component';

@Component({
    selector: 'story-characters',
    templateUrl: './app/components/characters.component.html',
    styleUrls: ['./app/components/characters.component.css'],
    directives: [CharacterComponent],
    providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
    @Output() changed = new EventEmitter<Character>();
    @Input() storyId: number;
    characters: Character[];
    selectedCharacter: Character;

    constructor(private _characterService: CharacterService) { }

    ngOnInit() {
        this._characterService.getCharacters(this.storyId)
            .subscribe(characters => this.characters = characters);
    }

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}