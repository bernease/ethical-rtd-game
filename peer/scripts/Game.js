import { MultiPlayerHandler } from "./MultiPlayerHandler.js";
import { Player } from "./Player.js";
import * as Utils from "./utils.js";

const CONNECTION_DATA = "__connection_data";
const PLAYER_DATA = "__player_data";
const SELECTION_ADDED = "selection_added";
const SELECTION_REMOVED = "selection_removed";


export class Game {

	constructor(runtime) {
		this.initializeGame(runtime);
	}

	initializeGame (runtime) {
		this.SetSignallingStatus("In GameLobby");
		
		this.numOfPlayers = 0;
		this.players = [];
		
		this.curIndivTestersSelected = 0;
		this.maxIndivTestersSelected = 5;
		this.showingPersonInfoUI = false;
		this.showingPersonObj = null;
		this.runtime = runtime;
		this.multiPlayer = new MultiPlayerHandler(runtime);
		
		this.loadCustomerInfoData();
	}
	
	
	initializeTestingSession() {
		this.levelTestersSelected= 0;
		
		this.showingUIObjs = {}
		this.showingUIObjs["showingUIPersonSprites"] = [];
		console.log(this.runtime.objects.PersonSprite.getAllInstances());
		for (const personSpriteObj of this.runtime.objects.PersonSprite.instances()) {
			if (personSpriteObj.instVars.purpose == "showingUI") {
				this.showingUIObjs.showingUIPersonSprites.push(personSpriteObj);
			}
		}
		for (const uiButtonSpriteObjs of this.runtime.objects.UIButtonSprite.instances()) {
			if (uiButtonSpriteObjs.instVars.purpose == "select") { this.showingUIObjs["select"] = uiButtonSpriteObjs; }
			else if (uiButtonSpriteObjs.instVars.purpose == "deselect") { this.showingUIObjs["deselect"] = uiButtonSpriteObjs; }
			else if (uiButtonSpriteObjs.instVars.purpose == "hide") { this.showingUIObjs["hide"] = uiButtonSpriteObjs; }
		}
	}
	
	
	async loadCustomerInfoData() {
		const response = await fetch("customer_info.csv");
		const fetchedText = await response.text();
		this.customerInfo = Utils.parseCSVTextToKeyedObj(fetchedText, "Loan_ID");
		console.log("Customer info");
		console.log(this.customerInfo);
	}
	
	
	connectPeer() {
		this.SetSignallingStatus("On connect peer");
		
		//this.playerAlias = this.runtime.objects.NameInput.getFirstInstance().text;
		this.runtime.globalVars.ROOM_CODE = this.runtime.objects.RoomCodeInput.getFirstInstance().text;
		this.runtime.globalVars.PLAYER_ALIAS = this.runtime.objects.NameInput.getFirstInstance().text;
		
		if ( (this.runtime.globalVars.ROOM_CODE && this.runtime.globalVars.PLAYER_ALIAS))
			this.multiPlayer.connectToSignalling();
		else
		{
			this.SetSignallingStatus("Please provide ROOM CODE and ALIAS");
		}
			
	}
	
	
	triggerShowingUIButton(uiButtonSpriteObj) {
		console.log("Showing person object");
		console.log(this.showingPersonObj);
		if (uiButtonSpriteObj.instVars.purpose == "select") { 
				this.selectPerson(this.showingPersonObj);
				this.showPersonInfoUI(this.showingPersonObj);
			} else if (uiButtonSpriteObj.instVars.purpose == "deselect") {
				this.deselectPerson(this.showingPersonObj);
				this.showPersonInfoUI(this.showingPersonObj);
			} else if (uiButtonSpriteObj.instVars.purpose == "hide") {
				this.togglePersonInfoUI(this.showingPersonObj);
			}
	}
	
	
	togglePersonInfoUI(personSpriteObj) {
		console.log("Showing person info.");
		if (!this.showingPersonInfoUI || this.showingPersonObj != personSpriteObj) {
			// Show / repopulate UI if not showing or new person
			this.showPersonInfoUI(personSpriteObj);
			
		} else {
			this.showingPersonObj = null;
			this.runtime.layout.getLayer("Selection UI").isVisible = false;
			this.runtime.layout.getLayer("Selection UI").isInteractive = false;
		}
		
		const dataId = personSpriteObj.instVars.dataId;
		console.log(this.customerInfo[dataId]);
		let text = "[b]Name[/b]\n[size=4]  [/size]\n";
		text += this.customerInfo[dataId].Gender + "\n";
		text += this.customerInfo[dataId].Property_Type + "\n";
		text += this.customerInfo[dataId].Dependents.toString() + " dependents\n";
		this.runtime.objects.SelectionUIText.getFirstInstance().text = text;
	}
	
	
	showPersonInfoUI(personSpriteObj) {
		this.showingPersonInfoUI = true;
		this.showingPersonObj = personSpriteObj;
		for (const showingUIPersonSpriteObj of this.showingUIObjs.showingUIPersonSprites) {
			showingUIPersonSpriteObj.setAnimation(personSpriteObj.animationName);
		}

		this.runtime.layout.getLayer("Selection UI").isVisible = true;
		this.runtime.layout.getLayer("Selection UI").isInteractive = true;

		this.showingUIObjs["select"].isVisible = false;
		this.showingUIObjs["deselect"].isVisible = false;
		this.showingUIObjs["hide"].isVisible = true;
		if (!personSpriteObj.instVars.selected) {
			this.showingUIObjs["select"].isVisible = true;
		}
		if (personSpriteObj.instVars.selected & personSpriteObj.instVars.selectedBy == this.runtime.globalVars.PLAYER_ALIAS) {
			this.showingUIObjs["deselect"].isVisible = true;
		}
	}
	
	
	toggleSelectDeselectPerson(personSpriteObj) {
		if (personSpriteObj.instVars.selected) {
			this.deselectPerson(personSpriteObj);
		} else {
			this.selectPerson(personSpriteObj);
		}
	}
	
	
	selectPerson(personSpriteObj) {
		console.log("Person selected with dataId="+personSpriteObj.instVars.dataId);
		console.log(personSpriteObj);
		if (!personSpriteObj.instVars.selected && 
				this.curIndivTestersSelected < this.maxIndivTestersSelected) {
			this.curIndivTestersSelected += 1;
			personSpriteObj.instVars.selected = true;
			personSpriteObj.instVars.selectedBy = this.runtime.globalVars.PLAYER_ALIAS;
			personSpriteObj.opacity = 0.5;
			const message = {"dataId": personSpriteObj.instVars.dataId, "selectedBy": this.runtime.globalVars.PLAYER_ALIAS};
			this.multiPlayer.sendDataToHost(SELECTION_ADDED, message);
		}
	}
	
	
	deselectPerson(personSpriteObj) {
		console.log("Person de-selected.");
		console.log(personSpriteObj);
		if (personSpriteObj.instVars.selected && 
				personSpriteObj.instVars.selectedBy == this.runtime.globalVars.PLAYER_ALIAS &&
				this.curIndivTestersSelected >= 1) {
			this.curIndivTestersSelected -= 1;
			personSpriteObj.instVars.selected = false;
			personSpriteObj.opacity = 1.0;
			const message = {"dataId": personSpriteObj.instVars.dataId, "selectedBy": this.runtime.globalVars.PLAYER_ALIAS};
			this.multiPlayer.sendDataToHost(SELECTION_REMOVED, message);
		}
	}

	
	getPersonSpriteByDataId(dataId) {
		for (const ps of this.runtime.objects.PersonSprite.getAllInstances()) {
			if (ps.instVars.dataId == dataId) {
				return ps;
			}
		}
		console.warn("Could not find selection by Data ID!");
	}
	
	
	registerPeerSelectPerson(messageObj) {
		console.log("Person selected by peer.");
		const personSpriteObj = this.getPersonSpriteByDataId(messageObj.message.dataId);
		if (!personSpriteObj.instVars.selected) {
			personSpriteObj.instVars.selected = true;
			personSpriteObj.instVars.selectedBy = messageObj.message.selectedBy;
			personSpriteObj.opacity = 0.5;
		} else {
			// TODO: Handle when conflict between two selections
		}
	}
	
	
	registerPeerDeselectPerson(messageObj) {
		console.log("Person de-selected by peer.");
		const personSpriteObj = this.getPersonSpriteByDataId(messageObj.message.dataId);
		personSpriteObj.instVars.selected = false;
		personSpriteObj.instVars.selectedBy = "";
		personSpriteObj.opacity = 1.0;
	}
	
	
	// This method can be used to show status of game on layout/console
    SetSignallingStatus(str) {
		this.signallingStatus = "Game.js : " + str;
		console.log(this.signallingStatus);
	}
	
}