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
      matching_sentence:
        data.matching_sentence == ""
          ? ""
          : Math.round(data.similarity * 100) +
            "% match with Line:# " +
            data.matching_sentence,
      time: div + ":" + val,
      channel: data.channel
      // order: data.order
      // similarity: data.similarity
    };
  }),
  agentName = agentMock
    .filter(data => (data.agent_id = transcript.agent[0].agent_id))[0]
    .full_name.split(" ")[0],
  custName = transcript.customer[0].full_name.split(" ")[0];
@Component({
  selector: "app-table-map",
  templateUrl: "./table-map.component.html",
  styleUrls: ["./table-map.component.css"]
})
export class TableMapComponent {
  constructor() {}
  // agentName=agentLst;
  dataSource = Multidata.map(data => {
    return {
      ...data,
      speaker: data.channel == 1 ? agentName : custName
    };
  });
  dataSource2 = transcript.script.map(data => {
    return {
      line: data.order + 1,
      matching_sentence:
        data.matching_sentence == ""
          ? ""
          : Math.round(data.similarity * 100) +
            "% match with Line:# " +
            data.matching_sentence,
      sentence: data.sentence,
      speaker: "Rep:"
    };
  });
  displayedColumns: string[] = ["time", "speaker", "sentence"];
  displayedCol2: string[] = ["line", "speaker", "sentence"];
  showDefinition(event) {
    console.log("Event", event.target);
  }
}
