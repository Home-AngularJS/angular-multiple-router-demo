import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  attestationActions = [
    {
      "deviceBlock": 5,
      "transactionBlock": 4,
      "pinBlock": 3,
      "manualBlock": 1,
      "qrBlock": 1,
      "nfcBlock": 2,
      "noBlock": 0
    }
  ];

  constructor() { }

  public getAttestationActions():Array<{deviceBlock, transactionBlock, pinBlock, manualBlock, qrBlock, nfcBlock, noBlock}> {
    return this.attestationActions;
  }

  public updateAttestationActions(attestationActions: {deviceBlock, transactionBlock, pinBlock, manualBlock, qrBlock, nfcBlock, noBlock}) {
    console.info(attestationActions);
    this.attestationActions[0].deviceBlock = attestationActions.deviceBlock;
    this.attestationActions[0].transactionBlock = attestationActions.transactionBlock;
    this.attestationActions[0].pinBlock = attestationActions.pinBlock;
    this.attestationActions[0].manualBlock = attestationActions.manualBlock;
    this.attestationActions[0].qrBlock = attestationActions.qrBlock;
    this.attestationActions[0].nfcBlock = attestationActions.nfcBlock;
    this.attestationActions[0].noBlock = attestationActions.noBlock;
  }

}
