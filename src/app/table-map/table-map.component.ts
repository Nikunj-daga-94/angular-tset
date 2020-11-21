import { Component, OnInit } from "@angular/core";
import { agentMock } from "../products";
import transcript from "../../assets/transcript.json";
// import { MatTableDataSource } from "@angular/material/table/table-data-source";
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
  dataSource2 = transcript.script.map(data => {
    return {
      line: data.order + 1,
      matching_sentence:
        data.similarity * 100 + "% match " + data.matching_sentence,
      sentence: data.sentence
    };
  });
  displayedColumns: string[] = ["time", "channel", "sentence"];
  displayedCol2: string[] = ["sentence", "line"];
  showDefinition(event) {
    console.log("Event", event.target);
  }
}
