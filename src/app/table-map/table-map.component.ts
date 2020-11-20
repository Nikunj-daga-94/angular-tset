import { Component, OnInit } from "@angular/core";
import { agentMock } from "../products";
import transcript from "../../assets/transcript.json";
export interface PeriodicElement {
  time: String;
  sentence: String;
  channel: Number;
}
const Multidata: PeriodicElement[] = transcript.transcript.map(data => {
  const val = data.timeFrom % 60,
    div = Math.floor(data.timeFrom / 60);
  return {
    sentence: data.sentence,
    matching_sentence: data.matching_sentence,
    time: div + ":" + val,
    channel: data.channel
    // order: data.order
    // similarity: data.similarity
  };
});
@Component({
  selector: "app-table-map",
  templateUrl: "./table-map.component.html",
  styleUrls: ["./table-map.component.css"]
})
export class TableMapComponent {
  constructor() {}
  dataSource = Multidata;
  displayedColumns: string[] = ["time", "channel", "sentence"];
}
