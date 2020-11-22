import { Component, OnInit } from "@angular/core";
import { agentMock } from "../products";
import transcript from "../../assets/transcript.json";
import { ConstantsService } from "../constants.service";
// import { MatTableDataSource } from "@angular/material/table/table-data-source";
export interface PeriodicElement {
  time: String;
  sentence: String;
  channel: Number;
  tr: boolean;
  matching_sentence: String;
  similarity: number;
  classNm: String;
  speaker: string;
  // order: number;
}
const contantData = transcript.script.map(data => {
    return {
      line: data.order + 1,
      matching_sentence:
        data.matching_sentence == ""
          ? ""
          : Math.round(data.similarity * 100) +
            '% match with Line:# "' +
            data.matching_sentence +
            '"',
      sentence: data.sentence,
      classNm: "highlight",
      speaker: "Rep:"
    };
  }),
  Multidata = transcript.transcript.map(data => {
    const val = data.timeFrom % 60,
      div = Math.floor(data.timeFrom / 60),
      similarity = Math.round(data.similarity * 100),
      line = contantData
        .filter(dat => dat.sentence == data.matching_sentence)
        .map(val => val.line)
        .join(",");
    return {
      sentence: data.sentence,
      matching_sentence:
        data.matching_sentence == ""
          ? ""
          : similarity +
            "% match with Line:" +
            line +
            ' "' +
            data.matching_sentence +
            '"',
      time: div + ":" + val,
      channel: data.channel,
      // order: data.order,
      similarity: similarity
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
  matValue: Number = 38;
  avg = 35;
  deg: number;
  constructor(private _constant: ConstantsService) {
    this._constant.changeValue.subscribe(value => {
      this.matValue = value;
      this.dataSource = this.dataSource.map(data => {
        let name = "",
          speaker = "",
          tr = false;

        if (data.similarity >= this.matValue && data.channel != 2) {
          name = "highlight";
          tr = true;
        }

        return {
          ...data,
          tr: tr,
          classNm: name
        };
      });
      this.avg = Math.round(
        (this.dataSource.filter(data => data.tr).length /
          this.dataSource.length) *
          100
      );
    });
    this._constant.hoverVal.subscribe(value => {
      this.dataSource2 = this.dataSource2.map(data => {
        let hovr = "highlight ";
        if (data.line == value) hovr = hovr + "hover";
        return {
          ...data,
          classNm: hovr
        };
      });
    });
    this.dataSource = Multidata.map(data => {
      let name = "",
        speaker = "",
        tr = false;
      speaker =
        data.channel == 1
          ? agentName
          : data.channel == 2
          ? custName
          : "Unknown";
      if (data.similarity >= this.matValue && data.channel != 2) {
        name = "highlight";
        tr = true;
      }

      return {
        ...data,
        tr: tr,
        classNm: name,
        speaker: speaker
      };
    });
    this.matValue = this._constant.info.matchValue;
    this.avg = Math.round(
      (this.dataSource.filter(data => data.tr).length /
        this.dataSource.length) *
        100
    );
  }
  // agentName=agentLst;
  dataSource: PeriodicElement[];
  dataSource2 = contantData;
  displayedColumns: string[] = ["time", "speaker", "sentence"];
  displayedCol2: string[] = ["line", "speaker", "sentence"];
  showDefinition(event) {
    let str = event.target.getAttribute("ng-reflect-message"),
      line = str.substr(str.indexOf("Line:") + 5, 1);
    this._constant.toggleHover(+line);
  }
  hideHover() {
    this._constant.toggleHover(0);
  }
}
